# Vercelテストサイトデプロイ手順

## 前提条件
- Vercelアカウントを作成済み
- Vercel CLIをインストール済み（`npm i -g vercel`）

## デプロイ手順

### 1. プロジェクトディレクトリへ移動
```bash
cd clients/powerfit-yokohama/development/src/
```

### 2. Vercelでデプロイ
```bash
vercel
```

### 3. プロンプトへの回答
- Set up and deploy? → Y
- Which scope? → 個人アカウントを選択
- Link to existing project? → N
- Project name? → powerfit-yokohama-test
- In which directory is your code? → ./ (Enter)
- Override settings? → N

### 4. デプロイ完了
- Production URLが表示される
- 例: https://powerfit-yokohama-test.vercel.app

## 代替方法：Vercel Web UI

1. https://vercel.com にログイン
2. "New Project"をクリック
3. "Import Git Repository"の代わりに"Upload"を選択
4. clients/powerfit-yokohama/development/src/フォルダをドラッグ&ドロップ
5. プロジェクト名を設定（powerfit-yokohama-test）
6. "Deploy"をクリック

## デプロイ後の設定

### Basic認証の追加（オプション）
vercel.jsonを作成：
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "WWW-Authenticate",
          "value": "Basic"
        }
      ]
    }
  ]
}
```

### 有効期限の設定
- Vercelダッシュボードで30日後に削除するようリマインダー設定
- または環境変数で有効期限を管理

## トラブルシューティング

### 画像が表示されない
- 相対パスを確認
- 画像ファイルがアップロードされているか確認

### CSSが適用されない
- link要素のパスを確認
- ファイル名の大文字小文字を確認

### フォームが動作しない
- Formspreeの設定を確認
- action属性のURLを確認