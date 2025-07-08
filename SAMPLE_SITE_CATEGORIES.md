# サンプルサイトカテゴリー分類ドキュメント

## カテゴリー一覧

### 1. 美容・健康 (beauty)
美容院、エステ、フィットネス、整体など健康・美容関連のサービス

**該当サンプル:**
- Hair Salon LUXE (美容院) - スタンダード版
- Hair Salon LUXE - リッチ版 ★
- フィットネスジム

### 2. 飲食 (food)
レストラン、カフェ、バー、中華料理店など飲食関連のサービス

**該当サンプル:**
- Italian Restaurant Dolce (イタリアン) - スタンダード版
- Restaurant Lumière - リッチ版 ★
- 中華料理 龍門

### 3. EC・健康食品 (ec)
健康食品、化粧品、サプリメントなどのECサイト

**該当サンプル:**
- 健康サプリメント販売 - スタンダード版
- AURORA オーガニックコスメ - リッチ版 ★
- 化粧品ブランド

### 4. イベント (event)
結婚式、パーティー、セミナー、アイドルイベントなど

**該当サンプル:**
- イベント告知LP
- アイドル診断ツール (リッチ版機能) ★
- 結婚式場

### 5. 士業・専門職 (professional)
税理士、弁護士、コンサルタントなど専門職サービス

**該当サンプル:**
- プロフェッショナルサービス
- 税理士事務所

### 6. ペット関連 (pet)
ペットホテル、トリミング、ペット用品など

**該当サンプル:**
- ペットリゾート - リッチ版 ★

## タグ付けルール

### data-category属性の設定方法

1. **スタンダード版**: 単一カテゴリー
   ```html
   data-category="beauty"
   ```

2. **リッチ版**: メインカテゴリー + "rich"
   ```html
   data-category="beauty rich"
   ```

3. **複数カテゴリーに該当する場合**: スペース区切りで記載
   ```html
   data-category="event rich"
   ```

## フィルターボタンの構成

```html
<button class="filter-btn active" data-filter="all">すべて</button>
<button class="filter-btn" data-filter="beauty">美容・健康</button>
<button class="filter-btn" data-filter="food">飲食</button>
<button class="filter-btn" data-filter="ec">EC・健康食品</button>
<button class="filter-btn" data-filter="event">イベント</button>
<button class="filter-btn" data-filter="professional">士業・専門職</button>
<button class="filter-btn" data-filter="pet">ペット関連</button>
<button class="filter-btn" data-filter="rich">リッチ版</button>
```

## 修正が必要な項目

1. **リッチ版のdata-category修正**
   - 現在: `data-category="beauty"` (例: リッチ版美容院)
   - 修正後: `data-category="beauty rich"`

2. **フィルター機能の動作確認**
   - JavaScriptでスペース区切りの複数カテゴリーに対応しているか確認
   - 必要に応じてフィルター処理を修正

## 更新日
2025年7月8日