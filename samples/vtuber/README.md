# VTuber Sample Site - 如月アストラ (Astra Kisaragi)

## 概要
歌唱型自律アンドロイドVTuber「如月アストラ」のサンプルサイトです。
GSAPアニメーション、パララックス効果、インタラクティブな要素を含むリッチ版デザインです。

## 必要な画像ファイル

以下の画像を `/samples/vtuber/images/` フォルダに配置してください：

### キャラクター画像（透過PNG推奨）
- `astra-main.png` - メインビジュアル（立ち絵）
- `astra-happy.png` - 喜び表情
- `astra-surprised.png` - 驚き表情
- `astra-wink.png` - ウインク表情
- `astra-cool.png` - クール表情
- `astra-singing.png` - 歌唱中表情
- `astra-sd.png` - SDキャラ版

### ロゴ・背景
- `logo.png` - 「如月アストラ」ロゴ
- `bg-cyber.jpg` - サイバー都市背景（1920x1080以上推奨）
- `bg-pattern.png` - 星やデジタルパターン素材

### 配信サムネイル（16:9比率）
- `thumbnail-1.jpg` - 歌枠サムネイル
- `thumbnail-2.jpg` - ゲーム実況サムネイル
- `thumbnail-3.jpg` - 雑談枠サムネイル
- `thumbnail-4.jpg` - オリジナル曲サムネイル

### OGP画像
- `og-image.jpg` - SNSシェア用画像（1200x630px）

## 画像がない場合

画像ファイルがない場合は、以下のプレースホルダーを使用できます：

1. **Placehold.jp**を使用：
   ```html
   <img src="https://placehold.jp/00D4FF/FFFFFF/400x600.png?text=Astra" alt="如月アストラ">
   ```

2. **Placeholder.com**を使用：
   ```html
   <img src="https://via.placeholder.com/400x600/00D4FF/FFFFFF?text=Astra" alt="如月アストラ">
   ```

## カスタマイズ方法

### カラーテーマの変更
`index.html`内のCSS変数を編集：
```css
:root {
    --primary-color: #00D4FF;    /* メインカラー（シアン） */
    --secondary-color: #FF00FF;   /* セカンダリカラー（マゼンタ） */
    --accent-color: #FFD700;      /* アクセントカラー（ゴールド） */
}
```

### アニメーション速度の調整
GSAPアニメーションのdurationパラメータを変更：
```javascript
gsap.to('.hero-title', {
    opacity: 1,
    duration: 1,  // この値を変更（秒単位）
});
```

## 機能一覧

- ✅ ローディングアニメーション
- ✅ パララックス背景
- ✅ 表情変化システム（5秒ごと）
- ✅ スクロールトリガーアニメーション
- ✅ グリッチテキストエフェクト
- ✅ ホバーエフェクト
- ✅ レスポンシブデザイン
- ✅ パーティクルエフェクト

## 追加予定の機能

- チャットボックス（AIアシスタント風）
- ファンアートギャラリー
- ミュージックプレイヤー
- グッズ購入リンク
- 配信カレンダー連携

## ライセンス

このサンプルサイトは架空のVTuber用のデモンストレーションです。
商用利用の際は、各素材のライセンスをご確認ください。