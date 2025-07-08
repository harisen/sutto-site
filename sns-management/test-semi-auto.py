#!/usr/bin/env python3
"""
半自動投稿のテストスクリプト（簡易版）
ブラウザを開いてX（Twitter）のログインページを表示
"""

import webbrowser
import time
from datetime import datetime

# テスト用ツイート
TEST_TWEETS = [
    """LP制作の見積もりで50万円と言われた...😱

でも、本当にそんなに必要？

✅ 基本的なLPなら2万円
✅ アニメーション付きでも5万円
✅ AI活用で最速即日納品

詳細→ https://lp-service-site.vercel.app""",
]

def test_browser_open():
    """ブラウザでXを開くテスト"""
    print("="*60)
    print("🧪 X半自動投稿テスト")
    print("="*60)
    
    print("\n1. ブラウザでXのログインページを開きます...")
    webbrowser.open("https://twitter.com/login")
    
    print("\n2. 手動でログインしてください")
    input("   ログイン完了後、Enterキーを押してください...")
    
    print("\n3. 投稿用URLを生成します...")
    
    # URLエンコード
    import urllib.parse
    tweet_text = TEST_TWEETS[0]
    encoded_text = urllib.parse.quote(tweet_text)
    post_url = f"https://twitter.com/intent/tweet?text={encoded_text}"
    
    print("\n4. 投稿内容:")
    print("-"*60)
    print(tweet_text)
    print("-"*60)
    
    confirm = input("\nこの内容で投稿ウィンドウを開きますか？ (y/n): ")
    
    if confirm.lower() == 'y':
        print("\n5. 投稿ウィンドウを開きます...")
        webbrowser.open(post_url)
        print("\n✅ 投稿ウィンドウが開きました！")
        print("   内容を確認して「ポスト」ボタンをクリックしてください。")
    else:
        print("\n❌ キャンセルしました")
    
    print(f"\n実行時刻: {datetime.now()}")
    print("="*60)

if __name__ == "__main__":
    test_browser_open()