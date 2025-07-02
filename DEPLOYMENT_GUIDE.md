# デプロイメントガイド

## 🚀 クイックスタート

### 方法1: デプロイスクリプトを使用（推奨）

1. **GitHubでリポジトリを作成**
   - [GitHub](https://github.com)にログイン
   - 右上の「+」→「New repository」
   - リポジトリ名: `lp-service-site`
   - Public/Privateを選択
   - 「Create repository」をクリック（READMEは追加しない）

2. **デプロイスクリプトを実行**
   ```bash
   ./deploy-github.sh
   ```
   - GitHubユーザー名を入力
   - リポジトリ名を確認（デフォルトでOK）

### 方法2: 手動でデプロイ

1. **GitHubにプッシュ**
   ```bash
   git remote add origin https://github.com/[あなたのユーザー名]/lp-service-site.git
   git push -u origin main
   ```

2. **Vercelでデプロイ**
   - [Vercel](https://vercel.com)にログイン
   - 「Add New Project」
   - GitHubアカウントを連携
   - `lp-service-site`リポジトリを選択
   - 「Deploy」をクリック

## 📝 デプロイ後の確認事項

### 必須確認項目
- [ ] トップページが表示される
- [ ] 全ページへのリンクが機能する
- [ ] サンプルサイトが表示される
- [ ] 画像が正しく表示される
- [ ] レスポンシブデザインが機能する
- [ ] アンケートフォームが表示される

### パフォーマンス確認
- [ ] ページ読み込み速度（3秒以内）
- [ ] モバイルでの表示確認
- [ ] 画像の最適化確認

## 🔧 トラブルシューティング

### よくある問題

**Q: デプロイが失敗する**
- A: package.jsonがないという警告は無視してOK（静的サイトのため）

**Q: 画像が表示されない**
- A: 画像パスが相対パスになっているか確認
- A: 大文字小文字を確認（Linuxサーバーは区別する）

**Q: CSSが適用されない**
- A: CSSファイルのパスを確認
- A: ブラウザのキャッシュをクリア

**Q: 404エラーが出る**
- A: ファイル名の大文字小文字を確認
- A: .htmlの拡張子が必要か確認

## 🌐 カスタムドメインの設定

### Vercelの場合
1. プロジェクトの「Settings」→「Domains」
2. カスタムドメインを追加
3. DNSレコードを設定

### Netlifyの場合
1. 「Site settings」→「Domain management」
2. 「Add custom domain」
3. DNSレコードを設定

## 📊 アナリティクスの設定

Google Analyticsを追加する場合：

1. Google Analyticsでプロパティを作成
2. 測定IDを取得
3. 各HTMLファイルの`</head>`タグ前に追加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📧 お問い合わせフォームの設定

現在のフォームは表示のみです。実際に機能させるには：

### 方法1: Netlify Forms（Netlifyの場合）
HTMLフォームに`netlify`属性を追加：
```html
<form name="contact" method="POST" data-netlify="true">
```

### 方法2: 外部サービス
- Formspree
- Google Forms
- EmailJS

## 🎉 デプロイ完了！

デプロイが完了したら、以下を確認してください：

1. **サイトURL**: https://[your-project].vercel.app
2. **全ページの動作確認**
3. **モバイル表示の確認**
4. **フォームの動作確認**（設定した場合）

問題がある場合は、`sutto.apps@gmail.com`までご連絡ください。