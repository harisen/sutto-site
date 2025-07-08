#!/usr/bin/env python3
"""
X（Twitter）自動投稿スクリプト
事前準備：
1. pip install tweepy schedule
2. X Developer Portalでアプリを作成してAPI認証情報を取得
"""

import tweepy
import schedule
import time
import random
from datetime import datetime

# API認証情報（環境変数推奨）
import os
from dotenv import load_dotenv

# .envファイルから環境変数を読み込み
load_dotenv()

API_KEY = os.getenv("X_API_KEY", "YOUR_API_KEY")
API_SECRET = os.getenv("X_API_SECRET", "YOUR_API_SECRET")
ACCESS_TOKEN = os.getenv("X_ACCESS_TOKEN", "YOUR_ACCESS_TOKEN")
ACCESS_TOKEN_SECRET = os.getenv("X_ACCESS_TOKEN_SECRET", "YOUR_ACCESS_TOKEN_SECRET")

# ツイート定義
TWEETS = {
    "service_intro": [
        """LP制作の見積もりで50万円と言われた...😱

でも、本当にそんなに必要？

✅ 基本的なLPなら2万円
✅ アニメーション付きでも5万円
✅ AI活用で最速即日納品

高額な制作費に悩んでいる方、一度ご相談ください。
詳細→ https://lp-service-site.vercel.app

#LP制作 #Web制作 #ランディングページ""",
        
        """【LP制作実績】
今月も多くのご依頼ありがとうございました🙏

✨美容サロン：CVR2.3倍
✨飲食店：予約数3倍
✨士業：問い合わせ5倍

すべて2〜5万円で制作。
高いLP＝良いLPではありません。

サンプル9業種公開中↓
https://lp-service-site.vercel.app/portfolio.html""",
    ],
    
    "tips": [
        """【LP制作を安くする3つのコツ】

1️⃣ 素材は自分で用意
→写真やテキストを事前準備

2️⃣ 参考サイトを明確に
→イメージ共有で修正減

3️⃣ 一括で要望を伝える
→都度修正より効率的

これだけで制作費を大幅削減できます📝
フォローで更に詳しい情報を！""",
    ],
    
    "regular": [
        """"LP制作50万円"と言われたら
それは相場ではなくぼったくりかも。

適正価格を知ってください。
https://lp-service-site.vercel.app/pricing.html""",
        
        """なぜうちは2万円でLPが作れるのか。

答えはAI活用。
品質は落とさず、無駄なコストだけカット。

詳細はこちら↓
https://lp-service-site.vercel.app""",
    ]
}

class XAutoPost:
    def __init__(self):
        # 認証
        auth = tweepy.OAuthHandler(API_KEY, API_SECRET)
        auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
        self.api = tweepy.API(auth)
        
        # 投稿履歴（重複防止）
        self.posted_tweets = set()
    
    def verify_credentials(self):
        """認証確認"""
        try:
            self.api.verify_credentials()
            print("✅ 認証成功")
            return True
        except:
            print("❌ 認証失敗。API認証情報を確認してください。")
            return False
    
    def post_tweet(self, category="random"):
        """ツイート投稿"""
        # カテゴリー選択
        if category == "random":
            all_tweets = []
            for tweets in TWEETS.values():
                all_tweets.extend(tweets)
            available_tweets = [t for t in all_tweets if t not in self.posted_tweets]
        else:
            available_tweets = [t for t in TWEETS.get(category, []) if t not in self.posted_tweets]
        
        # 全て投稿済みの場合はリセット
        if not available_tweets:
            self.posted_tweets.clear()
            return self.post_tweet(category)
        
        # ランダム選択
        tweet_text = random.choice(available_tweets)
        
        try:
            tweet = self.api.update_status(tweet_text)
            self.posted_tweets.add(tweet_text)
            print(f"✅ ツイート成功 [{datetime.now()}]: {tweet.id}")
            return True
        except Exception as e:
            print(f"❌ ツイート失敗: {e}")
            return False
    
    def schedule_posts(self):
        """投稿スケジュール設定"""
        # 月曜 8:00 - 価値提供
        schedule.every().monday.at("08:00").do(lambda: self.post_tweet("tips"))
        
        # 木曜 19:00 - サービス紹介
        schedule.every().thursday.at("19:00").do(lambda: self.post_tweet("service_intro"))
        
        # 土曜 12:00 - ランダム
        schedule.every().saturday.at("12:00").do(lambda: self.post_tweet("random"))
        
        print("📅 スケジュール設定完了")
        print("- 月曜 8:00: Tips投稿")
        print("- 木曜 19:00: サービス紹介")
        print("- 土曜 12:00: ランダム投稿")
    
    def run(self):
        """自動投稿実行"""
        if not self.verify_credentials():
            return
        
        self.schedule_posts()
        
        print("\n🤖 自動投稿を開始します... (Ctrl+Cで停止)")
        
        while True:
            schedule.run_pending()
            time.sleep(60)  # 1分ごとにチェック

# 即座に1つ投稿する関数
def post_now(category="random"):
    """今すぐ投稿"""
    bot = XAutoPost()
    if bot.verify_credentials():
        bot.post_tweet(category)

# メイン実行
if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1:
        if sys.argv[1] == "now":
            # python x-auto-post-script.py now
            post_now()
        elif sys.argv[1] == "test":
            # python x-auto-post-script.py test
            print("テストモード: API認証のみ確認")
            bot = XAutoPost()
            bot.verify_credentials()
    else:
        # 通常の自動投稿モード
        bot = XAutoPost()
        bot.run()