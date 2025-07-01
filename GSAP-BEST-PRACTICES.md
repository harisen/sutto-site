# GSAP制作ベストプラクティスガイド

## 概要
このドキュメントは、test-rich.htmlの実装を基に、GSAPを使用したリッチなWebサイト制作における留意点、ベストプラクティス、制作フローをまとめたものです。

## 1. GSAP使用時の留意点

### 1.1 パフォーマンス最適化
- **ScrollTriggerの適切な使用**
  - `scrub`の値は必要最小限に（1-3が推奨）
  - 大量の要素には`batch`メソッドを活用
  - `invalidateOnRefresh`でリサイズ時の再計算を制御

- **アニメーション対象の選定**
  - transformプロパティ（x, y, scale, rotation）を優先使用
  - widthやheightの直接アニメーションは避ける
  - GPUアクセラレーションが効くプロパティを選ぶ

- **メモリ管理**
  - 不要になったアニメーションは`kill()`で破棄
  - ScrollTriggerは`ScrollTrigger.refresh()`で更新
  - 大量のTimelineは再利用を検討

### 1.2 ブラウザ互換性
- **必須の設定**
  ```javascript
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  gsap.config({nullTargetWarn: false});
  ```

- **CSSの前処理**
  ```css
  /* ベンダープレフィックス対応 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ```

### 1.3 アクセシビリティ
- `prefers-reduced-motion`への対応
- キーボードナビゲーションの確保
- スクリーンリーダー対応のARIA属性

## 2. 避けるべきアンチパターン

### 2.1 パフォーマンス関連
❌ **避けるべき例**
```javascript
// 毎フレーム計算される重い処理
gsap.to('.element', {
  x: () => Math.random() * 100,
  repeat: -1
});

// 大量の個別アニメーション
document.querySelectorAll('.item').forEach(item => {
  gsap.to(item, {duration: 1, y: 100});
});
```

✅ **推奨例**
```javascript
// 事前計算された値を使用
const randomX = Math.random() * 100;
gsap.to('.element', {x: randomX, repeat: -1});

// バッチ処理を使用
gsap.to('.item', {
  duration: 1,
  y: 100,
  stagger: 0.1
});
```

### 2.2 ScrollTrigger関連
❌ **避けるべき例**
```javascript
// ネストされたScrollTrigger
ScrollTrigger.create({
  trigger: '.parent',
  onUpdate: () => {
    ScrollTrigger.create({...}); // 内部で作成
  }
});

// 過度なscrub値
scrub: 0.1 // 負荷が高い
```

✅ **推奨例**
```javascript
// フラットな構造
ScrollTrigger.batch('.items', {...});

// 適切なscrub値
scrub: 1 // または true
```

### 2.3 メモリリーク
❌ **避けるべき例**
```javascript
// イベントリスナーの解除忘れ
window.addEventListener('resize', updateAnimation);

// Timelineの再作成
function animate() {
  const tl = gsap.timeline(); // 毎回新規作成
}
```

✅ **推奨例**
```javascript
// クリーンアップ処理
const handleResize = () => updateAnimation();
window.addEventListener('resize', handleResize);
// 破棄時
window.removeEventListener('resize', handleResize);

// Timelineの再利用
const tl = gsap.timeline({paused: true});
function animate() {
  tl.restart();
}
```

## 3. トンマナ統一ガイドライン

### 3.1 アニメーション原則
- **一貫性のあるイージング**
  - 基本: `power2.out`
  - 強調: `power4.out`
  - バウンス系: `elastic.out(1, 0.3)`
  
- **タイミング標準**
  - 短い動き: 0.3-0.5秒
  - 通常の動き: 0.8-1.2秒
  - 演出的な動き: 1.5-2秒

- **ディレイとスタガー**
  - stagger基本値: 0.1-0.2秒
  - セクション間delay: 0.3-0.5秒

### 3.2 ビジュアル統一
```javascript
// 共通設定オブジェクト
const animationConfig = {
  ease: {
    default: 'power2.out',
    emphatic: 'power4.out',
    bounce: 'elastic.out(1, 0.3)'
  },
  duration: {
    fast: 0.3,
    normal: 1,
    slow: 2
  },
  stagger: {
    default: 0.1,
    cards: 0.2
  }
};
```

### 3.3 インタラクション規則
- **ホバーエフェクト**: 0.3秒のトランジション
- **クリック反応**: 即座に反応（0.1秒以内）
- **スクロール連動**: smoothかつ予測可能な動き

## 4. ブラッシュアップ方法

### 4.1 パフォーマンス向上
1. **Chrome DevToolsでの分析**
   - Performance記録でフレームレート確認
   - メモリ使用量の監視
   - レンダリング最適化の確認

2. **will-changeの適切な使用**
   ```css
   .animated-element {
     will-change: transform;
   }
   /* アニメーション終了後は削除 */
   ```

