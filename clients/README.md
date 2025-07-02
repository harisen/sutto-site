# クライアント管理ディレクトリ

## 概要
このディレクトリは、LP制作プロジェクトのクライアント情報と制作物を管理します。

## 使い方

### 1. 新規プロジェクト開始時

```bash
# アンケート処理スクリプトを実行
node scripts/process-questionnaire.js
```

このスクリプトは：
- コンソールからアンケート内容を入力
- 自動的にクライアントフォルダを作成
- アンケート内容をJSONに整理
- 仕様書のドラフトを自動生成

### 2. フォルダ構造

```
clients/
├── [client-name]/              # クライアント別フォルダ
│   ├── questionnaire/          # アンケート関連
│   │   ├── original.txt        # 元のアンケート回答
│   │   └── processed.json      # 処理済みデータ
│   ├── specification/          # 仕様書
│   │   ├── spec_draft.md       # 自動生成されたドラフト
│   │   └── spec_final.md       # 最終版仕様書
│   ├── design/                 # デザイン関連
│   │   ├── wireframe/          # ワイヤーフレーム
│   │   ├── mockup/             # デザインカンプ
│   │   └── assets/             # 画像・アイコン等
│   ├── development/            # 開発ファイル
│   │   ├── src/                # ソースコード
│   │   └── dist/               # ビルド済みファイル
│   ├── deliverables/           # 納品物
│   │   ├── final_files/        # 最終納品ファイル
│   │   └── documentation/      # マニュアル等
│   └── communication/          # コミュニケーション記録
│       ├── emails/             # メールのやり取り
│       └── meeting_notes/      # 打ち合わせメモ
```

### 3. プラン別の対応

#### スタンダードプラン
- 基本的な機能とデザイン
- 制作期間：3-4週間
- デザイン案：1案
- 修正：各フェーズ1回

#### リッチプラン
- 高度なアニメーションとインタラクション
- 制作期間：4-6週間
- デザイン案：2案
- 修正：各フェーズ2回
- 追加でアニメーション仕様を含む

### 4. ワークフロー

1. **アンケート処理**
   ```bash
   node scripts/process-questionnaire.js
   ```

2. **仕様書の編集**
   - `specification/spec_draft.md`を確認・編集
   - お客様と詳細を詰める
   - 最終版を`spec_final.md`として保存

3. **制作開始**
   - デザイン作成 → `design/`
   - 開発 → `development/`
   - 納品準備 → `deliverables/`

### 5. テンプレートの活用

`template/`フォルダには各種テンプレートがあります：
- `specification-template.md`: 詳細な仕様書テンプレート

必要に応じてコピーして使用してください。

## 注意事項

- クライアント情報は機密情報として扱う
- 定期的にバックアップを取る
- 納品後も一定期間はデータを保管
- Git管理する場合は、`.gitignore`に注意