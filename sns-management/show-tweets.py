#!/usr/bin/env python3
"""
10ツイートを表示して個別にブラウザで開く
"""

import webbrowser
import urllib.parse

# 10個のツイート
TWEETS = [
    """はじめまして！LP制作サービスを始めました。

AI技術を活用して、
✅ 最速即日納品
✅ 2万円〜の低価格
✅ テストサイトで事前確認OK

「LP作りたいけど高い...」
そんな悩みを解決します。

9業種のサンプルはこちら↓
https://lp-service-site.vercel.app

#LP制作 #新規開業 #Web制作""",

    """【LP制作 料金プラン】

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

#LP制作 #料金""",

    """【制作サンプル公開中】

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
]

# 最初の3つを表示
print("="*60)
print("🐦 最初の3ツイート（1日目用）")
print("="*60)

for i, tweet in enumerate(TWEETS, 1):
    print(f"\n【ツイート{i}】")
    print("-"*60)
    print(tweet)
    print("-"*60)
    
    # URLを生成
    encoded = urllib.parse.quote(tweet)
    url = f"https://twitter.com/intent/tweet?text={encoded}"
    
    print(f"\n🔗 投稿URL:")
    print(url)
    print("\n" + "="*60)

print("\n📝 使い方:")
print("1. 上記のURLをコピーしてブラウザで開く")
print("2. または、下のコマンドを実行:")
print("\npython3 open-tweet.py 1  # 1番目のツイートを開く")
print("python3 open-tweet.py 2  # 2番目のツイートを開く")
print("python3 open-tweet.py 3  # 3番目のツイートを開く")