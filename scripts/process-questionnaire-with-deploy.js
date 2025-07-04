#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const TestSiteGenerator = require('./generate-test-site');

/**
 * アンケート処理＋テストデプロイ統合スクリプト
 * アンケートを処理して自動的にテストサイトを生成・デプロイする
 */

async function processAndDeploy(questionnaireText, clientId) {
    try {
        console.log('📋 アンケート処理を開始します...');

        // 1. アンケートをパース
        const parsedData = parseQuestionnaire(questionnaireText);
        
        // 2. クライアントデータを整形
        const clientData = {
            id: clientId,
            meta: {
                createdAt: new Date().toISOString(),
                clientName: clientId,
                projectType: parsedData.plan === 'リッチプラン（5万円）' ? 'rich' : 'standard'
            },
            client: {
                name: parsedData.name,
                companyName: parsedData.company,
                email: parsedData.email,
                phone: parsedData.phone,
                industry: parsedData.industry,
                budget: parsedData.plan,
                deadline: parsedData.deadline
            },
            project: {
                objective: parsedData.objective,
                targetAudience: parseTargetAudience(parsedData.target),
                mainMessage: parsedData.mainMessage || generateMainMessage(parsedData)
            }
        };

        // 3. クライアントフォルダを作成
        const clientDir = path.join(__dirname, '..', 'clients', clientId);
        const questionnaireDir = path.join(clientDir, 'questionnaire');
        await fs.mkdir(questionnaireDir, { recursive: true });

        // 4. アンケートデータを保存
        await fs.writeFile(
            path.join(questionnaireDir, 'original.txt'),
            questionnaireText
        );
        await fs.writeFile(
            path.join(questionnaireDir, 'processed.json'),
            JSON.stringify(clientData, null, 2)
        );

        console.log('✅ アンケート処理完了');
        console.log('🚀 テストサイトの生成を開始します...');

        // 5. テストサイトを生成・デプロイ
        const generator = new TestSiteGenerator();
        const result = await generator.generateAndDeploy(
            path.join(questionnaireDir, 'processed.json')
        );

        console.log('\n🎉 完了！');
        console.log(`テストURL: ${result.deploymentUrl}`);
        console.log(`クライアントID: ${clientId}`);
        
        return result;
    } catch (error) {
        console.error('エラー:', error);
        throw error;
    }
}

/**
 * アンケートテキストをパース
 */
function parseQuestionnaire(text) {
    const lines = text.split('\n');
    const data = {};
    
    let currentKey = '';
    
    for (const line of lines) {
        if (line.includes('：')) {
            const [key, ...valueParts] = line.split('：');
            const value = valueParts.join('：').trim();
            
            if (key.includes('お名前')) {
                data.name = value;
            } else if (key.includes('会社名')) {
                data.company = value;
            } else if (key.includes('メールアドレス')) {
                data.email = value;
            } else if (key.includes('電話番号')) {
                data.phone = value;
            } else if (key.includes('プラン')) {
                data.plan = value;
            } else if (key.includes('業種')) {
                data.industry = value;
                currentKey = 'industry';
            } else if (key.includes('ターゲット')) {
                data.target = value;
                currentKey = 'target';
            } else if (key.includes('目的')) {
                data.objective = value;
                currentKey = 'objective';
            } else if (key.includes('納期')) {
                data.deadline = value;
            }
        } else if (line.trim() && currentKey) {
            // 複数行の値を処理
            data[currentKey] += '\n' + line.trim();
        }
    }
    
    return data;
}

/**
 * ターゲット層をパース
 */
function parseTargetAudience(targetText) {
    if (!targetText) return [];
    
    const targets = [];
    const ageGroups = ['10代', '20代', '30代', '40代', '50代', '60代以上'];
    
    for (const age of ageGroups) {
        if (targetText.includes(age)) {
            targets.push(age);
        }
    }
    
    return targets.length > 0 ? targets : ['一般'];
}

/**
 * メインメッセージを生成
 */
function generateMainMessage(data) {
    return `${data.industry}の${data.company || data.name}です`;
}

// CLIとして実行
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.error('使用方法: node process-questionnaire-with-deploy.js <アンケートファイル> <クライアントID>');
        console.error('例: node process-questionnaire-with-deploy.js questionnaire.txt tanaka-dental');
        process.exit(1);
    }
    
    const [questionnairePath, clientId] = args;
    
    fs.readFile(questionnairePath, 'utf8')
        .then(text => processAndDeploy(text, clientId))
        .then(() => process.exit(0))
        .catch(error => {
            console.error('処理失敗:', error);
            process.exit(1);
        });
}

module.exports = { processAndDeploy };