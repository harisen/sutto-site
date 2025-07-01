# Anime.js活用ガイドライン

## 目次
1. [アニメーション実装の禁止事項](#禁止事項)
2. [トンマナ（トーン＆マナー）の統一](#トンマナ)
3. [Anime.jsで実現可能な表現](#実現可能な表現)
4. [推奨される実装パターン](#推奨パターン)
5. [具体的な実装例](#実装例)

## 禁止事項

### 1. 過度なアニメーション
- **❌ 避けるべき例**
  - 画面全体が常に動いている
  - 複数の要素が同時に異なる方向に動く
  - 無限ループで注意を引き続けるアニメーション
  
- **理由**: ユーザーの集中力を奪い、本来の目的（コンバージョン）から逸らす

### 2. 読み込み速度を犠牲にする実装
- **❌ 避けるべき例**
  - 大量のSVGアニメーション
  - 高頻度でのDOM操作
  - モバイルで重いアニメーション
  
- **理由**: ページ表示速度の低下は直帰率を上げる

### 3. アクセシビリティを無視した実装
- **❌ 避けるべき例**
  - 点滅や激しい明滅
  - 必須情報をアニメーション後に表示
  - キーボード操作を妨げる動き
  
- **理由**: すべてのユーザーが快適に利用できなくなる

### 4. モバイルUXを考慮しない実装
- **❌ 避けるべき例**
  - ホバーエフェクトに依存した重要な機能
  - タッチ操作を妨げる動き
  - 画面外への要素の移動
  
- **理由**: モバイルユーザーの操作性が著しく低下

### 5. ブランドイメージにそぐわない演出
- **❌ 避けるべき例**
  - 高級ブランドでポップすぎるバウンス
  - 士業サイトでカジュアルすぎる動き
  - 医療系でふざけた印象を与える演出

## トンマナ

### アニメーションの基本原則
1. **目的を持った動き**
   - すべてのアニメーションに明確な意図を持たせる
   - 装飾ではなく、UX向上のツールとして使用

2. **一貫性のあるタイミング**
   ```javascript
   // 推奨されるduration設定
   const timings = {
     fast: 200,      // ホバーエフェクトなど
     normal: 400,    // 一般的な要素の表示
     slow: 600,      // 大きな要素の移動
     xslow: 800      // ページ遷移など
   };
   ```

3. **統一されたイージング**
   ```javascript
   // 推奨されるeasing設定
   const easings = {
     default: 'easeOutQuad',     // 一般的な動き
     entrance: 'easeOutExpo',    // 要素の登場
     exit: 'easeInQuad',         // 要素の退場
     bounce: 'easeOutElastic'    // 特別な演出（控えめに）
   };
   ```

4. **階層的な遅延**
   - 親要素から子要素へ
   - 上から下へ、左から右へ
   - 重要度の高いものから低いものへ

## 実現可能な表現

### 1. 基本的な動き
- **位置の変更**: translateX, translateY, translateZ
- **回転**: rotate, rotateX, rotateY, rotateZ
- **スケール**: scale, scaleX, scaleY
- **透明度**: opacity

### 2. 高度な表現
- **SVGパスアニメーション**: 線画の描画効果
- **モーフィング**: 形状の変形
- **スタガリング**: 複数要素の順次アニメーション
- **物理演算風**: バウンス、振り子運動

### 3. インタラクティブ表現
- **スクロール連動**: 視差効果、要素の出現
- **マウス追従**: カーソルに反応する要素
- **タッチ反応**: スワイプ、ピンチ操作への対応

## 推奨パターン

### 1. ファーストビューでの活用
```javascript
// ヒーローセクションの要素を順次表示
anime.timeline()
  .add({
    targets: '.hero-title',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutQuad'
  })
  .add({
    targets: '.hero-subtitle',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    easing: 'easeOutQuad'
  }, '-=400')
  .add({
    targets: '.hero-cta',
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 600,
    easing: 'easeOutBack'
  }, '-=200');
```

### 2. スクロールトリガー
```javascript
// Intersection Observerと組み合わせた実装
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: entry.target,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 600,
        easing: 'easeOutQuad'
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
```

### 3. マイクロインタラクション
```javascript
// CTAボタンのホバーエフェクト
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    anime({
      targets: btn,
      scale: 1.05,
      duration: 200,
      easing: 'easeOutQuad'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    anime({
      targets: btn,
      scale: 1,
      duration: 200,
      easing: 'easeOutQuad'
    });
  });
});
```

### 4. 数値カウントアップ
```javascript
// 実績数値のアニメーション
anime({
  targets: '.stat-number',
  innerHTML: [0, 1234],
  duration: 2000,
  easing: 'easeInOutExpo',
  round: 1,
  update: function(anim) {
    document.querySelector('.stat-number').innerHTML = 
      Math.floor(anim.animations[0].currentValue).toLocaleString();
  }
});
```

### 5. フォーム関連
```javascript
// フォーカス時のラベルアニメーション
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('focus', () => {
    anime({
      targets: input.previousElementSibling, // label
      translateY: -25,
      scale: 0.8,
      color: '#2563EB',
      duration: 300,
      easing: 'easeOutQuad'
    });
  });
});
```

## 実装例

### 効果的な実装の優先順位

#### 高優先度（必ず実装すべき）
1. **ページロード時のフェードイン**
   - ファーストビューの要素
   - 重要なCTAボタン

2. **スクロール時の要素出現**
   - 各セクションのタイトル
   - 特徴・メリットの説明

3. **CTAボタンのマイクロインタラクション**
   - ホバー時の軽微な拡大
   - クリック時のフィードバック

#### 中優先度（効果的な場合に実装）
1. **数値のカウントアップ**
   - 実績数、満足度
   - 料金表示

2. **画像のズーム効果**
   - ギャラリー、ポートフォリオ
   - ビフォーアフター

3. **アコーディオンメニュー**
   - FAQ
   - 詳細情報の展開

#### 低優先度（特別な演出として）
1. **パララックス効果**
   - 背景画像
   - 装飾的な要素

2. **SVGアニメーション**
   - ロゴアニメーション
   - アイコンの描画

3. **タイプライター効果**
   - キャッチコピー
   - 特別なメッセージ

## パフォーマンス最適化

### 1. アニメーションの間引き
```javascript
// モバイルでは簡略化
const isMobile = window.innerWidth < 768;
const animationConfig = {
  duration: isMobile ? 400 : 600,
  delay: isMobile ? 100 : 200,
  disabled: isMobile && window.matchMedia('(prefers-reduced-motion: reduce)').matches
};
```

### 2. will-changeの適切な使用
```css
/* アニメーション前に設定、終了後に削除 */
.animating {
  will-change: transform, opacity;
}
```

### 3. GPUアクセラレーション
```javascript
// transform3dを使用してGPUを活用
anime({
  targets: '.element',
  translateZ: 0, // GPU層に昇格
  translateY: -50,
  duration: 600
});
```

## まとめ

Anime.jsを効果的に活用するには：
1. **目的を明確に**：装飾ではなくUX向上のため
2. **控えめに実装**：少ないほど効果的
3. **パフォーマンス重視**：特にモバイルで
4. **アクセシビリティ考慮**：すべてのユーザーのために
5. **ブランドに合わせて**：トンマナの統一

これらのガイドラインに従うことで、ユーザビリティを損なわない、効果的なアニメーション実装が可能になります。