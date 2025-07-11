# テストサイトデプロイメントワークフロー

## 概要
クライアントが制作物を確認するためのテストサイトデプロイメントプロセスを定義します。

## 必要なフィールド（data/clients.json）

```json
{
  "testDeployment": {
    "url": "",
    "deployedAt": "",
    "platform": "vercel|netlify",
    "expiresAt": "",
    "status": "pending|deployed|expired"
  },
  "approval": {
    "status": "pending|approved|cancelled",
    "approvedAt": "",
    "approvalEmail": "",
    "cancellationReason": "",
    "cancellationFee": 0
  },
  "payment": {
    "status": "pending|completed",
    "dueDate": "",
    "paidAt": "",
    "amount": 0,
    "method": "bank|paypay"
  }
}
```

## テストサイトデプロイメントフロー

### 1. デプロイ準備
- [ ] 開発完了確認
- [ ] `clients/[client-name]/development/src/` のファイルを確認
- [ ] 必要なファイルが全て揃っているか確認

### 2. デプロイ実施
- [ ] Vercel CLIまたはNetlify CLIを使用してデプロイ
- [ ] テストURLを取得
- [ ] 有効期限を設定（通常30日間）

### 3. クライアントフォルダへの記録
```
clients/[client-name]/test-deployment/
├── url.txt             # テストサイトURL
├── deployed_at.txt     # デプロイ日時
├── expires_at.txt      # 有効期限
└── platform.txt        # 使用プラットフォーム
```

### 4. データベース更新
- [ ] `data/clients.json` の該当クライアントに情報追加
- [ ] ダッシュボードで確認

### 5. クライアントへの通知
- [ ] テストサイト確認依頼メールの送信
- [ ] 確認期限の明記（通常3営業日）
- [ ] キャンセルポリシーの再説明

## 承認・キャンセル処理

### 承認の場合
1. 承認メールの受領
2. `clients/[client-name]/communication/approval/` に保存
3. 納品処理へ進む
4. 請求書発行

### キャンセルの場合
1. キャンセル理由の確認
2. キャンセル料（1万円）の請求書発行
3. `data/clients.json` のステータス更新
4. テストサイトの削除

## テストサイトプラットフォーム

### Vercel（推奨）
- 無料プランで十分
- 自動HTTPS
- 高速なデプロイ
- プレビューURL自動生成

### Netlify
- 無料プランで十分
- ドラッグ&ドロップデプロイ可能
- フォーム機能のテストも可能

## セキュリティ考慮事項

1. **アクセス制限**
   - Basic認証の設定（必要に応じて）
   - robots.txtでクローラーをブロック

2. **有効期限管理**
   - 30日後に自動削除設定
   - 承認後は速やかに削除

3. **URL管理**
   - 推測困難なURLを使用
   - クライアント以外には共有しない

## トラブルシューティング

### よくある問題

1. **デプロイエラー**
   - ファイルパスの確認
   - 相対パスが正しいか確認
   - 画像ファイルのサイズ確認

2. **表示崩れ**
   - ローカルとの差異確認
   - CDNリンクの確認
   - キャッシュクリア

3. **フォームが動作しない**
   - Formspreeの設定確認
   - 外部サービスの説明

## メール テンプレート

### テストサイト確認依頼

```
件名: 【ご確認】LPのテストサイトが完成しました - [会社名]様

[担当者名]様

お世話になっております。
LP制作サービスです。

ご依頼いただいておりましたLPが完成し、
テストサイトにアップロードいたしました。

■テストサイトURL
[URL]

■確認期限
[日付]（3営業日以内）

■ご確認いただきたい点
・デザインの仕上がり
・テキスト内容
・リンクの動作
・スマートフォンでの表示

ご確認後、以下のいずれかをお選びください：

【承認の場合】
このメールに「承認します」とご返信ください。
納品作業に進ませていただきます。

【修正が必要な場合】
具体的な修正箇所をお知らせください。

【キャンセルの場合】
キャンセル料1万円が発生いたします。

ご不明な点がございましたら、
お気軽にお問い合わせください。

よろしくお願いいたします。
```