3. **画像最適化**
   - WebP形式の採用
   - 適切なサイズでの配信
   - loading="lazy"の活用

### 4.2 UX向上施策
1. **マイクロインタラクション追加**
   - ボタンのホバーフィードバック
   - フォーム入力時のアニメーション
   - エラー/成功時のビジュアルフィードバック

2. **プログレッシブエンハンスメント**
   - 基本機能はCSSで実装
   - GSAPは追加の演出として
   - フォールバック対応

3. **ローディング体験の向上**
   ```javascript
   // スケルトンスクリーンの実装
   gsap.timeline()
     .to('.skeleton', {opacity: 0, duration: 0.5})
     .from('.content', {opacity: 0, y: 20}, '-=0.3');
   ```

## 5. 最適な制作フロー

### 5.1 企画・設計フェーズ
1. **アニメーション設計書作成**
   - 各要素の動きを言語化
   - タイミングチャート作成
   - インタラクションマップ

2. **パフォーマンスバジェット設定**
   - 目標FPS: 60fps維持
   - 初期表示: 3秒以内
   - インタラクション反応: 100ms以内

### 5.2 実装フェーズ
1. **段階的実装**
   - Step 1: 静的HTML/CSS構築
   - Step 2: 基本的なGSAPアニメーション
   - Step 3: ScrollTrigger統合
   - Step 4: 詳細な調整

2. **コンポーネント化**
   ```javascript
   // アニメーションモジュール化
   class HeroAnimation {
     constructor(element) {
       this.element = element;
       this.init();
     }
     
     init() {
       this.timeline = gsap.timeline();
       // アニメーション定義
     }
     
     play() { this.timeline.play(); }
     pause() { this.timeline.pause(); }
   }
   ```

### 5.3 テスト・最適化フェーズ
1. **クロスブラウザテスト**
   - Chrome, Firefox, Safari, Edge
   - iOS Safari, Android Chrome
   - 各ブレークポイントでの確認

2. **パフォーマンステスト**
   - Lighthouse指標の確認
   - 実機での動作確認
   - 低スペック環境での検証

3. **A/Bテスト準備**
   - アニメーション有無の比較
   - 異なるタイミングの検証

## 6. 仕様書テンプレート

### 6.1 プロジェクト概要
```markdown
## プロジェクト名: [プロジェクト名]
## 制作期間: [開始日] - [終了日]
## 対象デバイス: PC / SP / Tablet
## 対応ブラウザ: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
```

### 6.2 アニメーション仕様
```markdown
## セクション: [セクション名]

### トリガー条件
- 種類: Scroll / Click / Hover / Load
- 詳細: [具体的な条件]

### アニメーション内容
| 要素 | プロパティ | 開始値 | 終了値 | duration | ease | delay |
|------|-----------|--------|--------|----------|------|-------|
| .title | opacity | 0 | 1 | 1s | power2.out | 0s |
| .title | y | 50px | 0px | 1s | power2.out | 0s |

### 特記事項
- [特殊な挙動や注意点]
```

### 6.3 技術仕様
```markdown
## 使用ライブラリ
- GSAP Core: v3.12.5
- ScrollTrigger: v3.12.5
- TextPlugin: v3.12.5 (必要に応じて)

## カスタム設定
- ScrollTrigger.defaults: `{markers: false}`
- gsap.defaults: `{ease: "power2.out"}`

## パフォーマンス目標
- FPS: 60fps維持
- LCP: 2.5秒以内
- CLS: 0.1以下
```

### 6.4 納品物リスト
```markdown
## 納品ファイル
- [ ] HTML files
- [ ] CSS files  
- [ ] JavaScript files
- [ ] 画像素材（最適化済み）
- [ ] アニメーション仕様書
- [ ] 実装ガイド

## ドキュメント
- [ ] コード規約書
- [ ] メンテナンスガイド
- [ ] トラブルシューティング
```

## 7. メンテナンス・運用

### 7.1 定期メンテナンス
- GSAPバージョンアップ対応
- ブラウザ新機能への対応
- パフォーマンス監視

### 7.2 トラブルシューティング
| 問題 | 原因 | 解決方法 |
|------|------|----------|
| アニメーションがカクつく | 複雑なCSSセレクタ | クラス名で直接指定 |
| ScrollTriggerが効かない | 要素の高さが0 | 明示的な高さ指定 |
| メモリ使用量増加 | Timelineの解放漏れ | kill()メソッドで破棄 |

### 7.3 拡張性の確保
- モジュール設計の採用
- 設定の外部化
- ドキュメントの継続的更新

## まとめ
GSAPを使用したリッチなWebサイト制作では、パフォーマンスとユーザー体験のバランスが重要です。このガイドラインに従うことで、高品質で保守性の高いアニメーションサイトを効率的に制作できます。

定期的にこのドキュメントを見直し、新しい知見や技術の進歩に合わせて更新していくことを推奨します。