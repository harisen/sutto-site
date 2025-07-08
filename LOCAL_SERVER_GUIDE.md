# ローカルサーバー起動ガイド

dashboard.htmlをローカルで正しく動作させるためのガイドです。

## CORS エラーについて

ブラウザのセキュリティ制限により、`file://` プロトコルでHTMLファイルを開くと、JSONファイルの読み込みがブロックされます。

## 解決方法

### 方法1: Python を使用（推奨）

```bash
# Python 3の場合
python -m http.server 8000

# Python 2の場合
python -m SimpleHTTPServer 8000
```

その後、ブラウザで `http://localhost:8000/dashboard.html` にアクセス

### 方法2: Node.js を使用

```bash
# http-serverをインストール
npm install -g http-server

# サーバーを起動
http-server -p 8000
```

### 方法3: VS Code の Live Server 拡張機能

1. VS Code で Live Server 拡張機能をインストール
2. dashboard.html を右クリック
3. "Open with Live Server" を選択

## フォールバックデータ

ローカルで直接ファイルを開いた場合でも、サンプルデータが表示されるようになっています。
実際のデータを使用するには、上記のいずれかの方法でローカルサーバーを起動してください。