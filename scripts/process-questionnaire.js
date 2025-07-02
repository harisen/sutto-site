#!/usr/bin/env node

/**
 * アンケート処理スクリプト
 * コンソールから入力されたアンケート内容を整理し、仕様書の基となるJSONファイルを生成
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 質問項目の定義
const questions = {
    standard: [
        { key: 'clientName', prompt: 'クライアント名（フォルダ名に使用）: ' },
        { key: 'companyName', prompt: '会社名・サービス名: ' },
        { key: 'projectType', prompt: 'プロジェクトタイプ（standard/rich）: ' },
        { key: 'industry', prompt: '業種・業界: ' },
        { key: 'targetAudience', prompt: 'ターゲットユーザー: ' },
        { key: 'siteObjective', prompt: 'サイトの目的・ゴール: ' },
        { key: 'mainMessage', prompt: 'メインメッセージ・キャッチコピー: ' },
        { key: 'designPreference', prompt: 'デザインの希望（モダン/クラシック/ポップ等）: ' },
        { key: 'colorScheme', prompt: '希望する色合い: ' },
        { key: 'referenceUrls', prompt: '参考サイトURL（カンマ区切り）: ' },
        { key: 'requiredSections', prompt: '必要なセクション（ヒーロー、特徴、料金等をカンマ区切り）: ' },
        { key: 'hasForm', prompt: 'お問い合わせフォームは必要ですか？（yes/no）: ' },
        { key: 'deadline', prompt: '希望納期: ' },
        { key: 'budget', prompt: '予算感: ' },
        { key: 'additionalNotes', prompt: 'その他要望・備考: ' }
    ],
    rich: [
        { key: 'animationLevel', prompt: 'アニメーションの程度（控えめ/標準/派手）: ' },
        { key: 'interactiveElements', prompt: '必要なインタラクティブ要素: ' },
        { key: 'specialFeatures', prompt: '特別な機能要望: ' },
        { key: 'performanceRequirements', prompt: 'パフォーマンス要件: ' }
    ]
};

async function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function collectAnswers() {
    const answers = {};
    
    console.log('=== LP制作アンケート処理 ===\n');
    
    // 基本質問
    for (const q of questions.standard) {
        answers[q.key] = await askQuestion(q.prompt);
    }
    
    // リッチプランの追加質問
    if (answers.projectType.toLowerCase() === 'rich') {
        console.log('\n--- リッチプラン追加質問 ---\n');
        for (const q of questions.rich) {
            answers[q.key] = await askQuestion(q.prompt);
        }
    }
    
    return answers;
}

function processAnswers(answers) {
    // 回答を構造化データに変換
    const processed = {
        meta: {
            createdAt: new Date().toISOString(),
            clientName: answers.clientName,
            projectType: answers.projectType.toLowerCase()
        },
        client: {
            companyName: answers.companyName,
            industry: answers.industry,
            budget: answers.budget,
            deadline: answers.deadline
        },
        project: {
            objective: answers.siteObjective,
            targetAudience: answers.targetAudience.split(',').map(s => s.trim()),
            mainMessage: answers.mainMessage
        },
        design: {
            preference: answers.designPreference,
            colorScheme: answers.colorScheme.split(',').map(s => s.trim()),
            referenceUrls: answers.referenceUrls ? answers.referenceUrls.split(',').map(s => s.trim()) : []
        },
        requirements: {
            sections: answers.requiredSections.split(',').map(s => s.trim()),
            hasContactForm: answers.hasForm.toLowerCase() === 'yes',
            additionalNotes: answers.additionalNotes
        }
    };
    
    // リッチプランの追加情報
    if (answers.projectType.toLowerCase() === 'rich') {
        processed.richFeatures = {
            animationLevel: answers.animationLevel,
            interactiveElements: answers.interactiveElements.split(',').map(s => s.trim()),
            specialFeatures: answers.specialFeatures,
            performanceRequirements: answers.performanceRequirements
        };
    }
    
    return processed;
}

async function saveData(data) {
    const clientFolder = path.join(__dirname, '..', 'clients', data.meta.clientName);
    const questionnaireFolder = path.join(clientFolder, 'questionnaire');
    
    // フォルダ作成
    if (!fs.existsSync(questionnaireFolder)) {
        fs.mkdirSync(questionnaireFolder, { recursive: true });
    }
    
    // 処理済みデータを保存
    const processedPath = path.join(questionnaireFolder, 'processed.json');
    fs.writeFileSync(processedPath, JSON.stringify(data, null, 2));
    
    console.log(`\n✅ データを保存しました: ${processedPath}`);
    
    return { clientFolder, data };
}

async function generateSpecTemplate(clientFolder, data) {
    const specFolder = path.join(clientFolder, 'specification');
    if (!fs.existsSync(specFolder)) {
        fs.mkdirSync(specFolder, { recursive: true });
    }
    
    const specPath = path.join(specFolder, 'spec_draft.md');
    const specContent = `# ${data.client.companyName} LP制作仕様書

## プロジェクト概要
- **クライアント**: ${data.client.companyName}
- **業種**: ${data.client.industry}
- **プラン**: ${data.meta.projectType === 'rich' ? 'リッチプラン' : 'スタンダードプラン'}
- **作成日**: ${new Date().toLocaleDateString('ja-JP')}
- **希望納期**: ${data.client.deadline}
- **予算**: ${data.client.budget}

## サイトの目的とゴール
${data.project.objective}

## ターゲットユーザー
${data.project.targetAudience.map(t => `- ${t}`).join('\n')}

## メインメッセージ
「${data.project.mainMessage}」

## デザイン要件
### デザインの方向性
- ${data.design.preference}

### カラースキーム
${data.design.colorScheme.map(c => `- ${c}`).join('\n')}

### 参考サイト
${data.design.referenceUrls.length > 0 ? data.design.referenceUrls.map(url => `- ${url}`).join('\n') : '- なし'}

## サイト構成
### 必要なセクション
${data.requirements.sections.map((s, i) => `${i + 1}. ${s}`).join('\n')}

### 機能要件
- お問い合わせフォーム: ${data.requirements.hasContactForm ? '必要' : '不要'}
${data.meta.projectType === 'rich' ? `
### リッチプラン追加要素
- アニメーションレベル: ${data.richFeatures.animationLevel}
- インタラクティブ要素: ${data.richFeatures.interactiveElements.join(', ')}
- 特別な機能: ${data.richFeatures.specialFeatures}
- パフォーマンス要件: ${data.richFeatures.performanceRequirements}
` : ''}

## 追加要望・備考
${data.requirements.additionalNotes || 'なし'}

## 次のステップ
1. この仕様書の内容確認・詳細化
2. ワイヤーフレームの作成
3. デザインカンプの制作
4. お客様レビュー・承認

---
*この仕様書は初期ドラフトです。お客様との打ち合わせを経て詳細化していきます。*`;
    
    fs.writeFileSync(specPath, specContent);
    console.log(`✅ 仕様書ドラフトを作成しました: ${specPath}`);
}

async function main() {
    try {
        // アンケート収集
        const answers = await collectAnswers();
        
        // データ処理
        const processed = processAnswers(answers);
        
        // データ保存
        const { clientFolder, data } = await saveData(processed);
        
        // 仕様書テンプレート生成
        await generateSpecTemplate(clientFolder, data);
        
        console.log('\n=== 処理完了 ===');
        console.log(`クライアントフォルダ: ${clientFolder}`);
        console.log('\n次のステップ:');
        console.log('1. generated specification を確認・編集');
        console.log('2. お客様と仕様の詳細確認');
        console.log('3. デザイン制作開始');
        
    } catch (error) {
        console.error('エラーが発生しました:', error);
    } finally {
        rl.close();
    }
}

// 実行
if (require.main === module) {
    main();
}