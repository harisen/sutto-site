# インタラクティブアニメーション活用ガイドライン

## 目次
1. [ライブラリ選定ガイド](#ライブラリ選定ガイド)
2. [アニメーション実装の禁止事項](#禁止事項)
3. [トンマナ（トーン＆マナー）の統一](#トンマナ)
4. [各ライブラリの特徴と使い分け](#ライブラリ比較)
5. [推奨される実装パターン](#推奨パターン)
6. [具体的な実装例](#実装例)
7. [パフォーマンス最適化](#パフォーマンス最適化)

## ライブラリ選定ガイド

### 🚀 推奨アニメーションライブラリ一覧

#### 1. **GSAP（GreenSock Animation Platform）**
- **特徴**: 業界標準、最高のパフォーマンス、豊富なプラグイン
- **ファイルサイズ**: 約50KB（コア）
- **学習コスト**: 中〜高
- **ライセンス**: 基本無料（商用利用可）、プラグインは有料
- **最適な用途**:
  - 複雑なタイムラインアニメーション
  - SVGモーフィング
  - スクロールトリガーアニメーション
  - 高度なパスアニメーション

#### 2. **Anime.js**
- **特徴**: 軽量、シンプルなAPI、十分な機能
- **ファイルサイズ**: 約17KB
- **学習コスト**: 低〜中
- **ライセンス**: MIT（完全無料）
- **最適な用途**:
  - 基本的なアニメーション全般
  - タイムラインアニメーション
  - SVGアニメーション
  - 数値カウントアップ

#### 3. **Framer Motion**
- **特徴**: React専用、宣言的API、ジェスチャー対応
- **ファイルサイズ**: 約60KB
- **学習コスト**: 中（React前提）
- **ライセンス**: MIT
- **最適な用途**:
  - Reactプロジェクト
  - ドラッグ＆ドロップ
  - ジェスチャーベースのインタラクション
  - レイアウトアニメーション

#### 4. **Lottie**
- **特徴**: After Effectsからのエクスポート、複雑なアニメーション
- **ファイルサイズ**: 約150KB
- **学習コスト**: 低（実装）/ 高（制作）
- **ライセンス**: Apache 2.0
- **最適な用途**:
  - イラストアニメーション
  - ローディングアニメーション
  - キャラクターアニメーション
  - ブランディング要素

#### 5. **Web Animations API**
- **特徴**: ネイティブAPI、追加ライブラリ不要
- **ファイルサイズ**: 0KB
- **学習コスト**: 中
- **ライセンス**: -
- **最適な用途**:
  - 単純なアニメーション
  - パフォーマンス重視の実装
  - 軽量プロジェクト

#### 6. **Three.js**
- **特徴**: 3D専門、WebGL利用
- **ファイルサイズ**: 約600KB
- **学習コスト**: 高
- **ライセンス**: MIT
- **最適な用途**:
  - 3Dビジュアライゼーション
  - インタラクティブ3Dコンテンツ
  - パーティクルエフェクト

#### 7. **Motion One**
- **特徴**: 超軽量、モダンAPI
- **ファイルサイズ**: 約3KB
- **学習コスト**: 低
- **ライセンス**: MIT
- **最適な用途**:
  - パフォーマンス最重視
  - 基本的なアニメーション
  - モバイルファースト

#### 8. **Tween.js**
- **特徴**: シンプル、軽量、基本機能のみ
- **ファイルサイズ**: 約8KB
- **学習コスト**: 低
- **ライセンス**: MIT
- **最適な用途**:
  - 単純な補間アニメーション
  - ゲーム開発
  - カスタムアニメーション

### 🎯 プロジェクト別推奨ライブラリ

| プロジェクトタイプ | 第一選択 | 第二選択 | 理由 |
|---|---|---|---|
| **LP（通常）** | Anime.js | GSAP | バランスが良く、実装が簡単 |
| **LP（高級感）** | GSAP | Lottie | 洗練された動きが作りやすい |
| **ECサイト** | Motion One | Web Animations API | 軽量でパフォーマンス重視 |
| **ポートフォリオ** | GSAP | Three.js | クリエイティブな表現が可能 |
| **コーポレート** | Anime.js | Motion One | 控えめで上品な動き |
| **イベント** | Lottie | GSAP | 華やかで印象的な演出 |

## 禁止事項

### 1. 過度なアニメーション
- **❌ 避けるべき例**
  - 画面全体が常に動いている
  - 複数の要素が同時に異なる方向に動く
  - 無限ループで注意を引き続けるアニメーション
  
- **理由**: ユーザーの集中力を奪い、本来の目的（コンバージョン）から逸らす

### 2. 読み込み速度を犠牲にする実装
- **❌ 避けるべき例**
  - 複数の大型ライブラリの同時使用
  - 大量のSVGアニメーション
  - 高頻度でのDOM操作
  
- **理由**: ページ表示速度の低下は直帰率を上げる

### 3. アクセシビリティを無視した実装
- **❌ 避けるべき例**
  - 点滅や激しい明滅
  - 必須情報をアニメーション後に表示
  - prefers-reduced-motionを無視
  
- **理由**: すべてのユーザーが快適に利用できなくなる

## トンマナ

### アニメーションの基本原則
1. **目的を持った動き**
   - すべてのアニメーションに明確な意図を持たせる
   - 装飾ではなく、UX向上のツールとして使用

2. **一貫性のあるタイミング**
   ```javascript
   // 統一されたduration設定
   const timings = {
     instant: 100,    // 即座の反応
     fast: 200,       // ホバーエフェクトなど
     normal: 400,     // 一般的な要素の表示
     slow: 600,       // 大きな要素の移動
     xslow: 800       // ページ遷移など
   };
   ```

3. **統一されたイージング**
   ```javascript
   // 推奨されるeasing設定
   const easings = {
     default: 'cubic-bezier(0.4, 0, 0.2, 1)',    // Material Design標準
     entrance: 'cubic-bezier(0, 0, 0.2, 1)',      // 要素の登場
     exit: 'cubic-bezier(0.4, 0, 1, 1)',          // 要素の退場
     bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' // 特別な演出
   };
   ```

## ライブラリ比較

### 実装例の比較

#### フェードイン実装

**GSAP:**
```javascript
gsap.to('.element', {
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: 'power2.out'
});
```

**Anime.js:**
```javascript
anime({
  targets: '.element',
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 600,
  easing: 'easeOutQuad'
});
```

**Web Animations API:**
```javascript
element.animate([
  { opacity: 0, transform: 'translateY(30px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 600,
  easing: 'ease-out',
  fill: 'forwards'
});
```

**Motion One:**
```javascript
animate('.element', {
  opacity: [0, 1],
  y: [30, 0]
}, {
  duration: 0.6,
  easing: 'ease-out'
});
```

## 推奨パターン

### 1. スクロールトリガーアニメーション

**GSAP (ScrollTrigger使用):**
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to('.element', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
});
```

**Anime.js + Intersection Observer:**
```javascript
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
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### 2. パララックス効果

**GSAP:**
```javascript
gsap.to('.parallax-bg', {
  yPercent: -50,
  ease: 'none',
  scrollTrigger: {
    trigger: '.parallax-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});
```

**Vanilla JS + CSS:**
```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.parallax-bg');
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});
```

### 3. SVGアニメーション

**Anime.js:**
```javascript
anime({
  targets: '.svg-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 2000,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});
```

**GSAP:**
```javascript
gsap.fromTo('.svg-path', 
  { strokeDasharray: '0 1000' },
  { 
    strokeDasharray: '1000 0',
    duration: 2,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
  }
);
```

### 4. 3Dトランスフォーム

**GSAP:**
```javascript
gsap.to('.card', {
  rotationY: 180,
  duration: 0.6,
  ease: 'back.out(1.7)',
  transformPerspective: 1000
});
```

**Three.js (簡易版):**
```javascript
// 3Dキューブの回転
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
```

### 5. テキストアニメーション

**GSAP (SplitText使用):**
```javascript
const split = new SplitText('.headline', { type: 'chars' });
gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  rotationX: -90,
  stagger: 0.02,
  duration: 0.5,
  ease: 'back.out(1.7)'
});
```

**Anime.js:**
```javascript
// 文字を分割してアニメーション
const text = document.querySelector('.headline');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

anime({
  targets: '.headline span',
  opacity: [0, 1],
  translateY: [20, 0],
  delay: anime.stagger(50),
  duration: 500
});
```

## 実装例

### 高度なインタラクション例

#### 1. マウス追従エフェクト
```javascript
// GSAP版
document.addEventListener('mousemove', (e) => {
  gsap.to('.cursor-follower', {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: 'power2.out'
  });
});
```

#### 2. ドラッグ可能な要素
```javascript
// GSAP Draggable
Draggable.create('.draggable', {
  type: 'x,y',
  bounds: '.container',
  inertia: true,
  onDrag: function() {
    console.log('Dragging...');
  }
});
```

#### 3. モーフィングアニメーション
```javascript
// GSAP MorphSVG
gsap.to('#shape1', {
  morphSVG: '#shape2',
  duration: 2,
  ease: 'power2.inOut',
  repeat: -1,
  yoyo: true
});
```

#### 4. パーティクルエフェクト
```javascript
// Three.js パーティクル
const particlesGeometry = new THREE.BufferGeometry();
const particlesCnt = 5000;
const posArray = new Float32Array(particlesCnt * 3);

for(let i = 0; i < particlesCnt * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 5;
}

particlesGeometry.setAttribute('position', 
  new THREE.BufferAttribute(posArray, 3)
);
```

## パフォーマンス最適化

### 1. ライブラリの選択と読み込み
```javascript
// 条件付き読み込み
if (window.innerWidth > 768) {
  // デスクトップのみ高度なアニメーション
  import('gsap').then(({ gsap }) => {
    // GSAPアニメーション
  });
} else {
  // モバイルは軽量な実装
  // CSS Transitionや Web Animations APIを使用
}
```

### 2. アニメーションの最適化
```javascript
// GPUアクセラレーション
.gpu-accelerated {
  will-change: transform;
  transform: translateZ(0);
}

// アニメーション終了後にwill-changeを削除
element.addEventListener('animationend', () => {
  element.style.willChange = 'auto';
});
```

### 3. パフォーマンス監視
```javascript
// FPS監視
let lastTime = performance.now();
let frames = 0;

function checkFPS() {
  frames++;
  const currentTime = performance.now();
  
  if (currentTime >= lastTime + 1000) {
    const fps = Math.round((frames * 1000) / (currentTime - lastTime));
    console.log(`FPS: ${fps}`);
    
    if (fps < 30) {
      // アニメーションを簡略化
      reduceAnimationComplexity();
    }
    
    frames = 0;
    lastTime = currentTime;
  }
  
  requestAnimationFrame(checkFPS);
}
```

### 4. レスポンシブ対応
```javascript
// デバイスに応じた最適化
const animationConfig = {
  mobile: {
    duration: 300,
    distance: 20,
    stagger: 50
  },
  tablet: {
    duration: 400,
    distance: 30,
    stagger: 30
  },
  desktop: {
    duration: 600,
    distance: 40,
    stagger: 20
  }
};

const getDeviceConfig = () => {
  if (window.innerWidth < 768) return animationConfig.mobile;
  if (window.innerWidth < 1024) return animationConfig.tablet;
  return animationConfig.desktop;
};
```

## ライブラリ選定フローチャート

```
スタート
│
├─ 3Dが必要？
│  └─ Yes → Three.js
│
├─ Reactプロジェクト？
│  └─ Yes → Framer Motion
│
├─ After Effectsデザイン有り？
│  └─ Yes → Lottie
│
├─ 複雑なタイムライン必要？
│  └─ Yes → GSAP
│
├─ 超軽量が必須？
│  └─ Yes → Motion One / Web Animations API
│
└─ 通常のWebアニメーション → Anime.js
```

## まとめ

### ライブラリ選定のポイント

1. **プロジェクト規模を考慮**
   - 小規模: Motion One, Web Animations API
   - 中規模: Anime.js
   - 大規模: GSAP

2. **チームのスキルセット**
   - 初級: Anime.js, Lottie
   - 中級: GSAP, Framer Motion
   - 上級: Three.js, カスタム実装

3. **パフォーマンス要件**
   - 最優先: Web Animations API, Motion One
   - バランス型: Anime.js
   - 機能優先: GSAP

4. **予算**
   - 無料のみ: Anime.js, Three.js, Web Animations API
   - 有料OK: GSAP (プラグイン)

5. **メンテナンス性**
   - 長期運用: GSAP, Anime.js（実績豊富）
   - 短期プロジェクト: どれでもOK

適切なライブラリを選択し、このガイドラインに従うことで、パフォーマンスとユーザビリティを両立した、効果的なインタラクティブ体験を実現できます。