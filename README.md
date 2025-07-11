# スッとサイト (Sutto Site)

高品質なランディングページを最速即日で制作するAI活用型制作サービス

## 概要

- **基本プラン**: ¥20,000 - レスポンシブ対応のLP制作
- **リッチプラン**: ¥50,000 - GSAPアニメーション対応
- **サイト公開代行**: 年額 ¥20,000 - ドメイン・サーバー管理込み

## ディレクトリ構造

```
├── index.html              # メインページ
├── pricing.html            # 料金ページ
├── service.html            # サービス詳細
├── portfolio.html          # ポートフォリオ
├── contact.html            # お問い合わせ
├── questionnaire.html      # アンケートフォーム
├── css/                    # スタイルシート
├── js/                     # JavaScript
├── images/                 # 画像素材
├── samples/                # サンプルサイト
│   └── vtuber-nemuko/      # VTuberサイトサンプル
├── docs/                   # ドキュメント
│   └── VTUBER_SITE_GUIDE.md # VTuberサイト制作ガイド
├── dashboard-customer-management.html  # 顧客管理（ローカル専用）
└── google-apps-script/     # Google Apps Script（別途設定）
```

## 開発

```bash
# ローカルサーバー起動
python -m http.server 8000

# Vercelデプロイ
vercel --prod
```

## 顧客管理

`dashboard-customer-management.html` をローカルで開いて顧客管理が可能。
Google スプレッドシートとの連携は `google-apps-script/` 内のコードを使用。

## セキュリティ

- dashboard関連ファイルは `.gitignore` と `.vercelignore` で除外
- 顧客データは `data/` ディレクトリに保存（デプロイ対象外）

## お問い合わせ

sutto.apps@gmail.com