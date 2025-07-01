// パフォーマンス最適化スクリプト - CSS/JSの最小化と画像最適化

const fs = require('fs');
const path = require('path');
// const { minify: minifyJS } = require('terser');
// const CleanCSS = require('clean-css');

// 依存パッケージチェック
function checkDependencies() {
    try {
        require.resolve('terser');
        require.resolve('clean-css');
        return true;
    } catch (e) {
        console.log('⚠️  必要なパッケージがインストールされていません。');
        console.log('以下のコマンドを実行してください：');
        console.log('npm install terser clean-css');
        return false;
    }
}

// CSSを最小化する関数
async function minifyCSS(inputPath, outputPath) {
    try {
        const input = fs.readFileSync(inputPath, 'utf8');
        const output = new CleanCSS({
            level: 2,
            compatibility: 'ie11'
        }).minify(input);
        
        if (output.errors.length > 0) {
            console.error(`❌ CSS最小化エラー: ${inputPath}`);
            console.error(output.errors);
            return false;
        }
        
        fs.writeFileSync(outputPath, output.styles);
        const sizeBefore = Buffer.byteLength(input, 'utf8');
        const sizeAfter = Buffer.byteLength(output.styles, 'utf8');
        const reduction = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
        
        console.log(`✅ CSS最小化完了: ${path.basename(inputPath)}`);
        console.log(`   サイズ: ${sizeBefore}B → ${sizeAfter}B (${reduction}%削減)`);
        return true;
    } catch (error) {
        console.error(`❌ エラー: ${inputPath} - ${error.message}`);
        return false;
    }
}

// JavaScriptを最小化する関数
async function minifyJavaScript(inputPath, outputPath) {
    try {
        const input = fs.readFileSync(inputPath, 'utf8');
        const result = await minifyJS(input, {
            compress: {
                drop_console: false,
                drop_debugger: true
            },
            mangle: true,
            format: {
                comments: false
            }
        });
        
        if (result.error) {
            console.error(`❌ JS最小化エラー: ${inputPath}`);
            console.error(result.error);
            return false;
        }
        
        fs.writeFileSync(outputPath, result.code);
        const sizeBefore = Buffer.byteLength(input, 'utf8');
        const sizeAfter = Buffer.byteLength(result.code, 'utf8');
        const reduction = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
        
        console.log(`✅ JS最小化完了: ${path.basename(inputPath)}`);
        console.log(`   サイズ: ${sizeBefore}B → ${sizeAfter}B (${reduction}%削減)`);
        return true;
    } catch (error) {
        console.error(`❌ エラー: ${inputPath} - ${error.message}`);
        return false;
    }
}

// HTMLファイルの最適化（インラインスタイルとスクリプトタグの更新）
function optimizeHTML(htmlPath, isMinified) {
    try {
        let content = fs.readFileSync(htmlPath, 'utf8');
        
        if (isMinified) {
            // CSSとJSのリンクを.minバージョンに更新
            content = content.replace(/href="styles\.css"/g, 'href="styles.min.css"');
            content = content.replace(/src="script\.js"/g, 'src="script.min.js"');
        }
        
        // 画像の遅延読み込み属性を追加
        content = content.replace(/<img([^>]+)>/g, (match, attrs) => {
            if (!attrs.includes('loading=')) {
                return `<img${attrs} loading="lazy">`;
            }
            return match;
        });
        
        // プリロードヒントを追加
        const preloadTags = `
    <!-- Preload critical resources -->
    <link rel="preload" href="styles${isMinified ? '.min' : ''}.css" as="style">
    <link rel="preload" href="script${isMinified ? '.min' : ''}.js" as="script">`;
        
        content = content.replace('</title>', '</title>' + preloadTags);
        
        fs.writeFileSync(htmlPath, content);
        console.log(`✅ HTML最適化完了: ${path.basename(htmlPath)}`);
    } catch (error) {
        console.error(`❌ エラー: ${htmlPath} - ${error.message}`);
    }
}

// メイン処理
async function main() {
    if (!checkDependencies()) {
        return;
    }
    
    console.log('🚀 パフォーマンス最適化を開始します...\n');
    
    const samplesDir = path.join(__dirname, '..', 'samples');
    const samples = ['beauty-salon', 'restaurant', 'ec-shop', 'event', 'professional'];
    
    for (const sample of samples) {
        console.log(`\n📁 ${sample} を処理中...`);
        const sampleDir = path.join(samplesDir, sample);
        
        // CSS最小化
        const cssPath = path.join(sampleDir, 'styles.css');
        const cssMinPath = path.join(sampleDir, 'styles.min.css');
        if (fs.existsSync(cssPath)) {
            await minifyCSS(cssPath, cssMinPath);
        }
        
        // JS最小化
        const jsPath = path.join(sampleDir, 'script.js');
        const jsMinPath = path.join(sampleDir, 'script.min.js');
        if (fs.existsSync(jsPath)) {
            await minifyJavaScript(jsPath, jsMinPath);
        }
        
        // HTML最適化
        const htmlPath = path.join(sampleDir, 'index.html');
        if (fs.existsSync(htmlPath)) {
            optimizeHTML(htmlPath, true);
        }
    }
    
    // 画像最適化の推奨事項を表示
    console.log('\n📸 画像最適化の推奨事項:');
    console.log('1. 実際の画像ファイルを使用する際は、以下のツールで最適化してください：');
    console.log('   - TinyPNG (https://tinypng.com/)');
    console.log('   - Squoosh (https://squoosh.app/)');
    console.log('   - ImageOptim (Mac用)');
    console.log('\n2. 画像フォーマットの推奨：');
    console.log('   - 写真: WebP形式（JPEGフォールバック付き）');
    console.log('   - アイコン・ロゴ: SVG形式');
    console.log('   - 透過が必要な画像: PNG形式');
    console.log('\n3. レスポンシブ画像の実装：');
    console.log('   - srcset属性を使用して複数解像度に対応');
    console.log('   - <picture>要素でアートディレクションを実装');
    
    console.log('\n🎉 パフォーマンス最適化が完了しました！');
}

// パッケージがインストールされていない場合の簡易版
async function mainSimple() {
    console.log('🚀 パフォーマンス最適化（簡易版）を開始します...\n');
    
    const samplesDir = path.join(__dirname, '..', 'samples');
    const samples = ['beauty-salon', 'restaurant', 'ec-shop', 'event', 'professional'];
    
    for (const sample of samples) {
        console.log(`\n📁 ${sample} を処理中...`);
        const sampleDir = path.join(samplesDir, sample);
        
        // HTML最適化のみ実行
        const htmlPath = path.join(sampleDir, 'index.html');
        if (fs.existsSync(htmlPath)) {
            optimizeHTML(htmlPath, false);
        }
    }
    
    console.log('\n✅ HTML最適化が完了しました！');
    console.log('⚠️  CSS/JS最小化を行うには、必要なパッケージをインストールしてください。');
}

// 実行
if (require.main === module) {
    if (checkDependencies()) {
        main().catch(console.error);
    } else {
        mainSimple().catch(console.error);
    }
}