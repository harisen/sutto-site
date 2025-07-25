# 🚀 X（Twitter）運用 完全ガイド

## 📋 目次
1. [クイックスタート](#クイックスタート)
2. [日常運用](#日常運用)
3. [自動化設定](#自動化設定)
4. [分析と改善](#分析と改善)
5. [トラブルシューティング](#トラブルシューティング)

---

## 🎯 クイックスタート

### 今すぐ投稿したい場合

**方法1: 最も簡単**
```
post-manager.bat をダブルクリック
→ メニューで「1」を選択
```

**方法2: コマンド**
```bash
python daily-post.py
```

---

## 📅 日常運用

### 1. デイリー投稿システム

**post-manager.bat** - メインメニュー
- `1` 今日の投稿を実行
- `2` 週間スケジュールを確認
- `3` 投稿履歴を確認
- `4` カスタム投稿
- `5` 終了

### 2. 曜日別コンテンツ戦略

| 曜日 | 投稿内容 | 最適時間 | 目的 |
|------|----------|----------|------|
| 月曜 | 週初めの挨拶・Tips | 8:00 | 週の始まりに存在感 |
| 火曜 | お客様の声 | 12:00 | 信頼性構築 |
| 水曜 | 制作Tips | 15:00 | 価値提供 |
| 木曜 | サービス紹介 | 19:00 | 売上直結 |
| 金曜 | 週末前の案内 | 17:00 | 行動促進 |
| 土曜 | 特別企画 | 10:00 | エンゲージメント |
| 日曜 | LP講座 | 11:00 | 教育コンテンツ |

### 3. 投稿手順

1. **post-manager.bat** を起動
2. メニューから「1」を選択
3. 投稿内容を確認
4. 「y」でブラウザが開く
5. 「ポスト」ボタンをクリック

---

## 🤖 自動化設定

### 1. 自動スケジューラー

**初期設定**
```bash
python auto-scheduler.py config
```

**起動方法**
```
startup.bat をダブルクリック
```

**機能**
- 指定時刻に投稿ウィンドウを自動で開く
- 5分前にデスクトップ通知
- バックグラウンドで動作

### 2. スケジュール設定例

```
月曜 8:00 - 週初めの挨拶
木曜 19:00 - サービス紹介（重要）
土曜 10:00 - フォロー&RT企画
```

### 3. 自動化の注意点

- PCを起動したままにする必要あり
- スリープモードは無効に
- 通知を見逃さないよう音量ON

---

## 📊 分析と改善

### 1. アナリティクスダッシュボード

```bash
python analytics-dashboard.py
```

**確認できる項目**
- 総投稿数と成功率
- 曜日別投稿数
- 時間帯別投稿数
- 最近の投稿履歴
- 改善提案

### 2. 週間レポート

```bash
python weekly-report.py
```

**分析内容**
- 週間パフォーマンス
- 最適な投稿曜日
- エンゲージメント率

### 3. PDCAサイクル

1. **Plan**: 週間スケジュールを計画
2. **Do**: daily-post.pyで投稿
3. **Check**: analytics-dashboard.pyで分析
4. **Action**: 人気コンテンツを増やす

---

## 🔧 トラブルシューティング

### Q: ブラウザが開かない
```bash
# デフォルトブラウザを確認
# 手動でXにログインしておく
```

### Q: 文字化けする
```bash
# ファイルエンコーディングをUTF-8に
# VSCodeで開いて保存し直す
```

### Q: 投稿が反映されない
```
- X側の制限の可能性（1日の投稿数制限）
- 30分以上間隔を空けて再試行
```

### Q: 自動スケジューラーが動かない
```bash
# 必要なライブラリを再インストール
pip install schedule plyer
```

---

## 💡 成功のコツ

### 1. 継続性
- 最低週3回は投稿
- 同じ時間帯を狙う
- 習慣化が大切

### 2. コンテンツの質
- 価値提供を意識
- 押し売りは避ける
- 共感を生む内容

### 3. エンゲージメント
- リプライには必ず返信
- いいねは積極的に
- フォロワーとの対話

### 4. 分析と改善
- 週1回は分析
- 人気投稿をメモ
- 少しずつ調整

---

## 📱 運用フロー例

### 月曜日の朝
1. `post-manager.bat` を起動
2. 週初めの挨拶を投稿
3. 週間スケジュールを確認

### 木曜日の夜
1. 自動スケジューラーが通知
2. サービス紹介を投稿
3. 反応をチェック

### 日曜日の振り返り
1. `analytics-dashboard.py` で分析
2. 翌週の計画を立てる
3. 人気ツイートをメモ

---

## 🎉 まとめ

このシステムを使えば：
- ✅ 毎日違う内容を投稿できる
- ✅ 投稿を忘れない
- ✅ 効果を測定できる
- ✅ 継続的に改善できる

**今すぐ `post-manager.bat` から始めましょう！**