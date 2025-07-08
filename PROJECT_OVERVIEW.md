# LP制作サービス プロジェクト総合ドキュメント

## 📋 目次
1. [プロジェクト概要](#プロジェクト概要)
2. [クライアント管理システム](#クライアント管理システム)
3. [ワークフロー](#ワークフロー)
4. [技術仕様](#技術仕様)
5. [デプロイメント](#デプロイメント)
6. [ドキュメント一覧](#ドキュメント一覧)

## プロジェクト概要

### サービス内容
- **サービス名**: LP制作サービス
- **運営者**: sutto.apps@gmail.com
- **本番URL**: https://lp-service-site-iz5c2rhqt-harisens-projects.vercel.app/

### 提供プラン
1. **スタンダードプラン** (2万円)
   - 基本的なLP制作
   - レスポンシブ対応
   - 基本的なアニメーション

2. **リッチプラン** (5万円)
   - 高度なアニメーション
   - インタラクティブ機能
   - カスタム機能実装

## クライアント管理システム

### ディレクトリ構造
```
clients/
├── [クライアント名]/
│   ├── questionnaire/       # アンケート情報
│   │   ├── original.txt     # 元のアンケート
│   │   └── processed.json   # 処理済みJSON
│   ├── specification/       # 仕様書
│   │   └── spec_v1.md      # 詳細仕様書
│   ├── development/        # 開発ファイル
│   │   ├── src/           # ソースコード
│   │   └── dist/          # ビルド済みファイル
│   ├── test-deployment/    # テストデプロイ情報
│   └── delivery/          # 納品物
```

### Dashboard.html の仕様

#### 概要
`dashboard.html`は全クライアント案件を一元管理するダッシュボードです。

#### データソース
- `/data/clients.json` - クライアント情報
- 各クライアントフォルダ内の情報を自動取得

#### 表示項目
1. クライアント名
2. プラン（スタンダード/リッチ）
3. 進捗状況
4. 納期
5. テストサイトURL
6. アクション（編集・プレビュー）

#### 更新方法
```javascript
// clients.jsonの構造
{
  "clients": [
    {
      "id": "client-id",
      "name": "クライアント名",
      "plan": "rich",
      "status": "development",
      "deadline": "2025-07-05",
      "testUrl": "https://test-site.vercel.app",
      "createdAt": "2025-07-04"
    }
  ]
}
```

## ワークフロー

### 1. アンケート受付
1. お客様がアンケートフォームに入力
2. Resend APIでメール送信
3. アンケート内容を`questionnaire/original.txt`に保存

### 2. 仕様書作成
```bash
# アンケート処理スクリプト実行
node scripts/process-questionnaire.js clients/[クライアント名]
```

### 3. 開発
1. 仕様書に基づいて開発
2. `development/src/`にファイル作成
3. レスポンシブ・アニメーション実装

### 4. テストデプロイ
```bash
# テストサイト作成
node scripts/process-questionnaire-with-deploy.js clients/[クライアント名]
```

### 5. 納品
1. 最終確認
2. 納品ファイル準備
3. 請求書・領収書発行

## 技術仕様

### フロントエンド
- HTML5 / CSS3 / Vanilla JavaScript
- レスポンシブデザイン（モバイルファースト）
- アニメーション: GSAP / AOS.js

### バックエンド
- Vercel Functions (Node.js)
- Resend API (メール送信)

### デプロイメント
- **本番**: Vercel
- **テスト**: Vercel (個別プロジェクト)

## デプロイメント

### Vercelデプロイ
```bash
# 本番デプロイ
npm run deploy

# 開発サーバー
npm run dev
```

### 環境変数
```
RESEND_API_KEY=your_api_key_here
```

## ドキュメント一覧

### 主要ドキュメント
- `PROJECT_OVERVIEW.md` - このファイル（総合ガイド）
- `README.md` - プロジェクト概要
- `PROJECT_STATUS.md` - 現在の進捗状況

### ワークフロー関連
- `LP-CREATION-WORKFLOW-GUIDE.md` - LP制作ワークフロー
- `documents/lp-production-workflow.md` - 詳細な制作フロー
- `documents/client-folder-guidelines.md` - クライアントフォルダ管理

### 技術ドキュメント
- `GSAP-BEST-PRACTICES.md` - GSAPベストプラクティス
- `documents/animejs_guidelines.md` - anime.jsガイドライン
- `documents/animation_library_comparison.md` - アニメーションライブラリ比較

### デプロイメント関連
- `DEPLOYMENT_GUIDE.md` - デプロイメントガイド
- `documents/vercel-deployment-guide.md` - Vercel詳細ガイド
- `deploy-instructions.md` - デプロイ手順

### その他
- `documents/pricing-strategy.md` - 価格戦略
- `documents/email-templates.md` - メールテンプレート
- `QUICK-START-TEMPLATE.md` - クイックスタート

## 更新履歴
- 2025-07-04: ドキュメント統合・整理
- 2025-07-01: プロジェクト本番デプロイ