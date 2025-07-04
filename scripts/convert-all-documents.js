#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 請求書・領収書の一括PDF変換を開始します！\n');

// 変換対象のパターン
const patterns = [
    'clients/*/invoices/*.html',
    'clients/*/receipts/*.html'
];

// globパッケージがない場合の簡易実装
function findHtmlFiles(baseDir, pattern) {
    const files = [];
    const parts = pattern.split('/');
    
    function searchDir(dir, depth) {
        if (depth >= parts.length) return;
        
        const currentPattern = parts[depth];
        
        if (!fs.existsSync(dir)) return;
        
        const entries = fs.readdirSync(dir);
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            const stat = fs.statSync(fullPath);
            
            if (currentPattern === '*') {
                if (stat.isDirectory() && depth < parts.length - 1) {
                    searchDir(fullPath, depth + 1);
                }
            } else if (currentPattern.endsWith('.html')) {
                if (entry.endsWith('.html') && stat.isFile()) {
                    files.push(fullPath);
                }
            } else {
                if (entry === currentPattern && stat.isDirectory()) {
                    searchDir(fullPath, depth + 1);
                }
            }
        }
    }
    
    searchDir(baseDir, 0);
    return files;
}

// HTMLファイルを検索
let htmlFiles = [];
for (const pattern of patterns) {
    const files = findHtmlFiles('.', pattern);
    htmlFiles = htmlFiles.concat(files);
}

if (htmlFiles.length === 0) {
    console.log('変換対象のHTMLファイルが見つかりませんでした。');
    process.exit(0);
}

console.log(`📋 ${htmlFiles.length}個のHTMLファイルが見つかりました:\n`);

// 各ファイルを変換
let successCount = 0;
let errorCount = 0;

for (const htmlFile of htmlFiles) {
    const pdfFile = htmlFile.replace('.html', '.pdf');
    console.log(`📄 変換中: ${htmlFile}`);
    
    try {
        // puppeteerがインストールされているか確認
        try {
            require.resolve('puppeteer');
        } catch (e) {
            console.log('\n⚠️  Puppeteerがインストールされていません！');
            console.log('以下のコマンドでインストールしてください:');
            console.log('npm install puppeteer');
            process.exit(1);
        }
        
        // PDF変換を実行
        execSync(`node ${path.join(__dirname, 'html-to-pdf.js')} "${htmlFile}" "${pdfFile}"`, {
            stdio: 'inherit'
        });
        
        successCount++;
        console.log(`✅ 完了: ${pdfFile}\n`);
        
    } catch (error) {
        errorCount++;
        console.log(`❌ エラー: ${htmlFile}\n`);
    }
}

// 結果を表示
console.log('\n========== 変換結果 ==========');
console.log(`✅ 成功: ${successCount}件`);
console.log(`❌ 失敗: ${errorCount}件`);
console.log(`📊 合計: ${htmlFiles.length}件`);

if (successCount > 0) {
    console.log('\n💡 ヒント: 生成されたPDFファイルは元のHTMLファイルと同じディレクトリに保存されています。');
}