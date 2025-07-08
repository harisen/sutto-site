# Dashboard.html 仕様書

## 📋 目次
1. [概要](#概要)
2. [機能仕様](#機能仕様)
3. [データ構造](#データ構造)
4. [画面構成](#画面構成)
5. [操作フロー](#操作フロー)
6. [実装詳細](#実装詳細)
7. [セキュリティ](#セキュリティ)

## 概要

### 目的
Dashboard.htmlは、LP制作サービスの全クライアント案件を一元管理するための管理画面です。案件の進捗確認、ステータス更新、各種アクションを効率的に実行できます。

### 要件
- **ローカル専用**: 本番環境にはデプロイしない（.gitignoreで除外）
- **シングルページ**: 外部依存なしで動作
- **データ駆動**: clients.jsonから情報を読み込み
- **リアルタイム更新**: ページリロードで最新状態反映

## 機能仕様

### 主要機能
1. **案件一覧表示**
   - 全クライアントの情報を表形式で表示
   - ソート・フィルター機能
   - ページネーション（20件/ページ）

2. **ステータス管理**
   - 8段階のステータス
   - ドラッグ&ドロップでステータス変更
   - 色分け表示

3. **アクション機能**
   - テストサイトプレビュー
   - ファイル編集リンク
   - 請求書・領収書生成
   - メール送信

4. **ダッシュボード分析**
   - 月次売上グラフ
   - ステータス別案件数
   - 納期アラート

## データ構造

### clients.json
```json
{
  "clients": [
    {
      "id": "yamatoneriko",
      "name": "yamatoneriko",
      "contactPerson": "トネコ",
      "email": "atelier.yamatoneriko@gmail.com",
      "phone": "090-5364-0512",
      "plan": "rich",
      "price": 50000,
      "status": "development",
      "deadline": "2025-07-05",
      "testUrl": "https://test-site.vercel.app",
      "productionUrl": null,
      "folderPath": "clients/yamatoneriko",
      "notes": "黄色メイン、ロゴ後日提供",
      "createdAt": "2025-07-04T10:00:00Z",
      "updatedAt": "2025-07-04T15:30:00Z",
      "invoice": {
        "issued": false,
        "issuedDate": null,
        "number": null
      },
      "receipt": {
        "issued": false,
        "issuedDate": null,
        "number": null
      }
    }
  ],
  "metadata": {
    "lastUpdated": "2025-07-04T15:30:00Z",
    "totalClients": 10,
    "activeClients": 5
  }
}
```

### ステータス定義
```javascript
const statusDefinitions = {
  'inquiry': { label: '問い合わせ', color: '#gray', icon: '❓' },
  'questionnaire': { label: 'アンケート待ち', color: '#yellow', icon: '📝' },
  'specification': { label: '仕様書作成', color: '#orange', icon: '📋' },
  'development': { label: '開発中', color: '#blue', icon: '💻' },
  'testing': { label: 'テスト中', color: '#purple', icon: '🧪' },
  'review': { label: 'レビュー待ち', color: '#pink', icon: '👀' },
  'completed': { label: '完了', color: '#green', icon: '✅' },
  'delivered': { label: '納品済み', color: '#teal', icon: '📦' }
};
```

## 画面構成

### レイアウト
```
┌─────────────────────────────────────────────┐
│  LP制作サービス ダッシュボード              │
├─────────────────────────────────────────────┤
│  📊 統計情報                                │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐        │
│  │案件数│ │売上  │ │今月  │ │納期  │        │
│  │  10 │ │150万│ │ 5件 │ │ 3件 │        │
│  └─────┘ └─────┘ └─────┘ └─────┘        │
├─────────────────────────────────────────────┤
│  🔍 フィルター: [ステータス▼] [プラン▼]    │
│  📝 並び替え: [納期順▼]                    │
├─────────────────────────────────────────────┤
│  クライアント一覧                           │
│  ┌──┬──────┬────┬──────┬────┬────┬────┐  │
│  │ID│名前  │プラン│ステータス│納期│金額│操作│  │
│  ├──┼──────┼────┼──────┼────┼────┼────┤  │
│  │1 │山田  │Rich │開発中│7/5 │5万 │[▶]│  │
│  └──┴──────┴────┴──────┴────┴────┴────┘  │
└─────────────────────────────────────────────┘
```

### コンポーネント構成
1. **ヘッダー**
   - タイトル
   - 最終更新時刻
   - リロードボタン

2. **統計セクション**
   - 総案件数
   - 月次売上
   - 進行中案件
   - 納期警告

3. **フィルターバー**
   - ステータスフィルター
   - プランフィルター
   - 検索ボックス
   - ソート選択

4. **テーブル**
   - ID/名前
   - 担当者
   - プラン（バッジ）
   - ステータス（色付き）
   - 納期（残日数表示）
   - 金額
   - アクションボタン

5. **詳細モーダル**
   - 全情報表示
   - 編集フォーム
   - 履歴表示

## 操作フロー

### 基本操作
1. **案件確認**
   ```
   ダッシュボード開く → 一覧確認 → 詳細クリック
   ```

2. **ステータス更新**
   ```
   案件選択 → ステータスドロップダウン → 保存
   ```

3. **テストサイト確認**
   ```
   プレビューボタン → 新規タブで開く
   ```

### 高度な操作
1. **一括処理**
   - チェックボックスで複数選択
   - 一括ステータス変更
   - 一括エクスポート

2. **レポート生成**
   - 期間指定
   - CSV/PDFエクスポート
   - 売上集計

## 実装詳細

### HTML構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>LP制作サービス - ダッシュボード</title>
    <style>
        /* インラインCSS */
    </style>
</head>
<body>
    <div id="dashboard">
        <header><!-- ヘッダー --></header>
        <section id="stats"><!-- 統計 --></section>
        <section id="filters"><!-- フィルター --></section>
        <section id="clients-table"><!-- テーブル --></section>
        <div id="modal"><!-- モーダル --></div>
    </div>
    <script>
        // インラインJavaScript
    </script>
</body>
</html>
```

### JavaScript機能
```javascript
// データ読み込み
async function loadClients() {
    const response = await fetch('./data/clients.json');
    const data = await response.json();
    return data.clients;
}

// テーブル描画
function renderTable(clients) {
    const tbody = document.querySelector('#clients-tbody');
    tbody.innerHTML = clients.map(client => `
        <tr>
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td><span class="badge ${client.plan}">${client.plan}</span></td>
            <td><span class="status ${client.status}">${statusDefinitions[client.status].label}</span></td>
            <td>${formatDeadline(client.deadline)}</td>
            <td>¥${client.price.toLocaleString()}</td>
            <td>
                <button onclick="viewDetails('${client.id}')">詳細</button>
                <button onclick="openTestSite('${client.testUrl}')">プレビュー</button>
            </td>
        </tr>
    `).join('');
}

// ステータス更新
async function updateStatus(clientId, newStatus) {
    // clients.json更新ロジック
    // ローカル環境では、Node.jsスクリプト経由で更新
}
```

### スタイリング
```css
/* カラーテーマ */
:root {
    --primary: #2563EB;
    --success: #10B981;
    --warning: #F59E0B;
    --danger: #EF4444;
    --gray: #6B7280;
}

/* ステータスバッジ */
.status {
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 600;
}

.status.development { 
    background: #DBEAFE; 
    color: #1E40AF; 
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    .table-wrapper {
        overflow-x: auto;
    }
}
```

## セキュリティ

### アクセス制限
- ローカル環境のみで動作
- 本番環境へのデプロイ禁止（.gitignore）
- Basic認証の実装検討

### データ保護
- 個人情報の暗号化検討
- バックアップの定期実行
- 変更履歴の記録

### 操作ログ
```javascript
// 操作履歴の記録
function logAction(action, clientId, userId) {
    const log = {
        timestamp: new Date().toISOString(),
        action: action,
        clientId: clientId,
        userId: userId || 'system'
    };
    // ログファイルに追記
}
```

## 今後の拡張案

### 機能追加
1. **自動化**
   - ステータス自動更新
   - 納期リマインダー
   - 請求書自動生成

2. **分析機能**
   - 詳細な売上分析
   - クライアント分析
   - パフォーマンス指標

3. **連携機能**
   - Slack通知
   - Google Calendar連携
   - 会計ソフト連携

### UI/UX改善
1. **ダークモード対応**
2. **ドラッグ&ドロップ**
3. **リアルタイム更新**
4. **モバイル最適化**

## 関連ドキュメント
- [CLIENT_MANAGEMENT_GUIDE.md](./CLIENT_MANAGEMENT_GUIDE.md) - クライアント管理ガイド
- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - プロジェクト概要
- [data/clients.json](./data/clients.json) - データファイル