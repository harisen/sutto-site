// 画像素材テストスクリプト
// 実際の画像がない場合の代替素材（Unsplash等）の適用確認

const imageFallbackConfig = {
  // Unsplash APIを使用した代替画像
  unsplash: {
    baseUrl: 'https://source.unsplash.com',
    collections: {
      petHotel: '3330448', // ペット関連のコレクション
      luxury: '3330452',   // 高級ホテル関連
      dogs: '3330445',     // 犬の写真
      cats: '3330446'      // 猫の写真
    }
  },
  
  // 画像マッピング（実画像 → 代替画像）
  imageMapping: {
    // ヒーロー画像
    'images/hero/hero-1.jpg': 'https://source.unsplash.com/1920x1080/?luxury,hotel,entrance',
    'images/hero/hero-2.jpg': 'https://source.unsplash.com/1920x1080/?luxury,room,interior',
    'images/hero/hero-3.jpg': 'https://source.unsplash.com/1920x1080/?dog,park,outdoor',
    
    // アイコン（SVGの代替としてFont Awesomeを使用）
    'images/icons/24hours.svg': '<i class="fas fa-clock"></i>',
    'images/icons/veterinary.svg': '<i class="fas fa-user-md"></i>',
    'images/icons/private-room.svg': '<i class="fas fa-door-closed"></i>',
    
    // 施設画像
    'images/facility/suite-room.jpg': 'https://source.unsplash.com/1200x800/?luxury,bedroom,hotel',
    'images/facility/standard-room.jpg': 'https://source.unsplash.com/1200x800/?modern,room,clean',
    'images/facility/dog-run.jpg': 'https://source.unsplash.com/1200x800/?dog,park,play',
    'images/facility/grooming.jpg': 'https://source.unsplash.com/1200x800/?pet,grooming,salon',
    
    // サムネイル
    'images/facility/thumb-suite.jpg': 'https://source.unsplash.com/300x300/?luxury,bedroom',
    'images/facility/thumb-standard.jpg': 'https://source.unsplash.com/300x300/?modern,room',
    'images/facility/thumb-dogrun.jpg': 'https://source.unsplash.com/300x300/?dog,park',
    'images/facility/thumb-grooming.jpg': 'https://source.unsplash.com/300x300/?pet,grooming',
    
    // サービス画像
    'images/service/stay.jpg': 'https://source.unsplash.com/800x600/?dog,sleeping,bed',
    'images/service/daycare.jpg': 'https://source.unsplash.com/800x600/?dog,playing,daycare',
    'images/service/trimming.jpg': 'https://source.unsplash.com/800x600/?dog,grooming,trim',
    'images/service/transport.jpg': 'https://source.unsplash.com/800x600/?car,transport,luxury',
    
    // お客様の声（プレースホルダー）
    'images/voice/customer-1.jpg': 'https://source.unsplash.com/400x400/?woman,dog,portrait',
    'images/voice/customer-2.jpg': 'https://source.unsplash.com/400x400/?man,golden-retriever',
    'images/voice/customer-3.jpg': 'https://source.unsplash.com/400x400/?woman,cat,portrait',
    
    // ロゴ（テキストベース）
    'images/logo.svg': '<span class="text-logo">WANCO</span>',
    'images/logo-white.svg': '<span class="text-logo text-white">WANCO</span>'
  }
};

