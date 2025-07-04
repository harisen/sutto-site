#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

/**
 * テストサイト生成・デプロイスクリプト
 * アンケートデータからサイトを自動生成し、Vercelにテストデプロイする
 */

class TestSiteGenerator {
    constructor() {
        this.templatesDir = path.join(__dirname, '..', 'templates', 'site-templates');
        this.testSitesDir = path.join(__dirname, '..', 'test-sites');
        this.deploymentDataFile = path.join(__dirname, '..', 'data', 'test-deployments.json');
    }

    /**
     * ランダムIDを生成
     */
    generateRandomId() {
        return crypto.randomBytes(6).toString('hex');
    }

    /**
     * アンケートデータからサイトを生成
     */
    async generateSite(clientData) {
        const testId = this.generateRandomId();
        const clientId = clientData.meta?.clientId || clientData.id || 'unknown';
        const siteName = `${clientId}-test-${testId}`;
        const siteDir = path.join(this.testSitesDir, siteName);

        console.log(`🚀 テストサイト生成開始: ${siteName}`);

        try {
            // ディレクトリ作成
            await fs.mkdir(siteDir, { recursive: true });

            // HTMLファイル生成
            const html = await this.generateHTML(clientData);
            await fs.writeFile(path.join(siteDir, 'index.html'), html);

            // CSSファイル生成
            const css = await this.generateCSS(clientData);
            await fs.writeFile(path.join(siteDir, 'styles.css'), css);

            // JSファイル生成
            const js = await this.generateJS(clientData);
            await fs.writeFile(path.join(siteDir, 'script.js'), js);

            // vercel.json作成（デプロイ設定）
            const vercelConfig = {
                name: siteName,
                public: false,
                github: {
                    enabled: false
                }
            };
            await fs.writeFile(
                path.join(siteDir, 'vercel.json'),
                JSON.stringify(vercelConfig, null, 2)
            );

            return { siteName, siteDir, testId };
        } catch (error) {
            console.error('サイト生成エラー:', error);
            throw error;
        }
    }

