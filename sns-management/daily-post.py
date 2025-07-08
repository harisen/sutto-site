#!/usr/bin/env python3
"""
デイリー投稿マネージャー
曜日別の投稿を管理
"""

import webbrowser
import datetime
import json
import os
import random

# 曜日別ツイートテンプレート
DAILY_TWEETS = {
    "月曜日": [
        """【週初めのご挨拶】

新しい1週間が始まりました！
今週もLP制作のお悩み解決をサポートします💪

「見積もり高すぎ...」
「納期が長い...」

そんなお悩みはありませんか？

✅ 2万円〜の明確料金
✅ 最速即日納品
✅ テストサイトで事前確認

詳細はこちら↓
https://lp-service-site.vercel.app""",
        
        """【LP制作の豆知識】

ご存知ですか？
LP制作費の80%は人件費なんです。

だから私たちはAIを活用。
品質はそのままに、コストだけカット✂️

結果：2万円〜でプロのLP制作が可能に！

サンプルを見る→
https://lp-service-site.vercel.app/portfolio.html"""
    ],
    
    "火曜日": [
        """【お客様の声】

「他社で50万円の見積もりが2万円に！」
「3日で完成して驚きました」
「修正も快く対応してくれました」

嬉しいお声をいただいています😊

あなたのLP制作も、
もっと早く、もっと安くできます。

#LP制作 #お客様の声""",
    ],
    
    "水曜日": [
        """【水曜日の制作Tips】

LP制作を安くする3つのコツ：

1️⃣ 素材は事前に準備
2️⃣ 参考サイトを明確に
3️⃣ 修正はまとめて依頼

これだけで費用を大幅削減！
詳しくはプロフィールのリンクから📝

#LP制作 #コスト削減"""
    ],
    
    "木曜日": [
        """【サービス紹介】

LP制作でこんな悩みありませんか？

😰 見積もりが高すぎる
😰 納期が1ヶ月以上
😰 修正のたびに追加料金

すべて解決します✨

詳細・9業種のサンプルはこちら↓
https://lp-service-site.vercel.app

#LP制作 #ランディングページ""",
    ],
    
    "金曜日": [
        """【週末前のご案内】

今週もお疲れ様でした！

週末にLP制作をご検討の方へ
土日も対応可能です📱

✅ 相談無料
✅ 見積もり即日
✅ テストサイトで確認可

お気軽にDMください！
サイト→ https://lp-service-site.vercel.app""",
    ],
    
    "土曜日": [
        """【週末特別企画】

フォロー&RTで
LP制作の無料相談を実施中！

あなたのビジネスに最適な
LP戦略をアドバイスします💡

条件：
1. このアカウントをフォロー
2. このツイートをRT
3. DMで「無料相談希望」

先着3名様まで！""",
    ],
    
    "日曜日": [
        """【日曜日のLP講座】

なぜLPが必要なのか？

✅ 広告の受け皿として
✅ コンバージョン率UP
✅ 商品の魅力を最大化

でも高額な制作費は不要です。
2万円から始められます。

詳細→ https://lp-service-site.vercel.app

#マーケティング #LP制作""",
    ]
}

