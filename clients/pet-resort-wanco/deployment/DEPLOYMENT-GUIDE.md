# デプロイメントガイド

## 概要
ペットリゾートWANCO LPのテストサイトデプロイ手順書です。
Vercelを使用してテストサイトをデプロイします。

## 前提条件

- Node.js 14以上がインストールされていること
- Vercel CLIがインストールされていること（`npm i -g vercel`）
- Gitがインストールされていること

## デプロイ手順

### 1. ファイルの準備

```bash
# プロジェクトディレクトリに移動
cd clients/pet-resort-wanco/development/src

# 必要なファイルの確認
ls -la
# 以下のファイルが存在することを確認
# - index.html
# - css/
# - js/
# - images/
```

### 2. Vercel設定ファイルの作成

`vercel.json`を作成：
```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/(.*).js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).css",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).jpg",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. デプロイ実行

```bash
# Vercelにログイン（初回のみ）
vercel login

# デプロイ実行
vercel --prod

# プロンプトに従って設定
# - Set up and deploy: Y
# - Which scope: 個人またはチームを選択
# - Link to existing project?: N
# - Project name: pet-resort-wanco-test
# - In which directory is your code?: ./
# - Override settings?: N
```

### 4. テストURLの生成

デプロイ完了後、以下の形式でURLが生成されます：
```
https://pet-resort-wanco-test-[ランダムID].vercel.app
```

例：`https://pet-resort-wanco-test-a7b9c4.vercel.app`

### 5. デプロイ情報の記録

```bash
# デプロイ情報をファイルに保存
mkdir -p ../test-deployment
echo "https://pet-resort-wanco-test-[ランダムID].vercel.app" > ../test-deployment/url.txt
echo "$(date)" > ../test-deployment/deployed_at.txt
echo "pending" > ../test-deployment/approval_status.txt
```

## 環境変数の設定（必要な場合）

```bash
# Vercelダッシュボードで設定
# Settings > Environment Variables

# または.env.localファイルで設定
NEXT_PUBLIC_API_URL=https://api.example.com
```

## カスタムドメインの設定（オプション）

1. Vercelダッシュボードにアクセス
2. プロジェクトを選択
3. Settings > Domains
4. カスタムドメインを追加

## 更新手順

### ファイル更新後の再デプロイ

```bash
# ファイルを更新後
vercel --prod

# または自動デプロイ（Gitリポジトリ連携時）
git add .
git commit -m "Update: [更新内容]"
git push origin main
```

## テスト項目チェックリスト

デプロイ後、以下の項目を確認：

- [ ] トップページが正しく表示される
- [ ] すべての画像が読み込まれる
- [ ] CSSが適用されている
- [ ] JavaScriptが動作する
- [ ] GSAPアニメーションが動作する
- [ ] レスポンシブ表示が正しい
- [ ] フォームが動作する（送信はダミー）
- [ ] 料金シミュレーターが動作する
- [ ] スマートフォンで確認
- [ ] タブレットで確認

## トラブルシューティング

### 画像が表示されない
- 画像パスが正しいか確認
- 画像ファイルがアップロードされているか確認
- 大文字小文字の違いを確認

### CSSが適用されない
- CSSファイルのパスを確認
- CSSファイルの文法エラーを確認
- キャッシュをクリアして再読み込み

### JavaScriptエラー
- ブラウザのコンソールでエラーを確認
- CDNのURLが正しいか確認
- スクリプトの読み込み順序を確認

### 404エラー
- vercel.jsonのルーティング設定を確認
- ファイル名の大文字小文字を確認

## デプロイメント削除

テストが完了し、本番デプロイ後：

```bash
# プロジェクトの削除
vercel remove pet-resort-wanco-test

# または管理画面から削除
# Dashboard > Project Settings > Delete Project
```

## セキュリティ対策

1. **Basic認証の設定**（必要な場合）
```javascript
// api/auth.js
export default function handler(req, res) {
  const auth = req.headers.authorization;
  
  if (!auth || auth !== 'Basic ' + Buffer.from('username:password').toString('base64')) {
    res.status(401).send('Authentication required');
    return;
  }
  
  res.status(200).send('Authenticated');
}
```

2. **IPアドレス制限**
Vercelダッシュボードで設定可能

## 本番デプロイ時の注意事項

1. **環境変数の更新**
   - 本番用のAPIエンドポイント
   - 本番用の認証情報

2. **ドメイン設定**
   - DNSレコードの設定
   - SSL証明書の確認

3. **パフォーマンス最適化**
   - 画像の最適化
   - CDNの活用
   - キャッシュ設定

4. **モニタリング設定**
   - Google Analytics
   - エラートラッキング
   - パフォーマンス監視

## 連絡先

デプロイに関する質問：
- Email: deploy-support@example.com
- Slack: #deployment-support