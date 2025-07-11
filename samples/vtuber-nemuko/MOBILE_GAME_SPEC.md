# どんぐり集めゲーム - モバイル最適化仕様書

## 現状の課題分析

### 1. ポップアップウィンドウの問題
- **固定サイズ**: 幅・高さが固定値で設定されている
- **中央配置のみ**: モバイル画面では見切れる可能性
- **小さいフォントサイズ**: モバイルでは読みにくい
- **狭いパディング**: タッチ操作には不十分

### 2. 報酬オーバーレイの問題
- **画像サイズ**: 最大90%だが、モバイルでは大きすぎる可能性
- **メッセージ表示**: 別要素で表示されるが、画面外に出る可能性

### 3. カウンターの問題
- **位置**: 右下固定だが、親指で隠れる可能性
- **サイズ**: モバイルでは小さすぎる（0.8rem）

## モバイル最適化仕様

### 1. レスポンシブなゲームウィンドウ

#### コレクション完了ポップアップ
```css
/* モバイル対応 */
.collection-popup {
    /* 基本設定 */
    width: 90%;
    max-width: 400px;
    padding: 40px 30px;
    
    /* モバイル最適化 */
    @media (max-width: 768px) {
        width: 85%;
        padding: 30px 20px;
        top: 40%; /* 上部に寄せて見やすく */
    }
    
    @media (max-width: 480px) {
        width: 90%;
        padding: 25px 15px;
        font-size: 0.9rem;
    }
}

.collection-popup h3 {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    margin-bottom: 15px;
}

.collection-popup p {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    line-height: 1.6;
    margin-bottom: 20px;
}

.collection-popup .btn {
    font-size: clamp(0.9rem, 3vw, 1rem);
    padding: 12px 30px;
    min-height: 44px; /* タッチターゲット最小サイズ */
}
```

#### 報酬オーバーレイ
```css
.reward-overlay {
    /* タッチ領域を明確に */
    backdrop-filter: blur(5px);
}

.reward-image {
    @media (max-width: 768px) {
        max-width: 80%;
        max-height: 60vh; /* 縦長画面対応 */
    }
    
    @media (max-width: 480px) {
        max-width: 85%;
        max-height: 50vh;
    }
}

/* メッセージ表示の改善 */
.reward-message {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 400px;
    
    @media (max-width: 768px) {
        top: 5%;
        font-size: clamp(1rem, 4vw, 1.3rem);
        padding: 15px 25px;
    }
}
```

### 2. ゲームUI要素の最適化

#### コレクションカウンター
```css
.collection-counter {
    /* モバイル向け位置調整 */
    @media (max-width: 768px) {
        bottom: 80px; /* ナビゲーションバーを避ける */
        right: 20px;
        font-size: 0.9rem;
        padding: 12px 16px;
        
        /* 視認性向上 */
        background: rgba(255, 255, 255, 0.95);
        border: 2px solid var(--primary-orange);
    }
    
    /* 横向き対応 */
    @media (max-width: 768px) and (orientation: landscape) {
        bottom: 20px;
        right: 20px;
        font-size: 0.8rem;
    }
}
```

### 3. タッチ操作の最適化

#### どんぐり要素
```css
.hidden-acorn,
.golden-acorn {
    /* タッチターゲットサイズ拡大 */
    @media (max-width: 768px) {
        width: 45px;
        height: 45px;
        
        /* タッチ領域を視覚的サイズより大きく */
        &::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
        }
    }
}
```

### 4. アニメーション最適化

```javascript
// モバイルデバイス検出
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// パフォーマンス考慮
if (isMobile) {
    // パーティクル数を減らす
    const particleCount = 5; // 通常は10
    
    // アニメーションを簡略化
    gsap.config({
        force3D: false, // GPUアクセラレーション無効化
        nullTargetWarn: false
    });
}
```

### 5. 実装優先順位

#### フェーズ1（即時対応）
1. ポップアップのレスポンシブ化
2. カウンター位置の調整
3. タッチターゲットサイズの確保

#### フェーズ2（追加改善）
1. 横向き画面対応
2. パフォーマンス最適化
3. アクセシビリティ向上

#### フェーズ3（将来的な拡張）
1. ゲーム進捗の保存機能
2. 振動フィードバック
3. サウンドエフェクト（オプション）

## テスト項目

### デバイステスト
- [ ] iPhone SE（小画面）
- [ ] iPhone 14（標準）
- [ ] iPad（タブレット）
- [ ] Android各種

### 操作テスト
- [ ] タップ反応速度
- [ ] スクロール中の誤タップ防止
- [ ] ポップアップの表示位置
- [ ] 画面回転時の挙動

### パフォーマンステスト
- [ ] アニメーションの滑らかさ
- [ ] メモリ使用量
- [ ] バッテリー消費