# 動画コンテンツの代替について

## 概要
ペットリゾートWANCO様のランディングページでは、動画素材が準備されていない場合の代替として、高品質な画像を使用したスライドショーを実装しています。

## 実装内容

### 動画代替スライドショー
- **位置**: 施設案内セクションとサービスセクションの間
- **サイズ**: デスクトップ 1920x600px / モバイル 全幅x400px
- **画像枚数**: 4枚（自動切り替え）
- **切り替え効果**: フェードイン・フェードアウト
- **自動再生**: 4秒間隔

### 使用画像
1. ペットホテルの高級感ある雰囲気
2. 楽しそうに遊ぶペットの様子
3. プロフェッショナルなケアの様子
4. 快適に過ごす猫の様子

## 本番環境での置き換え方法

### 動画ファイルがある場合
```html
<!-- 現在のスライドショーセクションを以下に置き換え -->
<section class="video-section">
    <video autoplay muted loop playsinline class="video-background">
        <source src="videos/pet-resort-intro.mp4" type="video/mp4">
        <source src="videos/pet-resort-intro.webm" type="video/webm">
        <!-- フォールバック画像 -->
        <img src="images/video-poster.jpg" alt="ペットリゾートWANCO">
    </video>
    <div class="video-content">
        <h2 class="video-title">特別な体験を、大切な家族に</h2>
        <p class="video-text">WANCOでの1日をご紹介</p>
    </div>
</section>
```

### YouTube動画を使用する場合
```html
<section class="video-section">
    <div class="video-container">
        <iframe 
            src="https://www.youtube.com/embed/[動画ID]?autoplay=1&mute=1&loop=1&playlist=[動画ID]" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="video-content">
        <h2 class="video-title">特別な体験を、大切な家族に</h2>
        <p class="video-text">WANCOでの1日をご紹介</p>
    </div>
</section>
```

## スタイル調整

動画を使用する場合は、以下のCSSを追加してください：

```css
.video-section {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
}

.video-background {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: -1;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

## 推奨事項

1. **動画フォーマット**
   - MP4形式（H.264コーデック）
   - WebM形式（VP9コーデック）※互換性のため
   - 解像度: 1920x1080px推奨
   - ファイルサイズ: 10MB以下推奨

2. **アクセシビリティ**
   - 自動再生はミュート状態で
   - 動画の代替テキストを提供
   - 再生/停止ボタンの実装を検討

3. **パフォーマンス**
   - 動画の遅延読み込みを検討
   - モバイルでは静止画に切り替えることも検討

## お客様へのご案内

「現在、動画コンテンツの代わりに高品質な画像スライドショーを使用しております。動画素材をご用意いただければ、すぐに差し替えが可能です。動画制作のご相談も承っております。」

---

※このドキュメントは、動画素材が準備できた際の実装ガイドとしてご活用ください。