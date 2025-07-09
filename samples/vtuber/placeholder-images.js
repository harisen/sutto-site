// プレースホルダー画像の自動生成スクリプト
// 実際の画像がない場合、このスクリプトを読み込むことでプレースホルダー画像を表示します

document.addEventListener('DOMContentLoaded', function() {
    // 画像要素をすべて取得
    const images = document.querySelectorAll('img');
    
    // プレースホルダー画像のマッピング
    const placeholderMap = {
        'astra-main.png': 'https://placehold.jp/30/00D4FF/FFFFFF/500x700.png?text=Astra%0AMain',
        'astra-happy.png': 'https://placehold.jp/30/FFB6C1/FFFFFF/400x500.png?text=Happy%0AAstra',
        'astra-surprised.png': 'https://placehold.jp/30/FFD700/FFFFFF/400x500.png?text=Surprised%0AAstra',
        'astra-wink.png': 'https://placehold.jp/30/FF69B4/FFFFFF/400x500.png?text=Wink%0AAstra',
        'astra-cool.png': 'https://placehold.jp/30/4169E1/FFFFFF/400x500.png?text=Cool%0AAstra',
        'astra-singing.png': 'https://placehold.jp/30/FF00FF/FFFFFF/400x500.png?text=Singing%0AAstra',
        'astra-sd.png': 'https://placehold.jp/30/98FB98/FFFFFF/300x300.png?text=SD%0AAstra',
        'logo.png': 'https://placehold.jp/30/00D4FF/FFFFFF/300x300.png?text=ASTRA',
        'logo-R.png': 'https://placehold.jp/30/00D4FF/FFFFFF/300x100.png?text=ASTRA%20LOGO',
        'bg-cyber.jpg': 'https://placehold.jp/30/1A1A2E/00D4FF/1920x1080.png?text=Cyber%20City%20Background',
        'bg-pattern.png': 'https://placehold.jp/30/0A0A0F/00D4FF/600x600.png?text=Pattern',
        'og-image.jpg': 'https://placehold.jp/30/00D4FF/FFFFFF/1200x630.png?text=Astra%20Kisaragi%0AVTuber'
    };
    
    // 各画像要素をチェック
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.includes('images/')) {
            // ファイル名を抽出
            const filename = src.split('/').pop();
            
            // エラーハンドリング
            img.onerror = function() {
                if (placeholderMap[filename]) {
                    this.src = placeholderMap[filename];
                    this.style.objectFit = 'cover';
                }
            };
            
            // 画像が存在しない場合、即座にプレースホルダーを表示
            fetch(src, { method: 'HEAD' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Image not found');
                    }
                })
                .catch(() => {
                    if (placeholderMap[filename]) {
                        img.src = placeholderMap[filename];
                        img.style.objectFit = 'cover';
                    }
                });
        }
    });
    
    // 背景画像のプレースホルダー対応
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const bgImage = new Image();
        bgImage.src = 'images/bg-cyber.jpg';
        bgImage.onerror = function() {
            heroBg.style.background = `
                linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('${placeholderMap['bg-cyber.jpg']}') center/cover
            `;
        };
    }
});

// デバッグ用：コンソールにプレースホルダー画像の一覧を表示
if (typeof console !== 'undefined' && console.log) {
    console.log('🎨 プレースホルダー画像を使用中です。');
    console.log('実際の画像ファイルを /samples/vtuber/images/ に配置してください。');
}