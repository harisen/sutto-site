# スクロールテストシナリオ

## 重要: スクロール往復時の表示崩れテスト

スクロールを下まで行ってから上に戻した際に、レイアウトやアニメーションが崩れることがあるため、特に注意してテストを実施する。

## 1. 基本的なスクロールテスト

### 上下スクロールの往復テスト
- [ ] **ゆっくりスクロール**
  1. ページトップから最下部までゆっくりスクロール
  2. 最下部から最上部までゆっくりスクロール
  3. この往復を3回繰り返す
  4. レイアウト崩れがないか確認

- [ ] **高速スクロール**
  1. マウスホイールで素早くスクロール
  2. 上下を高速で往復（5回）
  3. 要素の位置ずれがないか確認
  4. アニメーションの残像がないか確認

- [ ] **中断スクロール**
  1. スクロール途中で停止
  2. 逆方向にスクロール
  3. 各セクションで実施
  4. 表示が正常か確認

### デバイス別スクロールテスト
- [ ] **タッチスクロール（モバイル）**
  - スワイプでの高速スクロール
  - 慣性スクロール中の表示確認
  - ラバーバンド効果時の表示

- [ ] **トラックパッド（Mac）**
  - 慣性スクロール
  - 2本指でのスクロール
  - ピンチズーム後のスクロール

## 2. ScrollTrigger関連のテスト

### アニメーション再生テスト
- [ ] **アニメーションのリセット確認**
  ```
  テスト手順:
  1. セクションまでスクロールしてアニメーション再生
  2. 上にスクロールして画面外へ
  3. 再度下にスクロールして表示
  4. アニメーションが正しく再生されるか確認
  ```

- [ ] **スクロール位置の記憶**
  ```
  確認項目:
  - スクロール位置が正しく保持されているか
  - リフレッシュ後も正常に動作するか
  - toggleActions が適切に動作しているか
  ```

### パララックス効果のテスト
- [ ] **視差スクロールの確認**
  ```
  重点確認項目:
  - 要素が画面外に飛び出していないか
  - スクロール速度による表示ズレ
  - 上下往復時の位置ズレ
  ```

## 3. 特定の不具合パターン

### よくある表示崩れパターン
- [ ] **固定ヘッダーの不具合**
  ```
  症状: スクロール後に戻るとヘッダーが消える/ずれる
  確認方法:
  1. 最下部までスクロール
  2. 一気に最上部へ戻る
  3. ヘッダーの表示状態を確認
  ```

- [ ] **要素の重なり順序（z-index）の崩れ**
  ```
  症状: スクロール後に要素の重なりが変わる
  確認箇所:
  - モーダルとヘッダー
  - ドロップダウンメニュー
  - 固定要素と通常要素
  ```

- [ ] **アニメーション要素の位置ずれ**
  ```
  症状: transform で動かした要素が元に戻らない
  確認方法:
  1. 各アニメーション要素を通過
  2. 上にスクロールして戻る
  3. 要素の位置を確認
  ```

### メモリリーク関連
- [ ] **長時間スクロールテスト**
  ```
  手順:
  1. 開発者ツールでメモリ使用量を監視
  2. 上下スクロールを50回繰り返す
  3. メモリ使用量の増加を確認
  4. パフォーマンスの低下がないか確認
  ```

## 4. 修正方法チェックリスト

### ScrollTrigger の設定確認
```javascript
// 推奨設定
ScrollTrigger.create({
  trigger: element,
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play reverse play reverse", // 往復対応
  invalidateOnRefresh: true, // リフレッシュ時の再計算
  anticipatePin: 1 // ピン要素の先読み
});
```

### CSS の will-change 設定
```css
/* スクロール時に変形する要素 */
.animated-element {
  will-change: transform;
}

/* アニメーション完了後は削除 */
.animation-complete {
  will-change: auto;
}
```

### JavaScript のクリーンアップ
```javascript
// スクロールイベントの適切な管理
let scrollTimer;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    // スクロール停止後の処理
    ScrollTrigger.refresh();
  }, 150);
});
```

## 5. 自動テストスクリプト

```javascript
// スクロール往復テストの自動化
async function scrollStressTest() {
  const results = {
    errors: [],
    warnings: []
  };

  // 初期状態の記録
  const initialState = capturePageState();

  // スクロールテスト実行
  for (let i = 0; i < 10; i++) {
    // 下へスクロール
    await smoothScrollTo(document.body.scrollHeight);
    await wait(500);
    
    // 上へスクロール
    await smoothScrollTo(0);
    await wait(500);
    
    // 状態チェック
    const currentState = capturePageState();
    const differences = compareStates(initialState, currentState);
    
    if (differences.length > 0) {
      results.errors.push({
        iteration: i + 1,
        differences
      });
    }
  }

  return results;
}

function capturePageState() {
  return {
    headerPosition: document.querySelector('.header').getBoundingClientRect(),
    animations: gsap.getTweensOf('*'),
    scrollTriggers: ScrollTrigger.getAll(),
    elementPositions: Array.from(document.querySelectorAll('.animated')).map(el => ({
      element: el,
      rect: el.getBoundingClientRect()
    }))
  };
}
```

## 6. テスト結果記録テンプレート

| テスト項目 | 初回 | 往復後 | 問題 | 対応 |
|-----------|------|--------|------|------|
| ヘッダー固定 | ✅ | ❌ | 位置ずれ | CSS修正 |
| ヒーローアニメーション | ✅ | ✅ | なし | - |
| パララックス効果 | ✅ | ⚠️ | 微小なずれ | 要観察 |
| ScrollTrigger | ✅ | ✅ | なし | - |

## 注意事項

1. **特に注意すべきブラウザ**
   - iOS Safari（ラバーバンド効果）
   - Chrome（スムーズスクロール）
   - Firefox（スクロール挙動の違い）

2. **パフォーマンス監視**
   - FPSの低下
   - レンダリング時間
   - スクロールのカクつき

3. **デバッグツール**
   - Chrome DevTools Performance
   - ScrollTrigger.markers = true
   - GSDevTools（GSAP専用）