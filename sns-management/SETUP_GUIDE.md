# X半自動投稿ツール セットアップガイド

## 🚀 クイックスタート

### 1. 必要なソフトウェアのインストール

#### Python（既にインストール済みの場合はスキップ）
- [Python公式サイト](https://www.python.org/downloads/)から最新版をダウンロード
- インストール時に「Add Python to PATH」にチェック

#### Google Chrome（既にインストール済みの場合はスキップ）
- [Chrome公式サイト](https://www.google.com/chrome/)からダウンロード

### 2. 必要なライブラリのインストール

コマンドプロンプト（Windows）またはターミナル（Mac/Linux）で実行：

```bash
# sns-managementフォルダに移動
cd lp-service-site/sns-management

# 必要なライブラリをインストール
pip install -r requirements.txt

# または個別にインストール
pip install selenium webdriver-manager
```

### 3. Chrome Driverの自動セットアップ

webdriver-managerが自動的にChrome Driverをダウンロードするので、手動でのダウンロードは不要です。

## 📱 使い方

### 方法1: 簡易版（ブラウザで投稿ウィンドウを開く）

```bash
python x-safe-post-helper.py post
```

- ブラウザが開いて投稿内容が自動入力される
- あとは「ポスト」ボタンをクリックするだけ

### 方法2: 半自動版（Seleniumを使用）

```bash
python x-semi-auto-post.py interactive
```

1. Chromeが自動で起動
2. 手動でXにログイン
3. ターミナルでEnterキーを押す
4. メニューから投稿タイプを選択
5. 投稿前に内容を確認

## 🔧 トラブルシューティング

### エラー: ModuleNotFoundError
```bash
# pipのアップグレード
python -m pip install --upgrade pip

# 再度インストール
pip install selenium webdriver-manager
```

### エラー: ChromeDriverが見つからない
```bash
# webdriver-managerで自動ダウンロード
pip install --upgrade webdriver-manager
```

### Windowsでpythonコマンドが見つからない
```bash
# python3を試す
python3 x-semi-auto-post.py interactive

# またはpy（Windows専用）
py x-semi-auto-post.py interactive
```

## 📝 初回実行の流れ

1. **コマンドプロンプトを開く**
   - Windowsキー + R
   - 「cmd」と入力してEnter

2. **フォルダに移動**
   ```bash
   cd C:\Users\akuta\lp-service-site\sns-management
   ```

3. **スクリプトを実行**
   ```bash
   python x-safe-post-helper.py post
   ```

4. **ブラウザで投稿**
   - 自動で開いたページで内容を確認
   - 「ポスト」ボタンをクリック

## 💡 ヒント

- 最初は`x-safe-post-helper.py`（安全版）から始めることを推奨
- 慣れてきたら`x-semi-auto-post.py`（半自動版）を試す
- 投稿履歴は自動的に保存される

## 📅 推奨投稿スケジュール

- **月曜 8:00** - お役立ちTips
- **木曜 19:00** - サービス紹介  
- **土曜 12:00** - 一般投稿

定期的に投稿することで、フォロワーとのエンゲージメントが向上します！