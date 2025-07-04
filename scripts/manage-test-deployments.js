#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

/**
 * テストデプロイメント管理スクリプト
 * テストサイトの一覧表示、削除、期限管理を行う
 */

class DeploymentManager {
    constructor() {
        this.deploymentDataFile = path.join(__dirname, '..', 'data', 'test-deployments.json');
        this.testSitesDir = path.join(__dirname, '..', 'test-sites');
    }

    /**
     * 全デプロイメントを取得
     */
    async getAllDeployments() {
        try {
            const data = await fs.readFile(this.deploymentDataFile, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return {};
        }
    }

    /**
     * 特定のクライアントのデプロイメントを取得
     */
    async getClientDeployments(clientId) {
        const deployments = await this.getAllDeployments();
        return deployments[clientId] || [];
    }

    /**
     * デプロイメントを削除
     */
    async removeDeployment(clientId, testId) {
        console.log(`🗑️  デプロイメント削除開始: ${clientId} - ${testId}`);

        try {
            const deployments = await this.getAllDeployments();
            const clientDeployments = deployments[clientId] || [];
            
            // 削除対象を見つける
            const deployment = clientDeployments.find(d => d.testId === testId);
            if (!deployment) {
                throw new Error('デプロイメントが見つかりません');
            }

            // Vercelから削除
            if (deployment.deploymentUrl) {
                console.log('Vercelからデプロイメントを削除中...');
                try {
                    await execPromise(`vercel remove ${deployment.siteName} --yes`);
                } catch (error) {
                    console.error('Vercel削除エラー:', error.message);
                }
            }

            // ローカルファイルを削除
            if (deployment.siteDir) {
                console.log('ローカルファイルを削除中...');
                try {
                    await fs.rm(deployment.siteDir, { recursive: true, force: true });
                } catch (error) {
                    console.error('ローカルファイル削除エラー:', error.message);
                }
            }

            // デプロイメントリストから削除
            deployments[clientId] = clientDeployments.filter(d => d.testId !== testId);
            
            // 空になったら親キーも削除
            if (deployments[clientId].length === 0) {
                delete deployments[clientId];
            }

            // 保存
            await fs.writeFile(this.deploymentDataFile, JSON.stringify(deployments, null, 2));

            console.log('✅ デプロイメントを削除しました');
            return true;
        } catch (error) {
            console.error('削除エラー:', error);
            throw error;
        }
    }

    /**
     * 期限切れのデプロイメントを削除
     */
    async cleanupExpiredDeployments(daysToKeep = 7) {
        console.log(`🧹 ${daysToKeep}日以上経過したデプロイメントをクリーンアップ中...`);

        const deployments = await this.getAllDeployments();
        const now = new Date();
        let cleanupCount = 0;

        for (const [clientId, clientDeployments] of Object.entries(deployments)) {
            for (const deployment of clientDeployments) {
                const createdAt = new Date(deployment.createdAt);
                const daysSinceCreation = (now - createdAt) / (1000 * 60 * 60 * 24);

                if (daysSinceCreation > daysToKeep && deployment.status === 'active') {
                    console.log(`期限切れ: ${deployment.siteName} (${Math.floor(daysSinceCreation)}日経過)`);
                    try {
                        await this.removeDeployment(clientId, deployment.testId);
                        cleanupCount++;
                    } catch (error) {
                        console.error(`クリーンアップエラー: ${deployment.siteName}`, error.message);
                    }
                }
            }
        }

        console.log(`✅ ${cleanupCount}件のデプロイメントをクリーンアップしました`);
        return cleanupCount;
    }

    /**
     * 納品完了時の処理
     */
    async markAsDelivered(clientId) {
        console.log(`📦 納品完了処理: ${clientId}`);

        const deployments = await this.getAllDeployments();
        const clientDeployments = deployments[clientId] || [];

        // すべてのアクティブなデプロイメントを削除
        for (const deployment of clientDeployments) {
            if (deployment.status === 'active') {
                try {
                    await this.removeDeployment(clientId, deployment.testId);
                } catch (error) {
                    console.error(`削除エラー: ${deployment.siteName}`, error.message);
                }
            }
        }

        console.log('✅ 納品完了処理が完了しました');
    }

    /**
     * デプロイメント一覧を表示
     */
    async listDeployments() {
        const deployments = await this.getAllDeployments();
        
        console.log('\n📋 アクティブなテストデプロイメント一覧\n');
        console.log('='.repeat(80));

        let totalCount = 0;

        for (const [clientId, clientDeployments] of Object.entries(deployments)) {
            const activeDeployments = clientDeployments.filter(d => d.status === 'active');
            if (activeDeployments.length === 0) continue;

            console.log(`\n👤 クライアント: ${clientId}`);
            console.log('-'.repeat(40));

            for (const deployment of activeDeployments) {
                const createdAt = new Date(deployment.createdAt);
                const daysSince = Math.floor((new Date() - createdAt) / (1000 * 60 * 60 * 24));

                console.log(`  📍 ${deployment.siteName}`);
                console.log(`     URL: ${deployment.deploymentUrl}`);
                console.log(`     プラン: ${deployment.plan}`);
                console.log(`     作成日: ${createdAt.toLocaleDateString('ja-JP')} (${daysSince}日前)`);
                console.log(`     テストID: ${deployment.testId}`);
                console.log('');

                totalCount++;
            }
        }

        console.log('='.repeat(80));
        console.log(`\n合計: ${totalCount}件のアクティブなデプロイメント\n`);
    }

    /**
     * テストURLを生成（ダッシュボード用）
     */
    async getTestUrlsForDashboard() {
        const deployments = await this.getAllDeployments();
        const result = {};

        for (const [clientId, clientDeployments] of Object.entries(deployments)) {
            const activeDeployments = clientDeployments
                .filter(d => d.status === 'active')
                .map(d => ({
                    url: d.deploymentUrl,
                    createdAt: d.createdAt,
                    testId: d.testId
                }));

            if (activeDeployments.length > 0) {
                result[clientId] = activeDeployments;
            }
        }

        return result;
    }
}

// CLIコマンド処理
if (require.main === module) {
    const manager = new DeploymentManager();
    const command = process.argv[2];
    const args = process.argv.slice(3);

    const commands = {
        'list': async () => {
            await manager.listDeployments();
        },
        'remove': async () => {
            if (args.length < 2) {
                console.error('使用方法: manage-test-deployments.js remove <clientId> <testId>');
                process.exit(1);
            }
            await manager.removeDeployment(args[0], args[1]);
        },
        'cleanup': async () => {
            const days = args[0] ? parseInt(args[0]) : 7;
            await manager.cleanupExpiredDeployments(days);
        },
        'deliver': async () => {
            if (!args[0]) {
                console.error('使用方法: manage-test-deployments.js deliver <clientId>');
                process.exit(1);
            }
            await manager.markAsDelivered(args[0]);
        },
        'help': () => {
            console.log(`
テストデプロイメント管理ツール

使用方法:
  node manage-test-deployments.js <command> [args]

コマンド:
  list              - すべてのアクティブなデプロイメントを表示
  remove <clientId> <testId> - 特定のデプロイメントを削除
  cleanup [days]    - 指定日数以上経過したデプロイメントを削除（デフォルト: 7日）
  deliver <clientId> - 納品完了処理（該当クライアントのすべてのテストを削除）
  help              - このヘルプを表示
`);
        }
    };

    const commandFunc = commands[command] || commands.help;
    
    commandFunc()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error('エラー:', error.message);
            process.exit(1);
        });
}

module.exports = DeploymentManager;