// 画像チェック関数
function checkImages() {
  console.log('=== 画像素材チェック開始 ===\n');
  
  const results = {
    total: 0,
    found: 0,
    missing: 0,
    fallback: 0,
    errors: []
  };
  
  // HTMLファイル内の画像参照を確認
  const imageReferences = [
    // img要素
    ...document.querySelectorAll('img[src]'),
    // 背景画像
    ...document.querySelectorAll('[style*="background-image"]'),
    // source要素（picture要素内）
    ...document.querySelectorAll('source[srcset]')
  ];
  
  imageReferences.forEach(element => {
    results.total++;
    
    let imagePath = '';
    if (element.tagName === 'IMG') {
      imagePath = element.src;
    } else if (element.style.backgroundImage) {
      imagePath = element.style.backgroundImage.match(/url\(['"]?(.+?)['"]?\)/)?.[1] || '';
    } else if (element.srcset) {
      imagePath = element.srcset.split(' ')[0];
    }
    
    // 画像の存在確認
    checkImageExists(imagePath).then(exists => {
      if (exists) {
        results.found++;
        console.log(`✅ 画像発見: ${imagePath}`);
      } else {
        results.missing++;
        console.log(`❌ 画像欠落: ${imagePath}`);
        
        // 代替画像の適用
        applyFallbackImage(element, imagePath);
        results.fallback++;
      }
    }).catch(error => {
      results.errors.push({ path: imagePath, error: error.message });
    });
  });
  
  // 結果サマリー
  setTimeout(() => {
    console.log('\n=== チェック結果 ===');
    console.log(`総画像数: ${results.total}`);
    console.log(`発見: ${results.found}`);
    console.log(`欠落: ${results.missing}`);
    console.log(`代替適用: ${results.fallback}`);
    console.log(`エラー: ${results.errors.length}`);
    
    if (results.errors.length > 0) {
      console.log('\nエラー詳細:');
      results.errors.forEach(err => {
        console.log(`- ${err.path}: ${err.error}`);
      });
    }
  }, 2000);
}

// 画像の存在確認
async function checkImageExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

// 代替画像の適用
function applyFallbackImage(element, originalPath) {
  // パスから相対パスを抽出
  const relativePath = originalPath.replace(/^.*\/(?=images\/)/, '');
  const fallbackUrl = imageFallbackConfig.imageMapping[relativePath];
  
  if (!fallbackUrl) {
    console.warn(`⚠️ 代替画像が定義されていません: ${relativePath}`);
    return;
  }
  
  if (element.tagName === 'IMG') {
    // SVGアイコンの場合はHTMLに置換
    if (fallbackUrl.includes('<i class=')) {
      const iconWrapper = document.createElement('span');
      iconWrapper.innerHTML = fallbackUrl;
      iconWrapper.className = 'icon-fallback';
      element.parentNode.replaceChild(iconWrapper, element);
    } else {
      element.src = fallbackUrl;
      element.onerror = () => {
        element.src = 'https://via.placeholder.com/400x300?text=No+Image';
      };
    }
  } else if (element.style.backgroundImage) {
    element.style.backgroundImage = `url('${fallbackUrl}')`;
  }
  
  console.log(`🔄 代替画像適用: ${relativePath} → ${fallbackUrl}`);
}

// 代替画像用のスタイル注入
function injectFallbackStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* テキストロゴスタイル */
    .text-logo {
      font-family: 'Montserrat', sans-serif;
      font-size: 3rem;
      font-weight: 300;
      letter-spacing: 0.3em;
      color: var(--color-navy);
    }
    
    .text-logo.text-white {
      color: white;
    }
    
    /* アイコンフォールバック */
    .icon-fallback {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 8rem;
      height: 8rem;
      font-size: 4rem;
      color: var(--color-gold);
    }
    
    /* 画像プレースホルダー */
    .image-placeholder {
      background-color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 1.4rem;
      text-align: center;
    }
  `;
  document.head.appendChild(style);
  
  // Font Awesomeの読み込み（アイコン用）
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
  document.head.appendChild(fontAwesome);
}

// 自動実行スクリプト
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    console.log('画像素材チェックを開始します...\n');
    injectFallbackStyles();
    setTimeout(checkImages, 1000); // スタイル適用後に実行
  });
}

// エクスポート（Node.js環境用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    imageFallbackConfig,
    checkImages,
    applyFallbackImage
  };
}

// 使用方法
console.log(`
画像素材テストの使用方法:

1. ブラウザで実行:
   - index.htmlに以下を追加
   <script src="testing/image-fallback-test.js"></script>

2. コンソールで実行:
   - 開発者ツールのコンソールで checkImages() を実行

3. 自動適用モード:
   - ページ読み込み時に自動で欠落画像を検出し代替画像を適用

4. 代替画像ソース:
   - Unsplash (高品質な無料画像)
   - Font Awesome (アイコン)
   - Placeholder.com (汎用プレースホルダー)
`);