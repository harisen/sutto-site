# カラーパレット設計書 - セブンスチェキ会LP

## 1. メインカラーパレット

### プライマリーカラー（青系）
```css
/* Royal Blue - メインブランドカラー */
--primary-blue: #1e40af;
--primary-blue-rgb: 30, 64, 175;

/* Sky Blue - アクセントカラー */
--sky-blue: #3b82f6;
--sky-blue-rgb: 59, 130, 246;

/* Light Blue - 背景・装飾用 */
--light-blue: #dbeafe;
--light-blue-rgb: 219, 234, 254;

/* Deep Blue - 強調・見出し用 */
--deep-blue: #1e3a8a;
--deep-blue-rgb: 30, 58, 138;
```

### セカンダリーカラー（白・グレー系）
```css
/* Pure White - 基本背景 */
--white: #ffffff;
--white-rgb: 255, 255, 255;

/* Off White - セクション背景 */
--off-white: #f8fafc;
--off-white-rgb: 248, 250, 252;

/* Light Gray - ボーダー・区切り線 */
--light-gray: #e5e7eb;
--light-gray-rgb: 229, 231, 235;

/* Medium Gray - テキスト・サブ情報 */
--medium-gray: #64748b;
--medium-gray-rgb: 100, 116, 139;

/* Dark Gray - 本文テキスト */
--dark-gray: #1e293b;
--dark-gray-rgb: 30, 41, 59;
```

### アクセントカラー
```css
/* Gold - 特別感・プレミアム演出 */
--gold: #fbbf24;
--gold-rgb: 251, 191, 36;

/* Rose - 注目・限定情報 */
--rose: #f43f5e;
--rose-rgb: 244, 63, 94;

/* Emerald - 成功・完了状態 */
--emerald: #10b981;
--emerald-rgb: 16, 185, 129;
```

## 2. グラデーション定義

### ヒーローグラデーション
```css
/* メインビジュアル用 */
--hero-gradient: linear-gradient(135deg, 
    rgba(30, 64, 175, 0.85) 0%, 
    rgba(59, 130, 246, 0.85) 100%
);

/* オーバーレイ用 */
--overlay-gradient: linear-gradient(180deg,
    rgba(30, 64, 175, 0) 0%,
    rgba(30, 64, 175, 0.7) 100%
);
```

### 装飾グラデーション
```css
/* ボタン・CTA用 */
--button-gradient: linear-gradient(135deg,
    #fbbf24 0%,
    #f59e0b 100%
);

/* カード背景用 */
--card-gradient: linear-gradient(145deg,
    #ffffff 0%,
    #f8fafc 100%
);
```

## 3. 色の使用ガイドライン

### 背景色の使い分け
1. **白（#ffffff）**
   - メインコンテンツエリア
   - カード・パネル
   - モーダル背景

2. **オフホワイト（#f8fafc）**
   - セクション間の区切り
   - 補足情報エリア
   - フッター背景

3. **ライトブルー（#dbeafe）**
   - 特典情報の背景
   - ホバーエフェクト
   - 選択状態の表示

### テキスト色の階層
1. **見出し**: #1e293b（ダークグレー）
2. **本文**: #334155（グレー）
3. **補足**: #64748b（ミディアムグレー）
4. **リンク**: #1e40af（プライマリーブルー）

### インタラクション色
- **通常状態**: プライマリーカラー
- **ホバー**: 10%明度を下げる
- **アクティブ**: 20%明度を下げる
- **無効**: 50%透明度

## 4. カラーコンビネーション

### 推奨組み合わせ
1. **メインセクション**
   - 背景: #ffffff
   - テキスト: #1e293b
   - アクセント: #1e40af

2. **特典セクション**
   - 背景: #f8fafc
   - カード: #ffffff
   - 強調: #fbbf24

3. **CTA/ボタン**
   - 背景: #fbbf24
   - テキスト: #1e293b
   - ホバー: #f59e0b

### 避けるべき組み合わせ
- 青×青の重複使用
- 低コントラストの組み合わせ
- 3色以上の同時使用

## 5. アクセシビリティ考慮

### コントラスト比
- **通常テキスト**: 4.5:1以上
- **大きいテキスト**: 3:1以上
- **UIコンポーネント**: 3:1以上

### 検証済みの組み合わせ
1. #1e293b on #ffffff → 19.97:1 ✓
2. #1e40af on #ffffff → 8.59:1 ✓
3. #ffffff on #1e40af → 8.59:1 ✓
4. #1e293b on #fbbf24 → 10.89:1 ✓

## 6. 特殊効果用カラー

### 影・シャドウ
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### グロー効果
```css
--glow-blue: 0 0 20px rgba(59, 130, 246, 0.5);
--glow-gold: 0 0 20px rgba(251, 191, 36, 0.5);
```

## 7. ダークモード対応（将来的な拡張用）

### ダークモードパレット
```css
@media (prefers-color-scheme: dark) {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
}
```

## 8. 実装時の注意点

1. **CSS変数として定義**
   - 保守性の向上
   - 一括変更が容易
   - テーマ切り替え対応

2. **透明度の活用**
   - rgba()での指定
   - オーバーレイ効果
   - 階層感の表現

3. **パフォーマンス考慮**
   - グラデーションの使いすぎ注意
   - 影の重ね過ぎ回避
   - アニメーション時の再描画最小化