#!/usr/bin/env python3
"""
初期10ツイート投稿補助ツール
アカウントを素早く充実させる
"""

import webbrowser
import time
from datetime import datetime

# 10個のツイート
INITIAL_TWEETS = [
    # 1日目
    {
        "day": 1,
        "order": 1,
        "type": "自己紹介",
        "text": """はじめまして！LP制作サービスを始めました。

AI技術を活用して、
✅ 最速即日納品
✅ 2万円〜の低価格
✅ テストサイトで事前確認OK

「LP作りたいけど高い...」
そんな悩みを解決します。

9業種のサンプルはこちら↓
https://lp-service-site.vercel.app

#LP制作 #新規開業 #Web制作"""
    },
    {
        "day": 1,
        "order": 2,
        "type": "サービス詳細",
        "text": """【LP制作 料金プラン】

💰基本プラン：20,000円
・レスポンシブ対応
・SEO基本対策
・お問い合わせ先表示

💎リッチ版：50,000円
・GSAP高度アニメーション
・パララックス効果
・インタラクティブ要素

詳しくはWebサイトで！
https://lp-service-site.vercel.app/pricing.html

#LP制作 #料金"""
    },
    {
        "day": 1,
        "order": 3,
        "type": "実績紹介",
        "text": """【制作サンプル公開中】

実際に作成したLPサンプルを9業種分ご用意しました：

🏥 美容サロン
🍜 レストラン
⚖️ 法律事務所
💄 化粧品
💪 フィットネス
💒 結婚式場
🛍️ ECサイト
🎯 イベント
📊 士業

全て見る→ https://lp-service-site.vercel.app/portfolio.html

#ポートフォリオ"""
    },
    # 2日目
    {
        "day": 2,
        "order": 4,
        "type": "お役立ち情報",
        "text": """【LP制作の相場を知ってますか？】

大手制作会社：50〜150万円
中堅制作会社：30〜80万円
フリーランス：10〜50万円

当サービス：2〜5万円 ✨

なぜこんなに違うの？
答えは「人件費」です。

AI活用で人件費を削減。
品質はそのまま、価格だけ下げました。

#LP制作 #相場"""
    },
    {
        "day": 2,
        "order": 5,
        "type": "Tips提供",
        "text": """【売れるLPの3つの特徴】

1️⃣ ファーストビューで心を掴む
→3秒で何のサービスか分かる

2️⃣ ベネフィットを明確に
→特徴ではなく「得られる結果」を書く

3️⃣ 信頼性の証明
→実績、お客様の声、資格など

これを2万円で実現します💡

#マーケティング #LP制作"""
    },
    {
        "day": 2,
        "order": 6,
        "type": "Q&A",
        "text": """【よくある質問】

Q: 本当に即日で作れるの？
A: 素材が揃っていれば可能です！

Q: 安いと品質が心配...
A: だからテストサイトで確認してから決められます

Q: どんな業種でも対応可能？
A: はい！9業種の実績があります

他の質問もお気軽にDMください📩"""
    },
    # 3日目
    {
        "day": 3,
        "order": 7,
        "type": "制作の流れ",
        "text": """【LP制作の流れ】

1️⃣ お問い合わせ（無料相談）
2️⃣ アンケートでヒアリング
3️⃣ AI活用で高速制作
4️⃣ テストサイトで確認
5️⃣ 修正対応（必要な場合）
6️⃣ 承認・納品

最速なら①〜⑥が1日で完了！

詳細はこちら↓
https://lp-service-site.vercel.app/service.html"""
    },
    {
        "day": 3,
        "order": 8,
        "type": "お客様目線",
        "text": """こんな方におすすめです：

☑️ 起業したばかりで予算が限られている
☑️ 急いでLPが必要になった
☑️ 今のLPの成果に満足していない
☑️ Web制作の知識がない
☑️ 丸投げで作って欲しい

1つでも当てはまったら、ぜひご相談を！

#起業 #スタートアップ"""
    },
    # 4日目
    {
        "day": 4,
        "order": 9,
        "type": "差別化ポイント",
        "text": """【他社との違い】

❌ 他社：見積もりまで1週間
✅ 当社：即日見積もり

❌ 他社：着手金50%
✅ 当社：完成後のお支払い

❌ 他社：修正3回まで
✅ 当社：修正は明確料金で無制限

お客様ファーストで運営しています🙏

#LP制作 #差別化"""
    },
    {
        "day": 4,
        "order": 10,
        "type": "CTA",
        "text": """【無料相談受付中】

「うちの業種でも作れる？」
「予算20,000円で足りる？」
「どんなLPが効果的？」

どんな質問でもOK！
まずは気軽に相談してください。

💬 DMは24時間受付
📧 メールでもOK
🌐 Webサイトからも可能

一緒に売れるLPを作りましょう！✨

今すぐ相談→ https://lp-service-site.vercel.app/contact.html"""
    }
]

