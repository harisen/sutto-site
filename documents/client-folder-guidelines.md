# クライアントフォルダ管理ガイドライン

## 概要
LP制作の依頼を受けた際は、必ずクライアント専用フォルダ内で全ての作業を行います。
ルートディレクトリや他の場所での作業は避け、クライアントフォルダ内で完結させることを徹底します。

## クライアントフォルダの作成タイミング
アンケート回答を受信した時点で、即座にクライアントフォルダを作成します。

## フォルダ命名規則
`clients/[client-name]/`
- client-name: 会社名または屋号を英数字・ハイフンで表記
- 例: `powerfit-yokohama`, `tanaka-seitai`, `eigokun`

## 必須のディレクトリ構造
```
clients/[client-name]/
├── questionnaire/          # アンケート関連
│   ├── original.txt        # 受信したアンケート原文
│   └── processed.json      # 構造化されたデータ
├── specification/          # 仕様書
├── design/                 # デザイン関連
│   ├── wireframe/         
│   ├── mockup/            
│   └── assets/            
├── development/            # 開発ファイル
│   ├── src/               # ソースコード（HTML/CSS/JS）
│   └── dist/              # ビルド済みファイル
├── deliverables/          # 納品物
│   ├── final_files/       
│   └── documentation/     
├── communication/         # コミュニケーション記録
│   ├── emails/            
│   └── meeting_notes/     
├── invoices/              # 請求書
├── receipts/              # 領収書
├── delivery/              # 納品用ファイル
└── delivery-package/      # 納品パッケージ
```

## 開発時の注意事項

### ❌ 避けるべきこと
- ルートディレクトリに直接HTMLファイルを作成
- `/css/` や `/js/` などの共通ディレクトリに個別案件のファイルを配置
- 一時的な作業フォルダ（`/projects/` など）の使用

### ✅ 正しい作業フロー
1. アンケート受信
2. `clients/[client-name]/` フォルダを作成
3. アンケート内容を `questionnaire/` に保存
4. 開発ファイルは全て `development/src/` 内に作成
5. CSSやJSファイルも同じディレクトリ内で管理
6. 相対パスで参照（例: `href="style.css"` not `href="css/style.css"`）

## データベース登録
新規クライアントは必ず `data/clients.json` に登録します：
- ID（フォルダ名と同じ）
- 基本情報（名前、会社名、連絡先）
- プロジェクト情報（プラン、ステータス、金額）
- ファイルパス情報

### ダッシュボードの自動更新
`data/clients.json` に登録すると、ダッシュボード（dashboard.html）が自動的に更新されます：
- 総顧客数の増加
- ステータス別の案件数更新
- 顧客一覧への新規クライアント表示
- 今月の売上（納品完了時）の反映

## ファイルパスの管理
開発中のファイル内でのリソース参照は、全て相対パスを使用：
- CSS: `<link rel="stylesheet" href="style.css">`
- JS: `<script src="script.js"></script>`
- 画像: `<img src="images/logo.png">`

## 移行時の対応
もし誤ってルートディレクトリなどで作業してしまった場合：
1. 速やかにクライアントフォルダを作成
2. 全ファイルを適切な場所に移動
3. ファイル内のパス参照を更新
4. 元の場所のファイルは削除
5. `data/clients.json` を更新

## チェックリスト
- [ ] クライアントフォルダが作成されているか
- [ ] アンケートが questionnaire/ に保存されているか
- [ ] 開発ファイルが development/src/ にあるか
- [ ] data/clients.json に登録されているか
- [ ] ファイル内のパスが相対パスになっているか