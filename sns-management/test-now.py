#!/usr/bin/env python3
"""
今すぐ実行できるシンプルな投稿補助
"""

import webbrowser
import datetime

# 本日のツイート
tweet = """LP制作の見積もりで50万円と言われた...😱

でも、本当にそんなに必要？

✅ 基本的なLPなら2万円
✅ アニメーション付きでも5万円
✅ AI活用で最速即日納品

詳細→ https://lp-service-site.vercel.app

#LP制作 #Web制作"""

print("="*60)
print("🐦 X（Twitter）投稿補助ツール")
print("="*60)
print(f"\n📅 {datetime.datetime.now().strftime('%Y年%m月%d日 %H:%M')}")
print("\n📝 本日の投稿内容:")
print("-"*60)
print(tweet)
print("-"*60)

# URLエンコード
import urllib.parse
encoded = urllib.parse.quote(tweet)
url = f"https://twitter.com/intent/tweet?text={encoded}"

print("\n✨ 投稿方法:")
print("1. Enterキーを押すとブラウザが開きます")
print("2. Xにログインしていない場合はログイン")
print("3. 投稿内容を確認して「ポスト」ボタンをクリック")

input("\n準備ができたらEnterキーを押してください...")

print("\n🌐 ブラウザを開いています...")
webbrowser.open(url)

print("\n✅ 完了！")
print("   ブラウザで投稿を完了させてください。")
print("\n" + "="*60)