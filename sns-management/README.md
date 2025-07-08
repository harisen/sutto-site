# SNS運用管理

## 📁 ファイル構成

- `twitter-posts.md` - ツイート案集
- `x-account-profile.md` - プロフィール情報
- `x-operation-strategy.md` - 運用戦略
- `x-auto-post-script.py` - API自動投稿スクリプト
- `x-semi-auto-post.py` - 半自動投稿スクリプト（推奨）
- `x-safe-post-helper.py` - 投稿補助ツール
- `x-browser-auto-post.py` - ブラウザ自動投稿
- `setup-browser-automation.md` - ブラウザ自動化ガイド

## 🎯 推奨：半自動投稿ツール（手動ログイン）

### セットアップ
```bash
# 必要なライブラリ
pip install selenium webdriver-manager

# Chrome Driverは自動ダウンロード
```

### 使い方

#### 対話モード（推奨）
```bash
python x-semi-auto-post.py interactive
```

1. ブラウザが自動で開く
2. **手動でXにログイン**
3. ログイン完了後、Enterキーを押す
4. メニューから投稿タイプを選択
5. 投稿前に内容を確認してy/nで選択

#### クイック投稿
```bash
# カテゴリー指定
python x-semi-auto-post.py service  # サービス紹介
python x-semi-auto-post.py tips     # Tips投稿
python x-semi-auto-post.py general  # 一般投稿

# ランダム
python x-semi-auto-post.py quick
```

### メリット
✅ ログインは手動なので安全
✅ 2段階認証にも対応
✅ 投稿前に内容を確認
✅ アカウント停止リスクが低い

## 🤖 API自動投稿の設定方法

### 1. 事前準備

#### X Developer Portalでアプリ作成
1. https://developer.twitter.com にアクセス
2. 「Create an app」でアプリ作成
3. API Key、API Secret、Access Token、Access Token Secretを取得

#### 必要なライブラリインストール
```bash
pip install tweepy schedule
```

### 2. スクリプト設定

`x-auto-post-script.py`の以下の部分を編集：

```python
API_KEY = "YOUR_API_KEY"
API_SECRET = "YOUR_API_SECRET"
ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"
ACCESS_TOKEN_SECRET = "YOUR_ACCESS_TOKEN_SECRET"
```

### 3. 使用方法

#### 今すぐ投稿
```bash
python x-auto-post-script.py now
```

#### API認証テスト
```bash
python x-auto-post-script.py test
```

#### 自動投稿開始（スケジュール実行）
```bash
python x-auto-post-script.py
```

### 4. スケジュール

デフォルト設定：
- 月曜 8:00 - Tips投稿
- 木曜 19:00 - サービス紹介
- 土曜 12:00 - ランダム投稿

### 5. サーバーでの常時実行

#### systemdサービス作成（Linux）
```bash
sudo nano /etc/systemd/system/x-auto-post.service
```

```ini
[Unit]
Description=X Auto Post Bot
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/lp-service-site/sns-management
ExecStart=/usr/bin/python3 /path/to/lp-service-site/sns-management/x-auto-post-script.py
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable x-auto-post
sudo systemctl start x-auto-post
```

#### PM2使用（Node.js環境）
```bash
pm2 start x-auto-post-script.py --interpreter python3
pm2 save
pm2 startup
```

## 🔒 セキュリティ注意事項

1. API認証情報は環境変数に保存推奨
2. `.env`ファイルを使用する場合は`.gitignore`に追加
3. 公開リポジトリにはAPI情報を含めない

## 📝 カスタマイズ

### ツイート追加
`TWEETS`辞書に新しいツイートを追加

### スケジュール変更
`schedule_posts()`メソッド内のスケジュールを編集

### カテゴリー追加
`TWEETS`辞書に新しいカテゴリーを追加