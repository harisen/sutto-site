# GSAPアニメーション仕様書

## 概要
ペットリゾートWANCO LPにおけるGSAPアニメーションの詳細仕様書です。
高級感と洗練された動きを実現するため、控えめで上品なアニメーションを実装しています。

## アニメーション一覧

### 1. ローディングアニメーション

**タイミング**: ページ読み込み時
**duration**: 1.5秒

```javascript
// ローディングバーアニメーション
@keyframes loading-bar {
    0% { left: -100%; }
    100% { left: 100%; }
}
```

### 2. ヒーローセクション

**タイミング**: ローディング完了後（delay: 1.5秒）

| 要素 | プロパティ | 開始値 | 終了値 | duration | ease | delay |
|------|-----------|--------|--------|----------|------|-------|
| .hero-title-main | opacity, y | 0, 100px | 1, 0px | 1.2s | power3.out | 0s |
| .hero-title-sub | opacity, y | 0, 100px | 1, 0px | 1.2s | power3.out | -0.8s |
| .hero-description span | opacity, y | 0, 50px | 1, 0px | 0.8s | power2.out | stagger: 0.2s |
| .hero-actions .btn | scale, opacity | 0.8, 0 | 1, 1 | 0.6s | back.out(1.7) | stagger: 0.1s |
| .hero-scroll | opacity, y | 0, -20px | 1, 0px | 0.8s | power2.out | -0.2s |

### 3. スクロールトリガーアニメーション

**トリガー条件**: 要素が画面の80%位置に到達時

#### 3.1 ブランドステートメント
```javascript
gsap.from('.brand-statement-text', {
    scrollTrigger: { trigger: '.brand-statement', start: 'top 70%' },
    opacity: 0,
    y: 60,
    duration: 1.5,
    ease: "power3.out"
});
```

#### 3.2 Promise（3つの約束）
- **要素の出現**: y: 80px → 0px, stagger: 0.2s
- **アイコンバウンス**: scale: 1 → 1.1 → 1, yoyo効果

#### 3.3 セクションタイトル
- **テキスト出現**: y: 40px → 0px
- **下線アニメーション**: width: 0 → 60px

#### 3.4 サービスカード
```javascript
// スタガー効果で順番に出現
stagger: {
    amount: 0.6,
    from: "start"
}
```

### 4. パララックス効果

| 要素 | スクロール範囲 | 移動量 | scrub |
|------|--------------|--------|-------|
| ヒーロー画像 | top top → bottom top | yPercent: 30 | 1 |
| ブランドステートメント背景 | top bottom → bottom top | backgroundPosition | 1 |

### 5. ホバーアニメーション

#### 5.1 マグネティックボタン
```javascript
// マウスの位置に応じてボタンが追従
x: mouseX * 0.3
y: mouseY * 0.3
duration: 0.3
ease: "power2.out"
```

#### 5.2 サービスカード3D効果
- **回転**: rotationY: ±10deg, rotationX: ±10deg
- **視点**: transformPerspective: 1000

#### 5.3 画像ズーム
- **scale**: 1 → 1.1
- **duration**: 0.6s
- **ease**: power2.out

### 6. カウンターアニメーション

**対象**: 数値を含む要素
**duration**: 2秒
**イージング**: power2.out

```javascript
// 24時間体制 → 0から24までカウントアップ
gsap.to(counter, {
    target: 24,
    duration: 2,
    ease: "power2.out",
    onUpdate: function() {
        element.textContent = Math.round(this.targets()[0].target);
    }
});
```

### 7. テキストスプリットアニメーション

**対象**: セクションタイトル（日本語）
**効果**: 文字単位で分割してアニメーション

| プロパティ | 値 |
|-----------|-----|
| opacity | 0 → 1 |
| y | 20px → 0 |
| rotateX | -90deg → 0 |
| stagger | 0.02s |
| ease | back.out(1.7) |

### 8. 画像リビールアニメーション

**効果**: オーバーレイが左から右へスライドして画像を表示

```javascript
// オーバーレイのスケールアニメーション
gsap.to(overlay, {
    scaleX: 0,
    duration: 1.2,
    ease: "power3.inOut",
    transformOrigin: "left"
});
```

### 9. マウス追従パララックス

**対象**: ヒーローコンテンツ
**範囲**: ±20px
**遅延**: なし（リアルタイム）

```javascript
gsap.to('.hero-content', {
    x: mouseX * 20,
    y: mouseY * 20,
    duration: 1,
    ease: "power2.out"
});
```

## パフォーマンス最適化

### 1. will-change使用箇所
```css
.parallax { will-change: transform; }
.hover-lift { will-change: transform; }
```

### 2. ScrollTrigger最適化
- **markers**: false（本番環境）
- **invalidateOnRefresh**: 必要な要素のみ
- **once**: true（一度だけ実行するアニメーション）

### 3. タイムライン管理
```javascript
// 不要になったアニメーションの破棄
timeline.kill();

// ScrollTriggerのリフレッシュ
ScrollTrigger.refresh();
```

## デバイス別対応

### モバイル
- パララックス効果を軽減
- 複雑なアニメーションを簡略化
- タッチイベント対応

### タブレット
- デスクトップと同等のアニメーション
- タッチ対応の考慮

### reduced-motion対応
```css
@media (prefers-reduced-motion: reduce) {
    /* すべてのアニメーションを最小限に */
}
```

## アニメーション無効化

ユーザーがアニメーションを望まない場合：
```javascript
// すべてのScrollTriggerを無効化
ScrollTrigger.getAll().forEach(st => st.disable());

// GSAPグローバル設定
gsap.globalTimeline.pause();
```

## トラブルシューティング

| 問題 | 原因 | 解決方法 |
|------|------|----------|
| カクつき | 複雑なセレクタ | クラス直接指定 |
| 動作しない | 要素の高さが0 | 明示的な高さ指定 |
| メモリリーク | タイムライン未破棄 | kill()で破棄 |
| 位置ズレ | リサイズ未対応 | ScrollTrigger.refresh() |

## メンテナンス

### アニメーション速度の調整
`duration`値を変更してアニメーション速度を調整

### イージングの変更
```javascript
// 利用可能なイージング
ease: "power1.out"  // 弱い
ease: "power2.out"  // 標準
ease: "power3.out"  // 強い
ease: "power4.out"  // とても強い
ease: "back.out(1.7)"  // バウンス
ease: "elastic.out(1, 0.3)"  // 弾性
```

### 新規アニメーションの追加
1. `animations.js`に関数を追加
2. 適切なタイミングで初期化
3. パフォーマンステスト実施