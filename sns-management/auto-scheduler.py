#!/usr/bin/env python3
"""
自動スケジューラー
指定時刻に投稿ウィンドウを自動で開く
"""

import schedule
import time
import datetime
import webbrowser
import json
import os
from plyer import notification  # pip install plyer

class AutoScheduler:
    def __init__(self):
        self.config_file = "scheduler_config.json"
        self.load_config()
        
    def load_config(self):
        """設定を読み込み"""
        if os.path.exists(self.config_file):
            with open(self.config_file, 'r', encoding='utf-8') as f:
                self.config = json.load(f)
        else:
            # デフォルト設定
            self.config = {
                "monday": {"time": "08:00", "enabled": True},
                "tuesday": {"time": "12:00", "enabled": True},
                "wednesday": {"time": "15:00", "enabled": True},
                "thursday": {"time": "19:00", "enabled": True},
                "friday": {"time": "17:00", "enabled": True},
                "saturday": {"time": "10:00", "enabled": False},
                "sunday": {"time": "11:00", "enabled": False},
                "notification_minutes": 5
            }
            self.save_config()
    
    def save_config(self):
        """設定を保存"""
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(self.config, f, ensure_ascii=False, indent=2)
    
    def send_notification(self, message):
        """デスクトップ通知を送信"""
        try:
            notification.notify(
                title='X投稿リマインダー',
                message=message,
                app_icon=None,
                timeout=10,
            )
        except:
            print(f"\n🔔 通知: {message}")
    
    def open_post_window(self, weekday):
        """投稿ウィンドウを開く"""
        # daily-post.pyから今日のツイートを取得
        from daily_post import DAILY_TWEETS
        
        weekday_jp = {
            'monday': '月曜日', 'tuesday': '火曜日', 'wednesday': '水曜日',
            'thursday': '木曜日', 'friday': '金曜日', 'saturday': '土曜日',
            'sunday': '日曜日'
        }
        
        tweets = DAILY_TWEETS.get(weekday_jp[weekday], [])
        if tweets:
            import urllib.parse
            tweet = tweets[0]  # 最初のツイートを使用
            encoded = urllib.parse.quote(tweet)
            url = f"https://twitter.com/intent/tweet?text={encoded}"
            
            print(f"\n🐦 {weekday_jp[weekday]}の投稿時間です！")
            print("-" * 60)
            print(tweet[:100] + "...")
            print("-" * 60)
            
            webbrowser.open(url)
            self.send_notification(f"{weekday_jp[weekday]}の投稿時間です！ブラウザを確認してください。")
            
            # 履歴に記録
            self.log_activity(weekday, "window_opened")
    
    def schedule_reminder(self, weekday):
        """リマインダーを送信"""
        minutes = self.config.get("notification_minutes", 5)
        self.send_notification(f"{minutes}分後に投稿時間です。準備してください。")
        print(f"\n⏰ {minutes}分後に投稿時間です！")
    
    def log_activity(self, weekday, action):
        """アクティビティをログに記録"""
        log_file = "scheduler_log.json"
        
        if os.path.exists(log_file):
            with open(log_file, 'r', encoding='utf-8') as f:
                logs = json.load(f)
        else:
            logs = []
        
        logs.append({
            "timestamp": datetime.datetime.now().isoformat(),
            "weekday": weekday,
            "action": action
        })
        
        # 最新100件のみ保持
        logs = logs[-100:]
        
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump(logs, f, ensure_ascii=False, indent=2)
    
    def setup_schedule(self):
        """スケジュールを設定"""
        weekdays = {
            'monday': schedule.every().monday,
            'tuesday': schedule.every().tuesday,
            'wednesday': schedule.every().wednesday,
            'thursday': schedule.every().thursday,
            'friday': schedule.every().friday,
            'saturday': schedule.every().saturday,
            'sunday': schedule.every().sunday
        }
        
        print("\n📅 スケジュール設定")
        print("=" * 60)
        
        for day, scheduler in weekdays.items():
            if self.config[day]["enabled"]:
                post_time = self.config[day]["time"]
                
                # 投稿時刻をスケジュール
                scheduler.at(post_time).do(self.open_post_window, day)
                
                # リマインダー時刻を計算
                hour, minute = map(int, post_time.split(':'))
                reminder_time = datetime.time(hour, minute)
                reminder_datetime = datetime.datetime.combine(datetime.date.today(), reminder_time)
                reminder_datetime -= datetime.timedelta(minutes=self.config["notification_minutes"])
                reminder_str = reminder_datetime.strftime("%H:%M")
                
                # リマインダーをスケジュール
                scheduler.at(reminder_str).do(self.schedule_reminder, day)
                
                print(f"{day.capitalize()}: {post_time} (リマインダー: {reminder_str})")
        
        print("=" * 60)
    
    def run(self):
        """スケジューラーを実行"""
        self.setup_schedule()
        
        print("\n🤖 自動スケジューラーが起動しました")
        print("終了するには Ctrl+C を押してください")
        
        try:
            while True:
                schedule.run_pending()
                
                # 次の実行時刻を表示
                next_run = schedule.next_run()
                if next_run:
                    remaining = (next_run - datetime.datetime.now()).total_seconds()
                    hours = int(remaining // 3600)
                    minutes = int((remaining % 3600) // 60)
                    
                    print(f"\r次の投稿: {hours}時間{minutes}分後", end="", flush=True)
                
                time.sleep(60)  # 1分ごとにチェック
                
        except KeyboardInterrupt:
            print("\n\n👋 スケジューラーを停止しました")
    
    def configure(self):
        """設定を変更"""
        print("\n⚙️  スケジュール設定")
        print("=" * 60)
        
        weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        weekdays_jp = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日']
        
        for i, (day, day_jp) in enumerate(zip(weekdays, weekdays_jp)):
            current = self.config[day]
            status = "有効" if current["enabled"] else "無効"
            print(f"\n{i+1}. {day_jp}: {current['time']} [{status}]")
        
        print("\n8. リマインダー時間: {}分前".format(self.config["notification_minutes"]))
        print("9. 保存して終了")
        print("0. キャンセル")
        
        choice = input("\n変更する項目を選択 (1-9, 0): ")
        
        if choice == '0':
            return
        elif choice == '9':
            self.save_config()
            print("✅ 設定を保存しました")
            return
        elif choice == '8':
            minutes = input("リマインダー時間（分）: ")
            if minutes.isdigit():
                self.config["notification_minutes"] = int(minutes)
        elif choice.isdigit() and 1 <= int(choice) <= 7:
            idx = int(choice) - 1
            day = weekdays[idx]
            
            print(f"\n{weekdays_jp[idx]}の設定:")
            time_str = input(f"投稿時刻 (現在: {self.config[day]['time']}): ")
            if time_str:
                self.config[day]['time'] = time_str
            
            enabled = input("有効にしますか？ (y/n): ")
            self.config[day]['enabled'] = enabled.lower() == 'y'
        
        # 再帰的に設定を続ける
        self.configure()

def main():
    scheduler = AutoScheduler()
    
    import sys
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "config":
            scheduler.configure()
        elif command == "run":
            scheduler.run()
        else:
            print("使用方法: python auto-scheduler.py [run|config]")
    else:
        print("\n" + "=" * 60)
        print("🤖 X投稿 自動スケジューラー")
        print("=" * 60)
        print("\n1. スケジューラーを起動")
        print("2. スケジュール設定を変更")
        print("3. 終了")
        
        choice = input("\n選択してください (1-3): ")
        
        if choice == '1':
            scheduler.run()
        elif choice == '2':
            scheduler.configure()

if __name__ == "__main__":
    main()