class DailyPostManager:
    def __init__(self):
        self.history_file = "daily_post_history.json"
        self.load_history()
        
    def load_history(self):
        """投稿履歴を読み込み"""
        if os.path.exists(self.history_file):
            with open(self.history_file, 'r', encoding='utf-8') as f:
                self.history = json.load(f)
        else:
            self.history = []
    
    def save_history(self, tweet, status="prepared"):
        """投稿履歴を保存"""
        self.history.append({
            "date": datetime.datetime.now().isoformat(),
            "weekday": datetime.datetime.now().strftime('%A'),
            "tweet": tweet,
            "status": status
        })
        
        with open(self.history_file, 'w', encoding='utf-8') as f:
            json.dump(self.history, f, ensure_ascii=False, indent=2)
    
    def get_today_tweet(self):
        """今日のツイートを取得"""
        # 曜日を日本語で取得
        weekdays = {
            'Monday': '月曜日',
            'Tuesday': '火曜日',
            'Wednesday': '水曜日',
            'Thursday': '木曜日',
            'Friday': '金曜日',
            'Saturday': '土曜日',
            'Sunday': '日曜日'
        }
        
        today = datetime.datetime.now().strftime('%A')
        today_jp = weekdays.get(today, '月曜日')
        
        # 該当曜日のツイートを取得
        tweets = DAILY_TWEETS.get(today_jp, DAILY_TWEETS['月曜日'])
        
        # 今日すでに使用したツイートを除外
        today_date = datetime.datetime.now().date()
        used_today = [
            h['tweet'] for h in self.history 
            if datetime.datetime.fromisoformat(h['date']).date() == today_date
        ]
        
        available = [t for t in tweets if t not in used_today]
        
        # 全て使用済みならリセット
        if not available:
            available = tweets
        
        return random.choice(available), today_jp
    
    def show_weekly_schedule(self):
        """週間スケジュールを表示"""
        print("\n📅 週間投稿スケジュール")
        print("="*60)
        
        for day, tweets in DAILY_TWEETS.items():
            print(f"\n【{day}】")
            print(f"投稿数: {len(tweets)}パターン")
            print("サンプル:", tweets[0][:50] + "...")
        
        print("\n" + "="*60)
    
    def post_now(self):
        """今すぐ投稿"""
        tweet, weekday = self.get_today_tweet()
        
        print("\n" + "="*60)
        print(f"📅 {datetime.datetime.now().strftime('%Y年%m月%d日')} ({weekday})")
        print("="*60)
        print("\n📝 本日の投稿内容:")
        print("-"*60)
        print(tweet)
        print("-"*60)
        
        # URL作成
        import urllib.parse
        encoded = urllib.parse.quote(tweet)
        url = f"https://twitter.com/intent/tweet?text={encoded}"
        
        print("\n投稿方法:")
        print("1. Enterキーを押すとブラウザが開きます")
        print("2. 内容を確認して「ポスト」ボタンをクリック")
        
        choice = input("\n続行しますか？ (y/n/c:カスタム): ").lower()
        
        if choice == 'y':
            print("\n🌐 ブラウザを開いています...")
            webbrowser.open(url)
            self.save_history(tweet, "posted")
            print("\n✅ 投稿準備完了！")
            
        elif choice == 'c':
            print("\nカスタムツイートを入力してください:")
            custom = input()
            if custom:
                encoded = urllib.parse.quote(custom)
                url = f"https://twitter.com/intent/tweet?text={encoded}"
                webbrowser.open(url)
                self.save_history(custom, "custom_posted")
                
        else:
            print("\n❌ キャンセルしました")
            self.save_history(tweet, "cancelled")
    
    def show_history(self):
        """投稿履歴を表示"""
        if not self.history:
            print("\n投稿履歴はありません")
            return
            
        print("\n📊 投稿履歴（直近10件）")
        print("="*60)
        
        for item in self.history[-10:]:
            date = datetime.datetime.fromisoformat(item['date'])
            print(f"\n{date.strftime('%Y/%m/%d %H:%M')} ({item['weekday']})")
            print(f"状態: {item['status']}")
            print(f"内容: {item['tweet'][:50]}...")

def main():
    manager = DailyPostManager()
    
    import sys
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "schedule":
            manager.show_weekly_schedule()
        elif command == "history":
            manager.show_history()
        else:
            manager.post_now()
    else:
        # メインメニュー
        print("\n" + "="*60)
        print("🐦 X デイリー投稿マネージャー")
        print("="*60)
        print("\n1. 今日の投稿を実行")
        print("2. 週間スケジュールを見る")
        print("3. 投稿履歴を見る")
        print("4. 終了")
        
        choice = input("\n選択してください (1-4): ")
        
        if choice == '1':
            manager.post_now()
        elif choice == '2':
            manager.show_weekly_schedule()
        elif choice == '3':
            manager.show_history()
        else:
            print("\n👋 終了します")

if __name__ == "__main__":
    main()