# クライアント管理システムガイド

## 📋 目次
1. [概要](#概要)
2. [フォルダ構成](#フォルダ構成)
3. [ワークフロー](#ワークフロー)
4. [Dashboard.html仕様](#dashboardhtml仕様)
5. [自動化スクリプト](#自動化スクリプト)
6. [ベストプラクティス](#ベストプラクティス)

## 概要

クライアント管理システムは、LP制作案件を効率的に管理するための仕組みです。各クライアントごとに独立したフォルダで管理し、進捗をダッシュボードで一元管理します。

## フォルダ構成

### 標準フォルダ構造
```
clients/
├── [client-name]/              # クライアント名（英数字、ハイフン使用）
│   ├── questionnaire/         # アンケート関連
│   │   ├── original.txt      # 元のアンケート内容
│   │   └── processed.json    # 処理済みJSON形式
│   ├── specification/        # 仕様書
│   │   └── spec_v1.md       # バージョン管理された仕様書
│   ├── development/         # 開発ファイル
│   │   ├── src/            # ソースコード
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   └── script.js
│   │   └── assets/         # 画像・フォントなど
│   ├── test-deployment/    # テストデプロイ情報
│   │   ├── url.txt        # テストサイトURL
│   │   └── deployment-info.json
│   ├── delivery/          # 納品物
│   │   └── [最終ファイル]
│   ├── invoices/         # 請求書
│   └── receipts/        # 領収書
```

### フォルダ命名規則
- 小文字英数字とハイフンのみ使用
- 例: `yamatoneriko`, `idol-illusion`, `pet-resort-wanco`

## ワークフロー

### 1. 新規案件作成
```bash
# 新規クライアントフォルダ作成
mkdir -p clients/[client-name]/{questionnaire,specification,development/{src,assets},test-deployment,delivery,invoices,receipts}
```

### 2. アンケート処理
1. アンケート内容を`questionnaire/original.txt`に保存
2. スクリプトで自動処理:
```bash
node scripts/process-questionnaire.js clients/[client-name]
```

### 3. 仕様書作成
- テンプレート: `clients/template/specification-template.md`
- 保存先: `specification/spec_v1.md`

### 4. 開発
- ソースコード: `development/src/`
- アセット: `development/assets/`

### 5. テストデプロイ
```bash
node scripts/process-questionnaire-with-deploy.js clients/[client-name]
```

### 6. 納品
- 最終ファイルを`delivery/`フォルダへ
- 請求書・領収書発行

## Dashboard.html仕様

### 概要
ダッシュボードは全クライアント案件の進捗を一覧表示し、管理を効率化します。

### データ管理

#### clients.json構造
```json
{
  "clients": [
    {
      "id": "yamatoneriko",
      "name": "yamatoneriko",
      "contactPerson": "トネコ",
      "email": "atelier.yamatoneriko@gmail.com",
      "plan": "rich",
      "status": "development",
      "deadline": "2025-07-05",
      "price": 50000,
      "testUrl": "https://test-site.vercel.app",
      "productionUrl": null,
      "createdAt": "2025-07-04",
      "updatedAt": "2025-07-04",
      "notes": "黄色メイン、ロゴ後日提供"
    }
  ]
}
```

#### ステータス定義
- `inquiry`: 問い合わせ段階
- `questionnaire`: アンケート回答待ち
- `specification`: 仕様書作成中
- `development`: 開発中
- `testing`: テスト中
- `review`: レビュー待ち
- `completed`: 完了
- `delivered`: 納品済み

### 表示機能

#### メイン一覧
- クライアント名
- 担当者名
- プラン（バッジ表示）
- ステータス（色分け）
- 納期（残日数警告）
- 金額
- アクション

#### フィルター機能
- ステータス別
- プラン別
- 納期順
- 作成日順

#### アクション
- 詳細表示
- テストサイト表示
- ファイル編集
- ステータス更新

### 更新方法

#### 手動更新
1. `/data/clients.json`を直接編集
2. ダッシュボードをリロード

#### 自動更新（スクリプト）
```javascript
// updateClientStatus.js
const updateClient = (clientId, updates) => {
  const data = JSON.parse(fs.readFileSync('./data/clients.json'));
  const client = data.clients.find(c => c.id === clientId);
  Object.assign(client, updates, { updatedAt: new Date().toISOString() });
  fs.writeFileSync('./data/clients.json', JSON.stringify(data, null, 2));
};
```

## 自動化スクリプト

### process-questionnaire.js
- アンケートをJSONに変換
- 仕様書テンプレート生成
- フォルダ構造作成

### process-questionnaire-with-deploy.js
- 上記の処理 + テストサイト自動デプロイ
- Vercel API使用
- URL自動保存

### manage-test-deployments.js
- テストサイト一覧管理
- 期限切れサイト削除
- デプロイ情報更新

## ベストプラクティス

### 1. 命名規則
- クライアントID: 英数字小文字、ハイフン区切り
- ファイル名: わかりやすく一貫性のある名前

### 2. バージョン管理
- 仕様書: `spec_v1.md`, `spec_v2.md`
- 重要な変更は新バージョンとして保存

### 3. バックアップ
- 定期的に`clients/`フォルダ全体をバックアップ
- 納品前に必ず最終バックアップ

### 4. コミュニケーション
- メール履歴は`communication/emails/`に保存
- 打ち合わせメモは`communication/meeting_notes/`

### 5. セキュリティ
- 個人情報を含むファイルは暗号化
- APIキーなどは環境変数で管理
- `.gitignore`で機密情報を除外

## トラブルシューティング

### よくある問題

#### 1. ダッシュボードに表示されない
- `clients.json`の構文エラーチェック
- IDの重複確認

#### 2. テストデプロイ失敗
- Vercel APIキー確認
- プロジェクト名の重複チェック

#### 3. ファイルパス問題
- 相対パスではなく絶対パスを使用
- Windowsの場合はパス区切りに注意

## 関連ドキュメント
- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - プロジェクト全体概要
- [LP-CREATION-WORKFLOW-GUIDE.md](./LP-CREATION-WORKFLOW-GUIDE.md) - LP制作ワークフロー
- [documents/client-folder-guidelines.md](./documents/client-folder-guidelines.md) - 詳細なフォルダガイドライン