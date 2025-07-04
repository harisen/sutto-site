# デプロイ前チェックリスト

## 1. ファイル確認

### 必須ファイル
- [x] index.html
- [x] css/reset.css
- [x] css/style.css
- [x] css/animations.css
- [x] css/responsive.css
- [x] css/critical.css
- [x] js/main.js
- [x] js/animations.js
- [x] js/simulator.js
- [x] js/form.js
- [x] vercel.json
- [x] .htaccess

### 画像ファイル
- [ ] images/logo.svg（代替: テキストロゴ）
- [ ] images/logo-white.svg（代替: テキストロゴ）
- [ ] images/favicon.png（オプション）
- [ ] images/ogp.jpg（オプション）
- [ ] 各種画像ファイル（代替: Unsplash画像）

## 2. コード品質確認

### HTML
- [x] 文法エラーがない
- [x] 閉じタグが正しい
- [x] セマンティックHTML
- [x] meta情報が適切
- [x] 構造化データが有効

### CSS
- [x] 文法エラーがない
- [x] ベンダープレフィックス
- [x] 未使用のスタイルを削除
- [x] メディアクエリの動作確認

### JavaScript
- [x] コンソールエラーがない
- [x] console.logを削除
- [x] デバッグコードを削除
- [x] エラーハンドリング実装

## 3. 最適化確認

### パフォーマンス
- [x] Critical CSSのインライン化
- [x] 画像の最適化（圧縮、適切なフォーマット）
- [x] JavaScriptの非同期読み込み
- [x] Gzip圧縮の設定

### SEO
- [x] タイトルタグの設定
- [x] メタディスクリプション
- [x] OGPタグ
- [x] 正規URL
- [x] 構造化データ

## 4. 機能確認

### 基本機能
- [x] ナビゲーションリンク
- [x] スムーズスクロール
- [x] モバイルメニュー
- [x] スライダー動作

### インタラクティブ機能
- [x] 料金シミュレーター
- [x] フォームバリデーション
- [x] モーダル開閉
- [x] アニメーション動作

## 5. セキュリティ確認

- [x] HTTPSリダイレクト設定
- [x] セキュリティヘッダー
- [x] 不要なファイルの削除
- [x] 機密情報が含まれていない

## 6. デプロイ設定

### Vercel設定
- [x] vercel.json作成
- [x] ビルド設定
- [x] ヘッダー設定
- [x] リダイレクト設定

### 環境変数（必要な場合）
- [ ] API_KEY
- [ ] ANALYTICS_ID
- [ ] その他の環境変数

## 7. 最終確認

### コンテンツ
- [x] ダミーテキストが残っていない
- [x] 連絡先情報が正しい
- [x] 料金情報が正しい
- [x] 画像のalt属性

### リンク
- [x] 内部リンクが正しい
- [x] 外部リンクがtarget="_blank"
- [x] 電話番号リンクが正しい
- [x] メールリンクが正しい

## 8. テストサイト固有の設定

### アクセス制限（オプション）
- [ ] Basic認証の設定
- [ ] IPアドレス制限
- [ ] robots.txtでクロール拒否

### 一時的な設定
- [x] テスト用のURLを使用
- [x] 本番とは別のドメイン
- [ ] 有効期限の設定

## デプロイコマンド

```bash
# 1. プロジェクトディレクトリへ移動
cd /mnt/c/Users/akuta/lp-service-site/clients/pet-resort-wanco/development/src

# 2. Vercelでデプロイ
vercel --prod

# 3. デプロイ情報を記録
echo "デプロイURL: https://pet-resort-wanco-test-xxxxx.vercel.app" > ../test-deployment/url.txt
echo "デプロイ日時: $(date)" > ../test-deployment/deployed_at.txt
echo "ステータス: pending" > ../test-deployment/approval_status.txt
```

## 注意事項

1. **画像ファイルについて**
   - 実際の画像がない場合は、代替画像（Unsplash）が自動適用されます
   - `image-fallback-test.js`により欠落画像を検出・置換

2. **フォーム送信について**
   - テストサイトではフォーム送信はダミー処理
   - 実際のメール送信は行われません

3. **料金シミュレーター**
   - 計算ロジックは実装済み
   - データはsessionStorageに保存

4. **アニメーション**
   - GSAPライブラリはCDNから読み込み
   - パフォーマンスに影響する場合は調整可能

## チェック完了確認

すべての項目をチェックし、問題がないことを確認しました。

確認者: ________________
確認日時: 2024年__月__日 __時__分