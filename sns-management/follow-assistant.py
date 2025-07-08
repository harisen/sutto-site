#!/usr/bin/env python3
"""
X(Twitter) フォロー作業補助ツール
規約に準拠した半自動化アプローチ
"""

import webbrowser
import json
import time
from datetime import datetime, date
import os
import urllib.parse

class SafeFollowAssistant:
    def __init__(self):
        self.data_file = "follow_tracking.json"
        self.load_data()
        
    def load_data(self):
        """過去のフォローデータを読み込み"""
        if os.path.exists(self.data_file):
            with open(self.data_file, 'r', encoding='utf-8') as f:
                self.data = json.load(f)
        else:
            self.data = {
                "daily_stats": {},
                "follow_list": [],
                "settings": {
                    "daily_limit": 20,
                    "follow_interval": 30
                }
            }
    
    def save_data(self):
        """データを保存"""
        with open(self.data_file, 'w', encoding='utf-8') as f:
            json.dump(self.data, f, ensure_ascii=False, indent=2)
    
    def get_today_count(self):
        """今日のフォロー数を取得"""
        today = str(date.today())
        return self.data["daily_stats"].get(today, 0)
    
    def can_follow_more(self):
        """まだフォロー可能か確認"""
        today_count = self.get_today_count()
        limit = self.data["settings"]["daily_limit"]
        return today_count < limit
    
    def search_targets(self):
        """ターゲット検索を支援"""
        print("\n🔍 フォロー候補を検索します")
        print("-" * 50)
        
        # おすすめ検索クエリ
        searches = [
            {
                "name": "新規起業家",
                "query": "起業しました -RT since:2024-01-01",
                "reason": "最近起業した人は、LP需要が高い"
            },
            {
                "name": "開業準備中",
                "query": "開業準備 OR 開業予定",
                "reason": "これから必要になる可能性大"
            },
            {
                "name": "LP/HP需要",
                "query": "ホームページ 作りたい OR LP 必要",
                "reason": "直接的なニーズあり"
            },
            {
                "name": "集客の悩み",
                "query": "集客 悩み OR 集客 困って",
                "reason": "LPで解決できる課題"
            },
            {
                "name": "地域×起業",
                "query": "起業 near:東京 within:50km",
                "reason": "地域密着型アプローチ"
            }
        ]
        
        print("どの検索を実行しますか？")
        for i, search in enumerate(searches, 1):
            print(f"{i}. {search['name']}")
            print(f"   理由: {search['reason']}")
        
        print(f"{len(searches)+1}. カスタム検索")
        print("0. スキップ")
        
        choice = input("\n選択 (0-6): ")
        
        if choice == "0":
            return
        elif choice == str(len(searches)+1):
            query = input("検索クエリ: ")
        elif choice.isdigit() and 1 <= int(choice) <= len(searches):
            query = searches[int(choice)-1]["query"]
        else:
            return
        
        # URLエンコード
        encoded_query = urllib.parse.quote(query)
        url = f"https://twitter.com/search?q={encoded_query}&f=live"
        
        print(f"\n🌐 ブラウザで開きます: {query}")
        webbrowser.open(url)
        
        print("\n💡 フォロー候補の選び方:")
        print("- プロフィールに業種が書いてある")
        print("- フォロワー100-5000（アクティブ層）")
        print("- 最近の投稿がある（1週間以内）")
        print("- ビジネス関連の投稿が多い")
        
        input("\n候補を見つけたらEnterキー...")
    
    def add_to_list(self):
        """フォロー候補をリストに追加"""
        print("\n📝 フォロー候補を追加")
        print("ユーザー名を入力（@なしでOK）")
        print("終了は空Enter")
        print("-" * 50)
        
        added_count = 0
        while True:
            username = input("ユーザー名: ").strip()
            if not username:
                break
            
            # @を除去
            username = username.replace("@", "")
            
            # メモを追加
            memo = input("メモ（省略可）: ")
            
            self.data["follow_list"].append({
                "username": username,
                "memo": memo,
                "added_date": str(datetime.now()),
                "followed": False,
                "followed_date": None
            })
            added_count += 1
            print(f"✅ 追加しました（計{added_count}人）\n")
        
        self.save_data()
        print(f"\n📊 {added_count}人を追加しました")
    
    def execute_follows(self):
        """フォロー実行を支援"""
        # 本日のフォロー可能数を確認
        today_count = self.get_today_count()
        limit = self.data["settings"]["daily_limit"]
        available = limit - today_count
        
        if available <= 0:
            print(f"\n⚠️ 本日の上限（{limit}人）に達しています")
            print("明日またお試しください")
            return
        
        print(f"\n👥 フォロー実行")
        print(f"本日: {today_count}/{limit} フォロー済み")
        print(f"あと{available}人フォロー可能")
        print("-" * 50)
        
        # 未フォローのリストを取得
        pending = [u for u in self.data["follow_list"] if not u["followed"]]
        
        if not pending:
            print("フォロー候補がありません")
            print("先に候補を追加してください")
            return
        
        print(f"\n未フォロー: {len(pending)}人")
        follow_count = min(available, len(pending))
        print(f"今から{follow_count}人をフォローします")
        
        input("\n準備ができたらEnterキー...")
        
        followed_today = 0
        for i, user in enumerate(pending[:follow_count]):
            print(f"\n[{i+1}/{follow_count}] @{user['username']}")
            if user['memo']:
                print(f"メモ: {user['memo']}")
            
            # プロフィールを開く
            url = f"https://twitter.com/{user['username']}"
            webbrowser.open(url)
            
            print("\n行動:")
            print("1. プロフィールを確認")
            print("2. 最新投稿2-3個にいいね")
            print("3. フォローボタンをクリック")
            
            result = input("\nフォローした？ (y/n/skip): ").lower()
            
            if result == 'y':
                # フォロー記録
                user['followed'] = True
                user['followed_date'] = str(datetime.now())
                
                # 本日の統計を更新
                today = str(date.today())
                self.data["daily_stats"][today] = self.data["daily_stats"].get(today, 0) + 1
                followed_today += 1
                
                print("✅ フォロー完了")
                
                # インターバル
                if i < follow_count - 1:
                    wait = self.data["settings"]["follow_interval"]
                    print(f"\n⏱️ {wait}秒待機中...")
                    time.sleep(wait)
            
            elif result == 'skip':
                print("⏭️ スキップしました")
            
            else:
                print("❌ フォローしませんでした")
        
        self.save_data()
        print(f"\n📊 本日の成果: {followed_today}人フォロー")
        print(f"累計: {self.get_today_count()}/{limit}")
    
    def show_stats(self):
        """統計情報を表示"""
        print("\n📊 フォロー統計")
        print("-" * 50)
        
        # 全体統計
        total_followed = sum(1 for u in self.data["follow_list"] if u["followed"])
        total_pending = len(self.data["follow_list"]) - total_followed
        
        print(f"総フォロー数: {total_followed}")
        print(f"未フォロー: {total_pending}")
        
        # 日別統計
        print("\n📅 最近の活動:")
        dates = sorted(self.data["daily_stats"].keys(), reverse=True)[:7]
        for d in dates:
            count = self.data["daily_stats"][d]
            print(f"{d}: {count}人")
        
        # 本日の状況
        today_count = self.get_today_count()
        limit = self.data["settings"]["daily_limit"]
        print(f"\n本日: {today_count}/{limit}")
        
    def main_menu(self):
        """メインメニュー"""
        while True:
            print("\n" + "="*50)
            print("🤖 Xフォロー補助ツール（安全版）")
            print("="*50)
            
            print("\n1. 🔍 フォロー候補を検索")
            print("2. 📝 候補をリストに追加")
            print("3. 👥 フォロー実行")
            print("4. 📊 統計を見る")
            print("5. ⚙️  設定変更")
            print("0. 終了")
            
            choice = input("\n選択 (0-5): ")
            
            if choice == "1":
                self.search_targets()
            elif choice == "2":
                self.add_to_list()
            elif choice == "3":
                self.execute_follows()
            elif choice == "4":
                self.show_stats()
            elif choice == "5":
                self.change_settings()
            elif choice == "0":
                print("\n👋 お疲れ様でした！")
                break
    
    def change_settings(self):
        """設定変更"""
        print("\n⚙️ 設定")
        print("-" * 50)
        print(f"1日の上限: {self.data['settings']['daily_limit']}人")
        print(f"フォロー間隔: {self.data['settings']['follow_interval']}秒")
        
        if input("\n変更しますか？ (y/n): ").lower() == 'y':
            limit = input(f"1日の上限 (現在{self.data['settings']['daily_limit']}): ")
            if limit.isdigit():
                self.data['settings']['daily_limit'] = int(limit)
            
            interval = input(f"フォロー間隔（秒） (現在{self.data['settings']['follow_interval']}): ")
            if interval.isdigit():
                self.data['settings']['follow_interval'] = int(interval)
            
            self.save_data()
            print("✅ 設定を保存しました")

if __name__ == "__main__":
    assistant = SafeFollowAssistant()
    assistant.main_menu()