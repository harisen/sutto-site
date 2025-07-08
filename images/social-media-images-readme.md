# ソーシャルメディア画像について

## 画像ファイル
- `twitter-card.svg` - Twitter Card用のSVG画像（1200x630px）
- `og-image.svg` - Open Graph用のSVG画像（1200x630px）

## JPG変換方法

### オンラインツールを使用
1. [CloudConvert](https://cloudconvert.com/svg-to-jpg) などのオンライン変換ツールにアクセス
2. SVGファイルをアップロード
3. 出力形式をJPGに設定
4. 品質は90-95%程度を推奨
5. 変換後、同じファイル名でJPG版を保存

### コマンドラインで変換（ImageMagick使用）
```bash
# ImageMagickがインストールされている場合
convert twitter-card.svg -quality 95 twitter-card.jpg
convert og-image.svg -quality 95 og-image.jpg
```

### ブラウザで手動変換
1. SVGファイルをブラウザで開く
2. 開発者ツールでキャンバスサイズを1200x630に調整
3. スクリーンショットを撮影
4. 画像編集ソフトでJPGとして保存

## 推奨仕様
- **サイズ**: 1200 x 630 ピクセル
- **ファイル形式**: JPG（TwitterとFacebookの推奨）
- **ファイルサイズ**: 5MB以下（理想は200KB以下）
- **アスペクト比**: 1.91:1

## デプロイ前の確認
1. JPG画像を作成後、`images/`ディレクトリに配置
2. index.htmlのメタタグURLが正しいことを確認
3. デプロイ後、以下のツールで確認：
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

## 注意事項
- SVGファイルは参照用として残しておく
- 実際のSNSシェアではJPG版が使用される
- 画像を更新した場合は、SNSのキャッシュクリアが必要な場合がある