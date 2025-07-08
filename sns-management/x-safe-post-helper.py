#!/usr/bin/env python3
"""
X（Twitter）投稿補助ツール（安全版）
ツイートの下書き作成とブラウザ自動オープン
"""

import webbrowser
import random
import json
import os
from datetime import datetime

# ツイートテンプレート
TWEET_TEMPLATES = {
    "monday_tips": [
        """【LP制作を安くする3つのコツ】

1️⃣ 素材は自分で用意
→写真やテキストを事前準備

2️⃣ 参考サイトを明確に
→イメージ共有で修正減

3️⃣ 一括で要望を伝える
→都度修正より効率的

これだけで制作費を大幅削減できます📝
フォローで更に詳しい情報を！""",
        
        """【失敗しないLP業者の選び方】

✅ 料金が明確に記載されている
✅ 制作実績が豊富
✅ 修正ポリシーが明確
✅ キャンセル規定がある

当社は全て満たしています👍
https://lp-service-site.vercel.app""",
    ],
    
    "thursday_service": [
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

サンプル9業種公開中↓
https://lp-service-site.vercel.app/portfolio.html""",
    ],
    
    "saturday_general": [
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

class SafePostHelper:
    def __init__(self):
        self.history_file = "post_history.json"
        self.load_history()
    
    def load_history(self):
        """投稿履歴を読み込み"""
        try:
            with open(self.history_file, 'r', encoding='utf-8') as f:
                self.history = json.load(f)
        except:
            self.history = []
    
    def save_history(self, tweet_text):
        """投稿履歴を保存"""
        self.history.append({
            "text": tweet_text,
            "timestamp": datetime.now().isoformat(),
            "posted": False  # 手動で投稿したかは追跡できない
        })
        
        # 最新100件のみ保持
        self.history = self.history[-100:]
        
        with open(self.history_file, 'w', encoding='utf-8') as f:
            json.dump(self.history, f, ensure_ascii=False, indent=2)
    
    def get_tweet_for_day(self):
        """曜日に応じたツイートを取得"""
        weekday = datetime.now().strftime('%A').lower()
        
        if weekday == 'monday':
            tweets = TWEET_TEMPLATES["monday_tips"]
        elif weekday == 'thursday':
            tweets = TWEET_TEMPLATES["thursday_service"]
        elif weekday == 'saturday':
            tweets = TWEET_TEMPLATES["saturday_general"]
        else:
            # その他の曜日はランダム
            all_tweets = []
            for category_tweets in TWEET_TEMPLATES.values():
                all_tweets.extend(category_tweets)
            tweets = all_tweets
        
        return random.choice(tweets)
    
    def create_post_url(self, tweet_text):
        """投稿用URLを生成"""
        import urllib.parse
        encoded_text = urllib.parse.quote(tweet_text)
        return f"https://twitter.com/intent/tweet?text={encoded_text}"
    
    def open_post_window(self):
        """投稿ウィンドウを開く"""
        tweet = self.get_tweet_for_day()
        url = self.create_post_url(tweet)
        
        print("\n📝 本日のツイート案:")
        print("=" * 60)
        print(tweet)
        print("=" * 60)
        
        # 履歴に保存
        self.save_history(tweet)
        
        # ブラウザで開く
        print("\n🌐 ブラウザで投稿ウィンドウを開きます...")
        webbrowser.open(url)
        
        print("\n✅ 投稿ウィンドウが開きました。")
        print("   内容を確認して「ポスト」ボタンをクリックしてください。")
    
    def show_weekly_plan(self):
        """週間投稿プランを表示"""
        print("\n📅 週間投稿プラン")
        print("=" * 60)
        print("月曜 8:00  - お役立ちTips")
        print("木曜 19:00 - サービス紹介")
        print("土曜 12:00 - 一般投稿")
        print("=" * 60)
        
        print("\n💡 各曜日のツイート例:")
        
        for day, category in [("月曜", "monday_tips"), 
                              ("木曜", "thursday_service"), 
                              ("土曜", "saturday_general")]:
            print(f"\n【{day}】")
            print(TWEET_TEMPLATES[category][0][:100] + "...")
    
    def create_all_drafts(self):
        """全ツイートの下書きファイルを作成"""
        output_file = f"tweet_drafts_{datetime.now().strftime('%Y%m%d')}.txt"
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("X（Twitter）ツイート下書き集\n")
            f.write(f"作成日: {datetime.now().strftime('%Y年%m月%d日')}\n")
            f.write("=" * 60 + "\n\n")
            
            for category, tweets in TWEET_TEMPLATES.items():
                f.write(f"【{category}】\n")
                f.write("-" * 40 + "\n")
                
                for i, tweet in enumerate(tweets, 1):
                    f.write(f"\n{i}.\n{tweet}\n")
                    f.write("-" * 40 + "\n")
                
                f.write("\n")
        
        print(f"✅ 下書きファイルを作成しました: {output_file}")

def main():
    import sys
    
    helper = SafePostHelper()
    
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "post":
            # 投稿ウィンドウを開く
            helper.open_post_window()
        
        elif command == "plan":
            # 週間プランを表示
            helper.show_weekly_plan()
        
        elif command == "drafts":
            # 全下書きをファイルに出力
            helper.create_all_drafts()
        
        else:
            print(f"不明なコマンド: {command}")
    
    else:
        print("""
X（Twitter）投稿補助ツール

使用方法:
  python x-safe-post-helper.py post    # 今日の投稿ウィンドウを開く
  python x-safe-post-helper.py plan    # 週間投稿プランを表示
  python x-safe-post-helper.py drafts  # 全ツイート下書きをファイル出力

推奨ワークフロー:
  1. 月/木/土の投稿時間にこのツールを実行
  2. 自動で開いた投稿ウィンドウで内容を確認
  3. 「ポスト」ボタンをクリックして投稿
        """)

if __name__ == "__main__":
    main()