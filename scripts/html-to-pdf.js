#!/usr/bin/env node

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// コマンドライン引数を取得
const args = process.argv.slice(2);
if (args.length < 1) {
    console.log('使い方: node html-to-pdf.js <HTMLファイルパス> [出力PDFファイルパス]');
    console.log('例: node html-to-pdf.js clients/eigokun/invoices/invoice-20250625.html');
    process.exit(1);
}

const htmlPath = args[0];
const pdfPath = args[1] || htmlPath.replace('.html', '.pdf');

// HTMLファイルの存在確認
if (!fs.existsSync(htmlPath)) {
    console.error(`エラー: HTMLファイルが見つかりません: ${htmlPath}`);
    process.exit(1);
}

(async () => {
    console.log(`🚀 PDF変換開始: ${htmlPath}`);
    
    try {
        // ブラウザを起動
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // HTMLファイルを読み込む
        const absolutePath = path.resolve(htmlPath);
        await page.goto(`file://${absolutePath}`, {
            waitUntil: 'networkidle0'
        });
        
        // PDFを生成
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            }
        });
        
        await browser.close();
        
        console.log(`✅ PDF変換完了: ${pdfPath}`);
        console.log(`📄 ファイルサイズ: ${(fs.statSync(pdfPath).size / 1024).toFixed(2)} KB`);
        
    } catch (error) {
        console.error('❌ エラーが発生しました:', error.message);
        process.exit(1);
    }
})();