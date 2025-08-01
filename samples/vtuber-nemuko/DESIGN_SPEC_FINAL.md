# 百実ねむこ VTuberサイト 最終デザイン仕様書

## 1. 確認済み画像素材と規格

### キャラクター素材
- **main.png** (1.2MB) - メイン立ち絵
- **sd_1.png** (328KB) - SDキャラ静止画
- **idle.gif** (58KB) - 待機モーション
- **walk_front.gif** (201KB) - 前向き歩行
- **walk_back.gif** (212KB) - 後ろ向き歩行

### ローディング素材
- **loading.gif** (511KB) - 回転するミニキャラ
- **loading_2.png** (266KB) - トランジション用

### ロゴ
- **logo_nemuko.png** (2.5MB) - メインロゴ

### 秋の装飾素材
- **autumn-leaves_1.png** (1.5MB) - 紅葉素材1
- **autumn-leaves_2.png** (1.6MB) - 紅葉素材2
- **ginkgo-leaf.png** (1.5MB) - イチョウの葉
- **yellow_leaf.png** (2.3MB) - 黄色い葉
- **autumn-pattern_1.jpg** (2.5MB) - 秋柄背景
- **particle-leaves.png** (1.6MB) - パーティクル用葉っぱ

### UI素材
- **acorn-bullet.png** (1.4MB) - どんぐりアイコン
- **clock-icon.png** (1.5MB) - 時計アイコン
- **speech-bubble.png** (1.4MB) - 吹き出し
- **divider-leaves.png** (2.1MB) - 葉っぱの区切り線

### 背景素材
- **warm-gradient.png** (1.6MB) - 暖色グラデーション

## 2. GSAPアニメーションを活用した楽しいサイトデザイン

### 全体コンセプト
「秋の森で遊ぶモモンガ」をテーマに、GSAPでインタラクティブで楽しい動きを実現

### メインアニメーション要素

#### 1. 特殊ローディング画面
```
フェーズ1: loading.gif（回転するミニキャラ）を中央に表示
フェーズ2: ローディング完了時、loading_2.pngが画面下から登場
フェーズ3: 画面全体を覆いながら上へ高速移動（ビュン！）
フェーズ4: メインコンテンツがフェードイン
```

#### 2. ミニキャラのインタラクティブ移動
```
- 画面内の好きな場所をクリック/タッチ
- キャラが自動で向きを判定（上方向→walk_back.gif、下方向→walk_front.gif）
- GSAPで滑らかに移動（イージング：power2.inOut）
- 到着後はidle.gifに切り替え
- 移動中は葉っぱのパーティクルが舞う
```

#### 3. ヒーローセクションの演出
```
- main.pngがふわふわ浮遊（GSAPのyoyo）
- 背景でautumn-leaves_1,2がパララックス
- logo_nemuko.pngが回転しながら登場
- 「ドーモ。」のテキストがタイプライター風に
```

#### 4. 秋の葉っぱエフェクト
```
- particle-leaves.pngを使った舞い散る葉っぱ
- スクロールに連動して葉っぱが舞う
- マウスホバーで葉っぱが避ける動き
```

#### 5. 定時配信カウントダウン
```
- clock-icon.pngが振り子のように揺れる
- 17時までの残り時間をリアルタイム表示
- 配信時間になると花吹雪エフェクト
```

#### 6. どんぐりコレクション（お遊び要素）
```
- 画面内に隠されたacorn-bullet.pngを探すミニゲーム
- 見つけるとポップアップアニメーション
- 全部集めると特別なメッセージ
```

### セクション別アニメーション

#### ヒーローセクション
- スクロールトリガーで要素が順番に登場
- 背景のautumn-pattern_1.jpgがゆっくり動く
- warm-gradient.pngでグラデーションオーバーレイ

#### プロフィールセクション
- speech-bubble.pngを使った吹き出しアニメーション
- テキストが順番にポップアップ
- divider-leaves.pngが左右から登場

#### 配信情報セクション
- カードがフリップアニメーションで登場
- ホバーで3D回転
- yellow_leafとginkgo-leafが装飾として舞う

### インタラクション詳細

#### マウスフォロワー
- 小さなどんぐりがマウスを追従
- クリック時にバウンドアニメーション

#### スクロールエフェクト
- セクション間でsmooth scrolling
- 要素がふわっと登場（fade + translateY）

#### ホバーエフェクト
- ボタン：押し込みアニメーション
- リンク：葉っぱが散るエフェクト
- 画像：拡大＋影の変化

### カラースキーム（確定）
```css
:root {
  --primary-orange: #FF8C00;
  --secondary-brown: #8B4513;
  --accent-gold: #FFD700;
  --bg-cream: #FFF8DC;
  --text-dark: #3D2817;
  --autumn-red: #DC143C;
  --leaf-green: #556B2F;
}
```

### レスポンシブ対応
- デスクトップ：フルアニメーション
- タブレット：一部アニメーションを軽量化
- モバイル：ミニキャラ移動は維持、パーティクルは削減

## 3. 実装優先順位

1. **必須機能**
   - ローディング画面の特殊演出
   - ミニキャラのインタラクティブ移動
   - 基本的なセクション構成

2. **重要機能**
   - 秋の葉っぱエフェクト
   - 定時配信アピール
   - スクロールアニメーション

3. **追加機能**
   - どんぐりコレクション
   - 高度なパーティクルエフェクト
   - インタラクティブな装飾

## 4. 技術仕様

### 使用ライブラリ
- GSAP Core
- GSAP ScrollTrigger
- GSAP TextPlugin
- GSAP MotionPath（オプション）

### パフォーマンス考慮
- 画像の遅延読み込み
- アニメーションのGPU最適化
- モバイルでの軽量版切り替え

これでGSAPアニメーションをふんだんに使った、楽しくてインタラクティブなサイトが実現できます！