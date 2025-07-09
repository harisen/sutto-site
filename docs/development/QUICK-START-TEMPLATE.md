# LP制作クイックスタートテンプレート

## 🚀 新規アンケート受取時のコマンド集

### 1. アンケートを構造化
```javascript
// questionnaire.htmlの内容をコピーして実行
node scripts/process-questionnaire.js
```

### 2. プロジェクト初期化
```bash
# 企業名を変数に設定（例：pet-resort-wanco）
CLIENT_NAME="[企業名]"

# ディレクトリ作成
mkdir -p clients/$CLIENT_NAME/{questionnaire,specification,design/{wireframe,mockup},development/{src/{css,js,images},docs},testing,deployment,test-deployment}

# アンケート保存
cp questionnaire.html clients/$CLIENT_NAME/questionnaire/
cp documents/questionnaire.json clients/$CLIENT_NAME/questionnaire/processed.json
```

### 3. 仕様書テンプレート
```markdown
# [企業名] LP制作仕様書

## 基本情報
- 企業名: 
- 担当者: 
- プラン: リッチ/スタンダード/エコノミー
- 制作期間: 2週間

## ターゲットペルソナ
- 年齢層: 
- 性別: 
- 職業: 
- 悩み・ニーズ: 

## サイト構成
1. ヒーローセクション
2. コンセプト
3. サービス/商品
4. 特徴・強み
5. 料金
6. お客様の声
7. アクセス/会社情報
8. お問い合わせ

## デザイン方向性
- トンマナ: 
- カラー: 
- フォント: 

## 必要機能
- [ ] お問い合わせフォーム
- [ ] 料金シミュレーター
- [ ] ギャラリー
- [ ] 動画
- [ ] アニメーション（リッチプランのみ）
```

### 4. 基本HTML構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[企業名] | [キャッチコピー]</title>
    <meta name="description" content="[説明文]">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Loading -->
    <div id="loading" class="loading">
        <div class="loading-inner">
            <div class="loading-logo">[LOGO]</div>
            <div class="loading-progress"></div>
        </div>
    </div>

    <!-- Header -->
    <header id="header" class="header">
        <!-- ナビゲーション -->
    </header>

    <!-- Hero -->
    <section id="hero" class="hero">
        <!-- ヒーローコンテンツ -->
    </section>

    <!-- 各セクション -->
    
    <!-- Footer -->
    <footer class="footer">
        <!-- フッター内容 -->
    </footer>

    <!-- Scripts -->
    <script src="js/main.js"></script>
</body>
</html>
```

### 5. デプロイコマンド
```bash
# Vercelデプロイ
cd clients/$CLIENT_NAME/development/src
vercel --prod --yes

# デプロイ情報保存
echo "[URL]" > ../../test-deployment/url.txt
echo "$(date)" > ../../test-deployment/deployed_at.txt
```

## ⚡ トラブル対応クイックフィックス

### 画像が表示されない
```html
<!-- Picsum Photosを使用 -->
<img src="https://picsum.photos/1920/1080?random=1" alt="代替画像">
```

### JSエラー対策
```javascript
// 要素存在確認を追加
if (document.querySelector('.target')) {
    // 処理
}
```

### レイアウト崩壊
```css
/* リセット追加 */
* {
    box-sizing: border-box;
}

/* コンテナ幅統一 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### ローディング画面対策
```javascript
// タイマー方式
setTimeout(() => {
    document.getElementById('loading').classList.add('loaded');
}, 1500);
```

## 📋 最終チェックリスト
- [ ] 全画像表示確認
- [ ] レスポンシブ動作
- [ ] フォーム動作
- [ ] アニメーション確認
- [ ] クロスブラウザ確認
- [ ] 表示速度測定
- [ ] リンク先確認
- [ ] 誤字脱字チェック

---
このファイルをコピーして使用してください。