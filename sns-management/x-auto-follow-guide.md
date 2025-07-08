# ⚠️ X自動フォローについて

## 🚨 重要な注意事項

### Xの利用規約違反リスク
- 自動フォローは規約違反の可能性大
- アカウント凍結のリスク
- 最悪の場合、永久BAN

### 安全な代替案
1. **半自動化**（推奨）
2. **フォローリスト作成ツール**
3. **手動フォロー補助ツール**

---

## 🔧 半自動フォロー補助ツール（安全）

検索結果からフォロー候補をリストアップし、
手動でフォローする際の効率を上げるツール。

```python
# follow-assistant.py
import webbrowser
import time
from datetime import datetime

class FollowAssistant:
    def __init__(self):
        self.follow_list = []
        
    def search_keywords(self):
        """検索キーワードでブラウザを開く"""
        keywords = [
            "起業しました -RT",
            "開業しました",
            "LP 必要",
            "ホームページ 作りたい"
        ]
        
        print("🔍 以下のキーワードで検索ウィンドウを開きます：")
        for keyword in keywords:
            url = f"https://twitter.com/search?q={keyword}&f=live"
            print(f"\n検索: {keyword}")
            webbrowser.open(url)
            input("フォロー候補を見つけたらEnterキー...")
    
    def create_follow_list(self):
        """フォロー候補リストを作成"""
        print("\n📝 フォロー候補を入力（終了は空Enter）：")
        while True:
            username = input("@ユーザー名: ")
            if not username:
                break
            self.follow_list.append({
                "username": username,
                "added": datetime.now(),
                "followed": False
            })
    
    def execute_follows(self):
        """リストから順番にプロフィールを開く"""
        print(f"\n👥 {len(self.follow_list)}人のプロフィールを開きます")
        
        for user in self.follow_list:
            if not user["followed"]:
                url = f"https://twitter.com/{user['username']}"
                print(f"\n開く: {user['username']}")
                webbrowser.open(url)
                
                action = input("フォローした？ (y/n/skip): ")
                if action.lower() == 'y':
                    user["followed"] = True
                    time.sleep(30)  # 30秒待機
```

---

## 🤖 より安全な自動化アプローチ

### 1. フォロー候補の自動収集のみ

```python
# follow-research.py
def research_follow_targets():
    """フォロー対象をリサーチしてCSVに保存"""
    
    # APIを使わずにスクレイピングも避ける
    # 代わりに検索URLリストを生成
    
    search_queries = [
        ("起業家", "起業しました since:2024-01-01"),
        ("開業", "開業しました -RT"),
        ("見込み客", "LP 作りたい OR ホームページ 必要"),
    ]
    
    with open("follow_targets.csv", "w") as f:
        f.write("カテゴリ,検索URL,メモ\n")
        for category, query in search_queries:
            url = f"https://twitter.com/search?q={query}"
            f.write(f"{category},{url},手動で確認\n")
```

### 2. フォロー作業の記録

```python
# follow-tracker.py
class FollowTracker:
    def __init__(self):
        self.daily_limit = 20  # 1日の上限
        self.today_count = 0
        
    def can_follow(self):
        """フォロー可能かチェック"""
        if self.today_count >= self.daily_limit:
            print("⚠️ 本日の上限に達しました")
            return False
        return True
    
    def record_follow(self, username):
        """フォロー記録"""
        if self.can_follow():
            # 記録を保存
            self.today_count += 1
            print(f"✅ フォロー記録: {username} ({self.today_count}/{self.daily_limit})")
```

---

## 💡 推奨される運用方法

### 毎日のルーティン

1. **朝（5分）**
   - 検索ワードで新規開業者をチェック
   - 10人程度をリストアップ

2. **昼（10分）**
   - リストから5人フォロー
   - 各アカウントの投稿にいいね

3. **夜（10分）**
   - 残り5人をフォロー
   - フォローバックをチェック

### 週次レビュー

- フォロー/フォロワー比率
- エンゲージメント率
- 問い合わせ数

---

## ⚡ 効率化ツール（規約準拠）

### ブラウザ拡張機能
- **Twitter Lists Manager** - リスト管理
- **TweetDeck** - 複数カラムで効率化

### 外部ツール
- **Buffer** - 投稿スケジュール
- **Hootsuite** - ソーシャル管理

---

## 🛡️ アカウント保護のために

### やってはいけないこと
- ❌ 1日50人以上のフォロー
- ❌ 連続的な高速フォロー
- ❌ 自動化ツールの使用
- ❌ フォロー後即アンフォロー

### 安全な運用
- ✅ 1日20人程度まで
- ✅ 人間らしい間隔
- ✅ プロフィールを読む
- ✅ 投稿に反応する

---

## 結論

完全自動化は高リスク。
半自動化で効率を上げながら、
人間らしい運用を心がけることが重要。

ビジネスアカウントを守りながら
着実にフォロワーを増やしましょう。