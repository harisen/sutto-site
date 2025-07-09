# ローカルサーバー起動ガイド

## 問題
`file://` プロトコルで直接HTMLファイルを開くと、JavaScriptのfetch APIがCORSポリシーにより動作しません。

## 解決方法

### 方法1: Python HTTPサーバー（推奨）
```bash
# Python 3の場合
python3 -m http.server 8000

# Windows環境でpython3コマンドが使えない場合
python -m http.server 8000
```

その後、ブラウザで以下にアクセス：
http://localhost:8000/dashboard-customer-management.html

### 方法2: Node.js http-server
```bash
# グローバルインストール
npm install -g http-server

# サーバー起動
http-server -p 8000
```

### 方法3: VSCode Live Server拡張機能
1. VSCodeで「Live Server」拡張機能をインストール
2. HTMLファイルを右クリック → 「Open with Live Server」

### 方法4: PHP内蔵サーバー
```bash
php -S localhost:8000
```

## 注意事項
- ローカルサーバーで起動することで、fetch APIが正常に動作します
- 顧客データの更新・再読み込みが可能になります
- セキュリティのため、このダッシュボードは必ずローカル環境でのみ使用してください