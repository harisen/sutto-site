# ペットリゾートWANCO デザインシステム

## カラーパレット

### プライマリーカラー
```css
--color-navy: #1e3a5f;        /* メインカラー（ネイビー） */
--color-navy-light: #2a4b75;  /* ライトネイビー */
--color-navy-dark: #142841;   /* ダークネイビー */
```

### アクセントカラー
```css
--color-gold: #d4af37;        /* ゴールド */
--color-gold-light: #e4c757;  /* ライトゴールド */
--color-gold-dark: #b4941f;   /* ダークゴールド */
```

### ベースカラー
```css
--color-white: #ffffff;
--color-beige: #f8f5f0;       /* 背景用ベージュ */
--color-light-gray: #f5f5f5;  /* ライトグレー */
--color-gray: #e0e0e0;        /* グレー */
```

### テキストカラー
```css
--color-text-primary: #333333;   /* 本文 */
--color-text-secondary: #666666; /* サブテキスト */
--color-text-light: #999999;    /* 薄いテキスト */
--color-text-inverse: #ffffff;  /* 反転テキスト */
```

## タイポグラフィ

### フォントファミリー
```css
--font-serif: 'Noto Serif JP', serif;        /* 見出し用 */
--font-sans: 'Noto Sans JP', sans-serif;     /* 本文用 */
--font-display: 'Montserrat', sans-serif;    /* 英字装飾用 */
```

### フォントサイズ
```css
/* Desktop */
--fs-hero: 60px;      /* ヒーローテキスト */
--fs-h1: 48px;        /* H1見出し */
--fs-h2: 36px;        /* H2見出し */
--fs-h3: 28px;        /* H3見出し */
--fs-h4: 24px;        /* H4見出し */
--fs-body: 16px;      /* 本文 */
--fs-small: 14px;     /* 小さいテキスト */
--fs-caption: 12px;   /* キャプション */

/* Mobile */
--fs-hero-sp: 40px;
--fs-h1-sp: 32px;
--fs-h2-sp: 28px;
--fs-h3-sp: 24px;
--fs-h4-sp: 20px;
--fs-body-sp: 14px;
--fs-small-sp: 12px;
```

### フォントウェイト
```css
--fw-light: 300;
--fw-normal: 400;
--fw-medium: 500;
--fw-bold: 700;
--fw-black: 900;
```

### 行間
```css
--lh-tight: 1.3;
--lh-normal: 1.7;
--lh-loose: 2.0;
```

## スペーシング

### 基本単位
```css
--spacing-unit: 8px;
--spacing-xs: 8px;    /* 1unit */
--spacing-sm: 16px;   /* 2unit */
--spacing-md: 24px;   /* 3unit */
--spacing-lg: 40px;   /* 5unit */
--spacing-xl: 64px;   /* 8unit */
--spacing-xxl: 120px; /* 15unit */
```

### セクション間隔
```css
--section-padding-desktop: 120px;
--section-padding-tablet: 80px;
--section-padding-mobile: 60px;
```

## レイアウト

### コンテナ
```css
--container-max-width: 1200px;
--container-padding: 20px;
```

### ブレークポイント
```css
--bp-mobile: 767px;
--bp-tablet: 1023px;
--bp-desktop: 1024px;
```

## シャドウ

```css
--shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-xl: 0 12px 48px rgba(0,0,0,0.20);
```

## アニメーション

### イージング
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### デュレーション
```css
--duration-fast: 200ms;
--duration-normal: 400ms;
--duration-slow: 600ms;
--duration-slower: 800ms;
--duration-slowest: 1200ms;
```

## コンポーネントスタイル

### ボタン
```css
/* プライマリーボタン */
.btn-primary {
  background: var(--color-gold);
  color: var(--color-white);
  padding: 16px 48px;
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  border-radius: 4px;
  transition: all var(--duration-normal) var(--ease-default);
}

/* セカンダリーボタン */
.btn-secondary {
  background: transparent;
  color: var(--color-navy);
  border: 2px solid var(--color-navy);
  padding: 14px 46px;
}
```

### カード
```css
.card {
  background: var(--color-white);
  border-radius: 8px;
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--ease-default);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

## GSAP アニメーション設定

### ScrollTrigger デフォルト
```javascript
ScrollTrigger.defaults({
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
  markers: false
});
```

### 共通アニメーション
```javascript
// フェードイン
const fadeIn = {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out"
};

// スケールイン
const scaleIn = {
  scale: 0.9,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
};

// スライドイン
const slideIn = {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
};
```

## アイコン

### 使用アイコン
- Feather Icons（線画アイコン）
- カスタムSVGアイコン（ペット関連）

### サイズ
```css
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
```

## 画像処理

### アスペクト比
```css
--ratio-16-9: 56.25%;
--ratio-4-3: 75%;
--ratio-1-1: 100%;
--ratio-3-2: 66.67%;
```

### フィルター
```css
--filter-overlay: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3));
--filter-gold: linear-gradient(rgba(212,175,55,0.2), rgba(212,175,55,0.2));
```