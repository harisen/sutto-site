# タイポグラフィ設計書 - セブンスチェキ会LP

## 1. フォントファミリー選定

### 見出し用フォント
**Montserrat** + **Noto Sans JP**
- 英語: Montserrat（Google Fonts）
- 日本語: Noto Sans JP（Google Fonts）
- 特徴: モダンで力強い印象、高い視認性
- 用途: ヒーロータイトル、セクション見出し、重要な数字

### 本文用フォント
**Inter** + **Noto Sans JP**
- 英語: Inter（Google Fonts）
- 日本語: Noto Sans JP（Google Fonts）
- 特徴: 読みやすく、デジタル環境に最適化
- 用途: 本文、説明文、補足情報

### アクセントフォント
**Bebas Neue**
- 英語のみ: Bebas Neue（Google Fonts）
- 特徴: インパクトのある大文字フォント
- 用途: 価格表示、カウントダウン、特別な強調

## 2. フォントサイズシステム

### デスクトップ（1024px以上）
```css
/* 見出しサイズ */
--fs-hero: clamp(48px, 8vw, 96px);      /* ヒーロータイトル */
--fs-h1: 48px;                          /* 大見出し */
--fs-h2: 36px;                          /* 中見出し */
--fs-h3: 28px;                          /* 小見出し */
--fs-h4: 24px;                          /* 極小見出し */

/* 本文サイズ */
--fs-xl: 20px;                          /* 大きめ本文 */
--fs-lg: 18px;                          /* 標準本文 */
--fs-base: 16px;                        /* 基本サイズ */
--fs-sm: 14px;                          /* 小さめ本文 */
--fs-xs: 12px;                          /* 極小テキスト */

/* 特殊サイズ */
--fs-price: 64px;                       /* 価格表示 */
--fs-number: 56px;                      /* 大きな数字 */
```

### モバイル（768px以下）
```css
/* 見出しサイズ */
--fs-hero: clamp(32px, 10vw, 48px);
--fs-h1: 32px;
--fs-h2: 28px;
--fs-h3: 24px;
--fs-h4: 20px;

/* 本文サイズ */
--fs-xl: 18px;
--fs-lg: 16px;
--fs-base: 15px;
--fs-sm: 14px;
--fs-xs: 12px;

/* 特殊サイズ */
--fs-price: 48px;
--fs-number: 40px;
```

## 3. フォントウェイト

### Montserrat / Noto Sans JP
- 300: Light（補足情報）
- 400: Regular（本文）
- 500: Medium（小見出し）
- 700: Bold（見出し）
- 900: Black（ヒーロー）

### Inter
- 400: Regular（本文）
- 500: Medium（強調）
- 600: SemiBold（ボタン）
- 700: Bold（重要情報）

## 4. 行間・文字間設定

### 行間（line-height）
```css
/* 見出し */
--lh-tight: 1.2;    /* タイトル・見出し */
--lh-snug: 1.4;     /* サブタイトル */
--lh-normal: 1.6;   /* 標準 */
--lh-relaxed: 1.8;  /* 本文 */
--lh-loose: 2.0;    /* 読みやすさ重視 */
```

### 文字間（letter-spacing）
```css
/* 文字間隔 */
--ls-tighter: -0.02em;  /* 見出し英語 */
--ls-tight: -0.01em;    /* 見出し日本語 */
--ls-normal: 0;         /* 標準 */
--ls-wide: 0.02em;     /* 本文 */
--ls-wider: 0.05em;    /* 強調 */
--ls-widest: 0.1em;    /* 大文字表記 */
```

## 5. タイポグラフィ階層

### レベル1: ヒーローセクション
```css
.hero-title {
    font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
    font-size: var(--fs-hero);
    font-weight: 900;
    line-height: var(--lh-tight);
    letter-spacing: var(--ls-tight);
    text-transform: uppercase; /* 英語のみ */
}
```

### レベル2: セクション見出し
```css
.section-title {
    font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
    font-size: var(--fs-h1);
    font-weight: 700;
    line-height: var(--lh-snug);
    letter-spacing: var(--ls-tight);
}
```

### レベル3: サブ見出し
```css
.sub-title {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: var(--fs-h3);
    font-weight: 500;
    line-height: var(--lh-normal);
    letter-spacing: var(--ls-normal);
}
```

### レベル4: 本文
```css
.body-text {
    font-family: 'Inter', 'Noto Sans JP', sans-serif;
    font-size: var(--fs-base);
    font-weight: 400;
    line-height: var(--lh-relaxed);
    letter-spacing: var(--ls-wide);
}
```

## 6. 特殊なタイポグラフィ

### 価格表示
```css
.price-display {
    font-family: 'Bebas Neue', 'Montserrat', sans-serif;
    font-size: var(--fs-price);
    font-weight: 700;
    letter-spacing: var(--ls-wider);
    /* 数字の等幅表示 */
    font-variant-numeric: tabular-nums;
}
```

### CTAボタン
```css
.cta-text {
    font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
    font-size: var(--fs-lg);
    font-weight: 700;
    letter-spacing: var(--ls-widest);
    text-transform: uppercase;
}
```

### 日付・時間
```css
.datetime {
    font-family: 'Inter', sans-serif;
    font-size: var(--fs-base);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
}
```

## 7. 読みやすさの配慮

### 最適な行長
- デスクトップ: 60-80文字/行
- モバイル: 30-40文字/行

### コントラスト
- 本文: #1e293b on #ffffff (19.97:1)
- 見出し: #1e40af on #ffffff (8.59:1)
- 補足: #64748b on #ffffff (7.03:1)

### 余白設定
```css
/* 段落間 */
--spacing-paragraph: 1.5em;

/* セクション間 */
--spacing-section: 4rem;

/* 要素間 */
--spacing-element: 2rem;
```

## 8. レスポンシブ対応

### ブレークポイント別調整
```css
/* タブレット (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
    :root {
        --fs-hero: clamp(40px, 7vw, 64px);
        --fs-h1: 40px;
        --fs-h2: 32px;
    }
}

/* 大画面 (1440px以上) */
@media (min-width: 1440px) {
    :root {
        --fs-base: 18px;
        --fs-lg: 20px;
        --fs-xl: 24px;
    }
}
```

## 9. 実装コード例

### Google Fonts読み込み
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Montserrat:wght@300;400;500;700;900&family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

### CSS初期設定
```css
body {
    font-family: 'Inter', 'Noto Sans JP', -apple-system, 
                 BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: var(--fs-base);
    line-height: var(--lh-relaxed);
    letter-spacing: var(--ls-wide);
    font-feature-settings: 'palt' 1; /* 日本語の文字詰め */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```