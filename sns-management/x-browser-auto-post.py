#!/usr/bin/env python3
"""
X（Twitter）ブラウザ自動投稿スクリプト
Seleniumを使用してブラウザ操作で投稿

注意：X（Twitter）の利用規約に違反する可能性があります。
使用は自己責任でお願いします。
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
import random
import json
import os
from datetime import datetime

# 設定
CONFIG = {
    "username": "YOUR_USERNAME",  # @なしのユーザー名
    "password": "YOUR_PASSWORD",
    "headless": True,  # ヘッドレスモード（Falseで画面表示）
}

# ツイートリスト
TWEETS = [
    """LP制作の見積もりで50万円と言われた...😱

でも、本当にそんなに必要？

✅ 基本的なLPなら2万円
✅ アニメーション付きでも5万円
✅ AI活用で最速即日納品

詳細→ https://lp-service-site.vercel.app""",
    
    """【LP制作を安くする3つのコツ】

1️⃣ 素材は自分で用意
2️⃣ 参考サイトを明確に
3️⃣ 一括で要望を伝える

これだけで制作費を大幅削減できます📝""",
    
    """"LP制作50万円"と言われたら
それは相場ではなくぼったくりかも。

適正価格を知ってください。
https://lp-service-site.vercel.app/pricing.html""",
]

class XBrowserBot:
    def __init__(self):
        self.driver = None
        self.posted_file = "posted_tweets.json"
        self.load_posted_tweets()
    
    def load_posted_tweets(self):
        """投稿済みツイートを読み込み"""
        try:
            with open(self.posted_file, 'r', encoding='utf-8') as f:
                self.posted_tweets = json.load(f)
        except:
            self.posted_tweets = []
    
    def save_posted_tweets(self):
        """投稿済みツイートを保存"""
        with open(self.posted_file, 'w', encoding='utf-8') as f:
            json.dump(self.posted_tweets, f, ensure_ascii=False, indent=2)
    
    def setup_driver(self):
        """ブラウザドライバーの設定"""
        options = Options()
        
        if CONFIG["headless"]:
            options.add_argument('--headless')
        
        # その他のオプション
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--disable-gpu')
        options.add_argument('--window-size=1920,1080')
        
        # ユーザーエージェント設定
        options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
        
        # 自動化検出回避
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        options.add_experimental_option('useAutomationExtension', False)
        
        self.driver = webdriver.Chrome(options=options)
        
        # 自動化検出回避のJavaScript
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    
    def login(self):
        """Xにログイン"""
        print("🔐 ログイン中...")
        
        try:
            # Xのログインページにアクセス
            self.driver.get("https://twitter.com/login")
            time.sleep(3)
            
            # ユーザー名入力
            username_input = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, 'input[autocomplete="username"]'))
            )
            username_input.send_keys(CONFIG["username"])
            username_input.send_keys(Keys.RETURN)
            time.sleep(2)
            
            # パスワード入力
            password_input = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, 'input[type="password"]'))
            )
            password_input.send_keys(CONFIG["password"])
            password_input.send_keys(Keys.RETURN)
            time.sleep(5)
            
            print("✅ ログイン成功")
            return True
            
        except Exception as e:
            print(f"❌ ログイン失敗: {e}")
            return False
    
    def post_tweet(self, tweet_text):
        """ツイートを投稿"""
        try:
            # ホームページに移動
            self.driver.get("https://twitter.com/home")
            time.sleep(3)
            
            # ツイート入力欄を見つける
            tweet_box = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="tweetTextarea_0"]'))
            )
            
            # クリックして入力
            tweet_box.click()
            time.sleep(1)
            
            # テキストを入力（人間らしく少しずつ）
            for char in tweet_text:
                tweet_box.send_keys(char)
                time.sleep(random.uniform(0.05, 0.15))
            
            time.sleep(2)
            
            # 投稿ボタンを見つけてクリック
            tweet_button = self.driver.find_element(By.CSS_SELECTOR, '[data-testid="tweetButtonInline"]')
            tweet_button.click()
            
            print(f"✅ ツイート投稿成功: {datetime.now()}")
            
            # 投稿済みリストに追加
            self.posted_tweets.append({
                "text": tweet_text,
                "timestamp": datetime.now().isoformat()
            })
            self.save_posted_tweets()
            
            return True
            
        except Exception as e:
            print(f"❌ ツイート投稿失敗: {e}")
            return False
    
    def get_random_tweet(self):
        """ランダムなツイートを取得"""
        # 未投稿のツイートをフィルタリング
        posted_texts = [t["text"] for t in self.posted_tweets]
        available_tweets = [t for t in TWEETS if t not in posted_texts]
        
        # 全て投稿済みの場合はリセット
        if not available_tweets:
            self.posted_tweets = []
            self.save_posted_tweets()
            available_tweets = TWEETS
        
        return random.choice(available_tweets)
    
    def run_single_post(self):
        """1回だけ投稿"""
        try:
            self.setup_driver()
            
            if self.login():
                tweet = self.get_random_tweet()
                self.post_tweet(tweet)
            
        finally:
            if self.driver:
                self.driver.quit()
    
    def run_scheduled(self):
        """スケジュール実行（簡易版）"""
        import schedule
        
        # スケジュール設定
        schedule.every().monday.at("08:00").do(self.run_single_post)
        schedule.every().thursday.at("19:00").do(self.run_single_post)
        schedule.every().saturday.at("12:00").do(self.run_single_post)
        
        print("📅 スケジュール実行開始...")
        
        while True:
            schedule.run_pending()
            time.sleep(60)

# より安全な代替案：半自動投稿
def create_tweet_draft():
    """ツイート下書きをクリップボードにコピー"""
    import pyperclip
    
    tweet = random.choice(TWEETS)
    pyperclip.copy(tweet)
    
    print("📋 以下のツイートがクリップボードにコピーされました:")
    print("-" * 50)
    print(tweet)
    print("-" * 50)
    print("\n✅ Xを開いて貼り付けて投稿してください")
    print("🔗 https://twitter.com/compose/tweet")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1:
        if sys.argv[1] == "post":
            # 自動投稿（リスクあり）
            print("⚠️  警告: 自動投稿は利用規約違反の可能性があります")
            confirm = input("続行しますか？ (y/n): ")
            if confirm.lower() == 'y':
                bot = XBrowserBot()
                bot.run_single_post()
        
        elif sys.argv[1] == "draft":
            # 安全な下書き作成
            create_tweet_draft()
    
    else:
        print("""
使用方法:
  python x-browser-auto-post.py draft  # 安全：ツイート下書きをコピー（推奨）
  python x-browser-auto-post.py post   # 危険：自動投稿（非推奨）
        """)