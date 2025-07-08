#!/usr/bin/env python3
"""
アナリティクスダッシュボード
投稿パフォーマンスを可視化
"""

import json
import datetime
import os
from collections import defaultdict

class AnalyticsDashboard:
    def __init__(self):
        self.load_all_data()
    
    def load_all_data(self):
        """全てのデータを読み込み"""
        # 投稿履歴
        self.post_history = []
        history_files = ["daily_post_history.json", "semi_auto_history.json", "post_history.json"]
        
        for file in history_files:
            if os.path.exists(file):
                with open(file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if isinstance(data, list):
                        self.post_history.extend(data)
        
        # スケジューラーログ
        self.scheduler_logs = []
        if os.path.exists("scheduler_log.json"):
            with open("scheduler_log.json", 'r', encoding='utf-8') as f:
                self.scheduler_logs = json.load(f)
    
    def show_dashboard(self):
        """ダッシュボードを表示"""
        print("\n" + "=" * 70)
        print("📊 X投稿 アナリティクスダッシュボード")
        print("=" * 70)
        
        # 基本統計
        self.show_basic_stats()
        
        # 曜日別統計
        self.show_weekday_stats()
        
        # 時間帯別統計
        self.show_hourly_stats()
        
        # 最近の投稿
        self.show_recent_posts()
        
        # 推奨事項
        self.show_recommendations()
    
    def show_basic_stats(self):
        """基本統計を表示"""
        total_posts = len(self.post_history)
        
        # 期間を計算
        if self.post_history:
            dates = []
            for post in self.post_history:
                try:
                    if 'date' in post:
                        date = datetime.datetime.fromisoformat(post['date'])
                    elif 'timestamp' in post:
                        date = datetime.datetime.fromisoformat(post['timestamp'])
                    else:
                        continue
                    dates.append(date)
                except:
                    continue
            
            if dates:
                first_post = min(dates)
                last_post = max(dates)
                days = (last_post - first_post).days + 1
                posts_per_day = total_posts / days if days > 0 else 0
            else:
                days = 0
                posts_per_day = 0
        else:
            days = 0
            posts_per_day = 0
        
        print("\n【基本統計】")
        print(f"総投稿数: {total_posts}")
        print(f"運用期間: {days}日間")
        print(f"平均投稿数: {posts_per_day:.1f}投稿/日")
        
        # 投稿成功率
        posted = sum(1 for p in self.post_history if p.get('status') in ['posted', 'custom_posted'])
        cancelled = sum(1 for p in self.post_history if p.get('status') == 'cancelled')
        if total_posts > 0:
            success_rate = (posted / total_posts) * 100
            print(f"投稿成功率: {success_rate:.1f}% (成功: {posted}, キャンセル: {cancelled})")
    
    def show_weekday_stats(self):
        """曜日別統計を表示"""
        weekday_counts = defaultdict(int)
        
        for post in self.post_history:
            if 'weekday' in post:
                weekday_counts[post['weekday']] += 1
            elif 'date' in post or 'timestamp' in post:
                try:
                    date_str = post.get('date', post.get('timestamp'))
                    date = datetime.datetime.fromisoformat(date_str)
                    weekday = date.strftime('%A')
                    weekday_counts[weekday] += 1
                except:
                    continue
        
        if weekday_counts:
            print("\n【曜日別投稿数】")
            print("-" * 40)
            
            weekdays_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            weekdays_jp = {
                'Monday': '月曜日', 'Tuesday': '火曜日', 'Wednesday': '水曜日',
                'Thursday': '木曜日', 'Friday': '金曜日', 'Saturday': '土曜日', 'Sunday': '日曜日'
            }
            
            max_count = max(weekday_counts.values()) if weekday_counts else 1
            
            for weekday in weekdays_order:
                count = weekday_counts.get(weekday, 0)
                bar = "■" * int((count / max_count) * 20) if max_count > 0 else ""
                print(f"{weekdays_jp.get(weekday, weekday):8} {bar:20} {count:3}投稿")
    
    def show_hourly_stats(self):
        """時間帯別統計を表示"""
        hourly_counts = defaultdict(int)
        
        for post in self.post_history:
            try:
                date_str = post.get('date', post.get('timestamp'))
                if date_str:
                    date = datetime.datetime.fromisoformat(date_str)
                    hour = date.hour
                    hourly_counts[hour] += 1
            except:
                continue
        
        if hourly_counts:
            print("\n【時間帯別投稿数（上位5つ）】")
            print("-" * 40)
            
            sorted_hours = sorted(hourly_counts.items(), key=lambda x: x[1], reverse=True)[:5]
            
            for hour, count in sorted_hours:
                time_range = f"{hour:02d}:00-{hour:02d}:59"
                print(f"{time_range}: {count}投稿")
    
    def show_recent_posts(self):
        """最近の投稿を表示"""
        print("\n【最近の投稿（5件）】")
        print("-" * 70)
        
        # 日付でソート
        sorted_posts = []
        for post in self.post_history:
            try:
                date_str = post.get('date', post.get('timestamp'))
                if date_str:
                    date = datetime.datetime.fromisoformat(date_str)
                    sorted_posts.append((date, post))
            except:
                continue
        
        sorted_posts.sort(key=lambda x: x[0], reverse=True)
        
        for date, post in sorted_posts[:5]:
            tweet_preview = post.get('text', post.get('tweet', ''))[:50] + "..."
            status = post.get('status', 'unknown')
            print(f"{date.strftime('%m/%d %H:%M')} [{status:10}] {tweet_preview}")
    
    def show_recommendations(self):
        """推奨事項を表示"""
        print("\n【📌 推奨事項】")
        print("-" * 70)
        
        # 曜日別の推奨
        weekday_counts = defaultdict(int)
        for post in self.post_history:
            if 'weekday' in post:
                weekday_counts[post['weekday']] += 1
        
        if weekday_counts:
            best_day = max(weekday_counts.items(), key=lambda x: x[1])[0]
            worst_day = min(weekday_counts.items(), key=lambda x: x[1])[0]
            
            print(f"• 最も投稿が多い曜日: {best_day} → この曜日の投稿を継続")
            print(f"• 最も投稿が少ない曜日: {worst_day} → 投稿を増やす余地あり")
        
        # 時間帯の推奨
        hourly_counts = defaultdict(int)
        for post in self.post_history:
            try:
                date_str = post.get('date', post.get('timestamp'))
                if date_str:
                    date = datetime.datetime.fromisoformat(date_str)
                    hour = date.hour
                    hourly_counts[hour] += 1
            except:
                continue
        
        if hourly_counts:
            best_hour = max(hourly_counts.items(), key=lambda x: x[1])[0]
            print(f"• 最も投稿が多い時間帯: {best_hour}時台 → この時間帯が習慣化されている")
        
        # 全般的な推奨
        print("\n• 投稿の継続性を保つため、自動スケジューラーの活用を推奨")
        print("• 週3-4回の投稿でも十分な効果が期待できます")
        print("• 反応の良い投稿を分析し、類似コンテンツを増やしましょう")
    
    def export_report(self):
        """レポートをファイルに出力"""
        filename = f"analytics_report_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        
        # 標準出力を一時的にファイルにリダイレクト
        import sys
        original_stdout = sys.stdout
        
        with open(filename, 'w', encoding='utf-8') as f:
            sys.stdout = f
            self.show_dashboard()
            sys.stdout = original_stdout
        
        print(f"\n📄 レポートを保存しました: {filename}")

def main():
    dashboard = AnalyticsDashboard()
    
    print("\n" + "=" * 60)
    print("📊 X投稿 アナリティクス")
    print("=" * 60)
    print("\n1. ダッシュボードを表示")
    print("2. レポートをファイルに出力")
    print("3. 終了")
    
    choice = input("\n選択してください (1-3): ")
    
    if choice == '1':
        dashboard.show_dashboard()
        input("\nEnterキーで終了...")
    elif choice == '2':
        dashboard.show_dashboard()
        dashboard.export_report()

if __name__ == "__main__":
    main()