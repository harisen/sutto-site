// Lighthouse設定ファイル

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    // エミュレーション設定
    emulatedFormFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
    },
    
    // 監査設定
    onlyCategories: [
      'performance',
      'accessibility',
      'best-practices',
      'seo'
    ],
    
    // スキップする監査項目
    skipAudits: [
      'uses-http2', // ローカル環境では不要
    ],
    
    // カスタムしきい値
    budgets: [{
      path: '/*',
      resourceSizes: [
        {
          resourceType: 'script',
          budget: 150
        },
        {
          resourceType: 'stylesheet',
          budget: 100
        },
        {
          resourceType: 'image',
          budget: 200
        },
        {
          resourceType: 'total',
          budget: 1000
        }
      ],
      resourceCounts: [
        {
          resourceType: 'third-party',
          budget: 10
        }
      ]
    }]
  },
  
  // カスタム監査
  passes: [{
    passName: 'defaultPass',
    gatherers: []
  }],
  
  // 監査の重み付け
  categories: {
    performance: {
      auditRefs: [
        {id: 'first-contentful-paint', weight: 3},
        {id: 'speed-index', weight: 3},
        {id: 'largest-contentful-paint', weight: 3},
        {id: 'interactive', weight: 3},
        {id: 'total-blocking-time', weight: 3},
        {id: 'cumulative-layout-shift', weight: 3},
      ]
    }
  }
};

// 実行コマンド例
console.log(`
Lighthouseテストの実行方法:

1. ローカルサーバーを起動
   npx http-server ./src -p 8080

2. Lighthouseを実行
   npx lighthouse http://localhost:8080 --config-path=lighthouse-config.js --output=html --output-path=./lighthouse-report.html

3. モバイルテスト
   npx lighthouse http://localhost:8080 --emulated-form-factor=mobile --output=html --output-path=./lighthouse-report-mobile.html

4. CI環境用（JSON出力）
   npx lighthouse http://localhost:8080 --output=json --output-path=./lighthouse-results.json --chrome-flags="--headless"
`);

// パフォーマンス改善提案
const performanceOptimizations = {
  images: [
    'WebP形式の使用',
    '適切なサイズでの配信',
    'loading="lazy"の実装',
    'CDN経由での配信'
  ],
  css: [
    'Critical CSSのインライン化',
    '未使用CSSの削除',
    'CSSの圧縮',
    'メディアクエリの最適化'
  ],
  javascript: [
    'コード分割',
    'Tree shaking',
    '非同期読み込み',
    'サードパーティスクリプトの最適化'
  ],
  fonts: [
    'font-display: swapの使用',
    'サブセット化',
    'Preload重要フォント',
    'WOFF2形式の使用'
  ],
  server: [
    'Gzip/Brotli圧縮',
    'ブラウザキャッシュの活用',
    'HTTP/2の使用',
    'CDNの活用'
  ]
};

console.log('パフォーマンス最適化チェックリスト:');
console.log(JSON.stringify(performanceOptimizations, null, 2));