def post_tweet(tweet_data):
    """ツイートを投稿"""
    import urllib.parse
    
    print("\n" + "="*60)
    print(f"📝 {tweet_data['day']}日目 - {tweet_data['order']}個目")
    print(f"タイプ: {tweet_data['type']}")
    print("="*60)
    print("\n投稿内容:")
    print("-"*60)
    print(tweet_data['text'])
    print("-"*60)
    
    # URL作成
    encoded = urllib.parse.quote(tweet_data['text'])
    url = f"https://twitter.com/intent/tweet?text={encoded}"
    
    choice = input("\nこの内容で投稿しますか？ (y/n/s:スキップ): ").lower()
    
    if choice == 'y':
        print("\n🌐 ブラウザを開いています...")
        webbrowser.open(url)
        print("✅ 投稿ウィンドウが開きました！")
        
        # 次の投稿まで少し待つ
        print("\n⏱️  30秒後に次の投稿を表示します...")
        time.sleep(30)
        return True
    elif choice == 's':
        print("⏭️  この投稿をスキップしました")
        return True
    else:
        print("❌ キャンセルしました")
        return False

def main():
    print("\n" + "="*70)
    print("🚀 初期10ツイート投稿ツール")
    print("="*70)
    print("\nアカウントを素早く充実させるための10個のツイートを用意しました。")
    print("1日2-3個ずつ投稿することをおすすめします。")
    
    print("\n投稿方法を選択してください:")
    print("1. 全て順番に投稿")
    print("2. 今日の分だけ投稿")
    print("3. 特定の番号を投稿")
    print("4. 一覧を見る")
    
    choice = input("\n選択 (1-4): ")
    
    if choice == '1':
        # 全て投稿
        for tweet in INITIAL_TWEETS:
            if not post_tweet(tweet):
                break
            
    elif choice == '2':
        # 今日の分
        print("\n何日目の投稿をしますか？")
        day = input("日数 (1-4): ")
        
        if day.isdigit() and 1 <= int(day) <= 4:
            day_tweets = [t for t in INITIAL_TWEETS if t['day'] == int(day)]
            for tweet in day_tweets:
                if not post_tweet(tweet):
                    break
                    
    elif choice == '3':
        # 特定の番号
        print("\n投稿番号を入力してください (1-10):")
        num = input("番号: ")
        
        if num.isdigit() and 1 <= int(num) <= 10:
            tweet = INITIAL_TWEETS[int(num) - 1]
            post_tweet(tweet)
            
    elif choice == '4':
        # 一覧表示
        print("\n【投稿一覧】")
        print("-"*70)
        for tweet in INITIAL_TWEETS:
            print(f"\n{tweet['order']}. [{tweet['day']}日目] {tweet['type']}")
            print(f"   {tweet['text'][:50]}...")
    
    print("\n✅ 完了しました！")
    print("\n💡 ヒント:")
    print("- 投稿後は他のアカウントをフォローしましょう")
    print("- 関連するツイートにいいねやリプライを")
    print("- プロフィールも充実させてください")

if __name__ == "__main__":
    main()