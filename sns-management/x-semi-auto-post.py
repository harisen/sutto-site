#!/usr/bin/env python3
"""
X（Twitter）半自動投稿スクリプト
手動ログイン後、投稿を自動化
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
from datetime import datetime

# ツイートリスト
TWEETS = {
    "service": [
        """LP制作の見積もりで50万円と言われた...😱

でも、本当にそんなに必要？

✅ 基本的なLPなら2万円
✅ アニメーション付きでも5万円
✅ AI活用で最速即日納品

高額な制作費に悩んでいる方、一度ご相談ください。
詳細→ https://lp-service-site.vercel.app

#LP制作 #Web制作 #ランディングページ""",
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
    
    "general": [
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

class SemiAutoPost:
    def __init__(self, headless=False):
        self.driver = None
        self.headless = headless
        self.history_file = "semi_auto_history.json"
        self.load_history()
    
    def load_history(self):
        """投稿履歴を読み込み"""
        try:
            with open(self.history_file, 'r', encoding='utf-8') as f:
                self.history = json.load(f)
        except:
            self.history = []
    
    def save_history(self, tweet_text, status="posted"):
        """投稿履歴を保存"""
        self.history.append({
            "text": tweet_text,
            "timestamp": datetime.now().isoformat(),
            "status": status
        })
        
        with open(self.history_file, 'w', encoding='utf-8') as f:
            json.dump(self.history, f, ensure_ascii=False, indent=2)
    
    def setup_driver(self):
        """ブラウザドライバーの設定"""
        options = Options()
        
        if self.headless:
            options.add_argument('--headless')
        
        # ブラウザサイズ
        options.add_argument('--window-size=1200,800')
        
        # その他のオプション
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        
        self.driver = webdriver.Chrome(options=options)
        print("🌐 ブラウザを起動しました")
    
    def wait_for_manual_login(self):
        """手動ログインを待つ"""
        print("\n" + "="*60)
        print("📝 手動ログインしてください")
        print("="*60)
        print("1. ブラウザでXにログインしてください")
        print("2. ログインが完了したら、このターミナルでEnterキーを押してください")
        print("="*60)
        
        # Xのログインページを開く
        self.driver.get("https://twitter.com/login")
        
        # ユーザーがEnterキーを押すまで待機
        input("\n✅ ログインが完了したらEnterキーを押してください...")
        
        # ホームページに移動して確認
        self.driver.get("https://twitter.com/home")
        time.sleep(3)
        
        print("✅ ログイン確認完了")
    
    def post_tweet(self, tweet_text, category=""):
        """ツイートを投稿"""
        try:
            print(f"\n📝 投稿準備中... [{category}]")
            
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
            
            # テキストを入力（人間らしく）
            print("📝 テキスト入力中...")
            for char in tweet_text:
                tweet_box.send_keys(char)
                time.sleep(random.uniform(0.03, 0.08))
            
            time.sleep(2)
            
            # 投稿前の確認
            print("\n" + "="*60)
            print("投稿内容:")
            print("-"*60)
            print(tweet_text)
            print("-"*60)
            
            confirm = input("\n⚠️  この内容で投稿しますか？ (y/n): ")
            
            if confirm.lower() == 'y':
                # 投稿ボタンを見つけてクリック
                tweet_button = self.driver.find_element(By.CSS_SELECTOR, '[data-testid="tweetButtonInline"]')
                tweet_button.click()
                
                print(f"✅ ツイート投稿成功: {datetime.now()}")
                self.save_history(tweet_text, "posted")
                
                time.sleep(3)
                return True
            else:
                print("❌ 投稿をキャンセルしました")
                self.save_history(tweet_text, "cancelled")
                # ページをリロードしてリセット
                self.driver.refresh()
                return False
            
        except Exception as e:
            print(f"❌ エラーが発生しました: {e}")
            self.save_history(tweet_text, "error")
            return False
    
    def get_random_tweet(self, category=None):
        """ツイートを取得"""
        if category and category in TWEETS:
            tweets = TWEETS[category]
        else:
            # 全カテゴリーから
            all_tweets = []
            for cat_tweets in TWEETS.values():
                all_tweets.extend(cat_tweets)
            tweets = all_tweets
        
        return random.choice(tweets)
    
    def interactive_mode(self):
        """対話モード"""
        try:
            self.setup_driver()
            self.wait_for_manual_login()
            
            while True:
                print("\n" + "="*60)
                print("📝 X半自動投稿ツール")
                print("="*60)
                print("1. サービス紹介を投稿")
                print("2. Tipsを投稿")
                print("3. 一般投稿")
                print("4. カスタムテキストを投稿")
                print("5. 終了")
                print("-"*60)
                
                choice = input("選択してください (1-5): ")
                
                if choice == '1':
                    tweet = self.get_random_tweet('service')
                    self.post_tweet(tweet, 'サービス紹介')
                
                elif choice == '2':
                    tweet = self.get_random_tweet('tips')
                    self.post_tweet(tweet, 'Tips')
                
                elif choice == '3':
                    tweet = self.get_random_tweet('general')
                    self.post_tweet(tweet, '一般')
                
                elif choice == '4':
                    print("\nカスタムテキストを入力してください（改行は維持されます）:")
                    print("入力を終了するには、空行でEnterを2回押してください。")
                    
                    lines = []
                    empty_count = 0
                    
                    while empty_count < 2:
                        line = input()
                        if line == "":
                            empty_count += 1
                        else:
                            empty_count = 0
                            lines.append(line)
                    
                    custom_tweet = "\n".join(lines)
                    if custom_tweet.strip():
                        self.post_tweet(custom_tweet, 'カスタム')
                
                elif choice == '5':
                    print("👋 終了します")
                    break
                
                else:
                    print("❌ 無効な選択です")
                
                time.sleep(1)
            
        finally:
            if self.driver:
                self.driver.quit()
    
    def quick_post(self, category=None):
        """クイック投稿（1回だけ）"""
        try:
            self.setup_driver()
            self.wait_for_manual_login()
            
            tweet = self.get_random_tweet(category)
            self.post_tweet(tweet, category or "ランダム")
            
        finally:
            if self.driver:
                time.sleep(2)
                self.driver.quit()

def main():
    import sys
    
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "interactive":
            # 対話モード
            bot = SemiAutoPost()
            bot.interactive_mode()
        
        elif command in ["service", "tips", "general"]:
            # カテゴリー指定でクイック投稿
            bot = SemiAutoPost()
            bot.quick_post(command)
        
        elif command == "quick":
            # ランダムでクイック投稿
            bot = SemiAutoPost()
            bot.quick_post()
        
        else:
            print(f"不明なコマンド: {command}")
    
    else:
        print("""
X（Twitter）半自動投稿ツール

使用方法:
  python x-semi-auto-post.py interactive  # 対話モード（推奨）
  python x-semi-auto-post.py quick        # クイック投稿（ランダム）
  python x-semi-auto-post.py service      # サービス紹介を投稿
  python x-semi-auto-post.py tips         # Tipsを投稿
  python x-semi-auto-post.py general      # 一般投稿

特徴:
  ✅ ログインは手動で安全
  ✅ 投稿前に内容確認
  ✅ カテゴリー別投稿
  ✅ カスタムテキスト対応
        """)

if __name__ == "__main__":
    main()