# X（Twitter）セットアップ補助スクリプト

## アカウント作成後に自動化できること

### 1. プロフィール情報のコピー用テキスト

```javascript
// ブラウザのコンソールで実行可能
// ※使用は自己責任でお願いします

const profileData = {
  name: "そうた@LP制作で売上UP支援",
  bio: `【LP制作でお悩みの方へ】
✅予算が心配→2万円〜の明確料金
✅納期が長い→AI活用で最速即日
✅修正が不安→テストサイトで事前確認

制作実績9業種｜満足度98%
まずは無料相談から

📌https://lp-service-site.vercel.app`,
  website: "https://lp-service-site.vercel.app",
  location: "日本"
};

// コピーしてプロフィール編集画面で貼り付け
console.log("名前:", profileData.name);
console.log("自己紹介:", profileData.bio);
console.log("ウェブサイト:", profileData.website);
```

### 2. 初回ツイート自動投稿（Python）

```python
import tweepy
import time

# API認証情報（アカウント作成後に取得）
API_KEY = "YOUR_API_KEY"
API_SECRET = "YOUR_API_SECRET"
ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"
ACCESS_TOKEN_SECRET = "YOUR_ACCESS_TOKEN_SECRET"

# 認証
auth = tweepy.OAuthHandler(API_KEY, API_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

# 固定ツイート投稿
pinned_tweet = """【LP制作でこんな悩みありませんか？】

😰 見積もりが高すぎる
😰 納期が1ヶ月以上
😰 修正のたびに追加料金

すべて解決します✨
✅ 2万円〜の明確料金
✅ 最速即日納品
✅ テストサイトで事前確認

詳細・サンプル9種類はこちら↓
https://lp-service-site.vercel.app"""

try:
    tweet = api.update_status(pinned_tweet)
    print(f"ツイート成功: {tweet.id}")
except Exception as e:
    print(f"エラー: {e}")
```

### 3. 予約投稿設定（Buffer API使用）

```python
import requests
import json

# Buffer API設定
BUFFER_ACCESS_TOKEN = "YOUR_BUFFER_TOKEN"
PROFILE_ID = "YOUR_PROFILE_ID"

# 投稿予約
def schedule_post(text, scheduled_at):
    url = "https://api.bufferapp.com/1/updates/create.json"
    
    data = {
        "profile_ids[]": PROFILE_ID,
        "text": text,
        "scheduled_at": scheduled_at,
        "access_token": BUFFER_ACCESS_TOKEN
    }
    
    response = requests.post(url, data=data)
    return response.json()

# 使用例
tweet_text = "LP制作の見積もりで50万円と言われた...😱\n\n詳細→ https://lp-service-site.vercel.app"
schedule_post(tweet_text, "2024-01-20 09:00:00")
```

## 手動で行う必要があること

1. **アカウント作成**
   - メールアドレス or 電話番号
   - パスワード設定
   - CAPTCHA認証
   - 認証コード入力

2. **初期設定**
   - プロフィール画像アップロード
   - ヘッダー画像アップロード
   - 認証バッジ申請（必要な場合）

## おすすめの手順

1. 手動でアカウント作成（5分）
2. プロフィール情報をコピペで設定（2分）
3. API認証情報を取得
4. 自動投稿スクリプトを設定
5. 予約投稿ツールと連携

この方法なら、初回設定は10分程度で完了し、その後は自動化できます。