    /**
     * HTMLテンプレート生成
     */
    async generateHTML(clientData) {
        const { client, project } = clientData;
        
        return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>${client.companyName || client.name} - テストサイト</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- テストサイトヘッダー -->
    <div class="test-banner">
        <p>🔧 これはテストサイトです | 顧客: ${client.name} | プラン: ${clientData.meta.projectType}</p>
    </div>

    <!-- ヒーローセクション -->
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">${project.mainMessage || client.companyName}</h1>
            <p class="hero-subtitle">${project.objective || '目的未設定'}</p>
            <a href="#contact" class="cta-button">お問い合わせ</a>
        </div>
    </section>

    <!-- サービスセクション -->
    <section class="services">
        <div class="container">
            <h2>サービス内容</h2>
            <p>${client.industry || '業種情報なし'}</p>
        </div>
    </section>

    <!-- ターゲット層セクション -->
    <section class="target">
        <div class="container">
            <h2>対象のお客様</h2>
            <ul>
                ${(project.targetAudience || []).map(target => `<li>${target}</li>`).join('')}
            </ul>
        </div>
    </section>

    <!-- お問い合わせセクション -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>お問い合わせ</h2>
            <p>電話: ${client.phone || '未設定'}</p>
            <p>メール: ${client.email || '未設定'}</p>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`;
    }

    /**
     * CSSテンプレート生成
     */
    async generateCSS(clientData) {
        const plan = clientData.meta.projectType;
        const isRich = plan === 'rich';

        return `/* テストサイト用CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* テストバナー */
.test-banner {
    background: #ff6b6b;
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

/* コンテナ */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ヒーローセクション */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 120px 0 80px;
    text-align: center;
    margin-top: 40px;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 20px;
    ${isRich ? 'animation: fadeInUp 1s ease-out;' : ''}
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.cta-button {
    display: inline-block;
    padding: 15px 40px;
    background: white;
    color: #667eea;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: translateY(-3px);
}

/* セクション共通 */
section {
    padding: 80px 0;
}

section h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
}

/* サービスセクション */
.services {
    background: #f8f9fa;
}

/* ターゲットセクション */
.target ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.target li {
    background: #e3f2fd;
    padding: 10px 20px;
    border-radius: 25px;
}

/* お問い合わせセクション */
.contact {
    background: #333;
    color: white;
    text-align: center;
}

.contact h2 {
    color: white;
}

${isRich ? `
/* リッチプラン用アニメーション */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
` : ''}

/* レスポンシブ */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
}`;
    }

    /**
     * JSテンプレート生成
     */
    async generateJS(clientData) {
        const isRich = clientData.meta.projectType === 'rich';

        return `// テストサイト用JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('テストサイト読み込み完了');
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    ${isRich ? `
    // リッチプラン用アニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
    ` : ''}
});`;
    }

    /**
     * Vercelにデプロイ
     */
    async deployToVercel(siteDir, siteName) {
        console.log(`📤 Vercelへのデプロイ開始: ${siteName}`);

        try {
            // Vercel CLIでデプロイ
            const { stdout } = await execPromise(
                `cd "${siteDir}" && vercel --yes --no-clipboard`,
                { env: { ...process.env, VERCEL_SCOPE: 'team_or_user' } }
            );

            // URLを抽出
            const urlMatch = stdout.match(/https:\/\/[^\s]+\.vercel\.app/);
            const deploymentUrl = urlMatch ? urlMatch[0] : null;

            if (!deploymentUrl) {
                throw new Error('デプロイURLの取得に失敗しました');
            }

            console.log(`✅ デプロイ完了: ${deploymentUrl}`);
            return deploymentUrl;
        } catch (error) {
            console.error('デプロイエラー:', error);
            throw error;
        }
    }

    /**
     * デプロイ情報を保存
     */
    async saveDeploymentInfo(clientId, deploymentData) {
        try {
            let deployments = {};
            
            // 既存のデータを読み込む
            try {
                const data = await fs.readFile(this.deploymentDataFile, 'utf8');
                deployments = JSON.parse(data);
            } catch (e) {
                // ファイルが存在しない場合は新規作成
            }

            // 新しいデプロイ情報を追加
            deployments[clientId] = deployments[clientId] || [];
            deployments[clientId].push({
                ...deploymentData,
                createdAt: new Date().toISOString(),
                status: 'active'
            });

            // ファイルに保存
            await fs.mkdir(path.dirname(this.deploymentDataFile), { recursive: true });
            await fs.writeFile(
                this.deploymentDataFile,
                JSON.stringify(deployments, null, 2)
            );

            console.log('✅ デプロイ情報を保存しました');
        } catch (error) {
            console.error('デプロイ情報の保存エラー:', error);
        }
    }

    /**
     * メイン処理
     */
    async generateAndDeploy(clientDataPath) {
        try {
            // クライアントデータを読み込む
            const clientDataRaw = await fs.readFile(clientDataPath, 'utf8');
            const clientData = JSON.parse(clientDataRaw);

            // サイトを生成
            const { siteName, siteDir, testId } = await this.generateSite(clientData);

            // Vercelにデプロイ
            const deploymentUrl = await this.deployToVercel(siteDir, siteName);

            // デプロイ情報を保存
            const clientId = clientData.meta?.clientId || clientData.id || 'unknown';
            await this.saveDeploymentInfo(clientId, {
                testId,
                siteName,
                deploymentUrl,
                siteDir,
                plan: clientData.meta?.projectType || 'standard'
            });

            console.log('\n🎉 テストサイトの生成とデプロイが完了しました！');
            console.log(`URL: ${deploymentUrl}`);
            console.log(`サイト名: ${siteName}`);
            console.log(`テストID: ${testId}`);

            return { deploymentUrl, siteName, testId };
        } catch (error) {
            console.error('エラーが発生しました:', error);
            throw error;
        }
    }
}

// CLIとして実行された場合
if (require.main === module) {
    const generator = new TestSiteGenerator();
    const clientDataPath = process.argv[2];

    if (!clientDataPath) {
        console.error('使用方法: node generate-test-site.js <クライアントデータJSONパス>');
        process.exit(1);
    }

    generator.generateAndDeploy(clientDataPath)
        .then(() => process.exit(0))
        .catch(() => process.exit(1));
}

module.exports = TestSiteGenerator;