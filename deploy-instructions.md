# デプロイ手順

## 1. Vercel/Netlifyでのデプロイ（推奨）

### Vercelの場合
1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでログイン
3. 「Import Git Repository」をクリック
4. このリポジトリを選択
5. デプロイ設定はデフォルトのままでOK
6. 「Deploy」をクリック

### Netlifyの場合
1. [Netlify](https://netlify.com)にアクセス
2. GitHubアカウントでログイン
3. 「New site from Git」をクリック
4. このリポジトリを選択
5. ビルド設定はそのままでOK
6. 「Deploy site」をクリック

## 2. 通常のWebサーバーでのデプロイ

### 必要なファイル
以下のファイル・フォルダをすべてWebサーバーにアップロード：
- index.html
- service.html
- pricing.html
- portfolio.html
- deployment-guide.html
- contact.html
- questionnaire.html
- faq.html
- css/（フォルダ全体）
- js/（フォルダ全体）
- images/（フォルダ全体）
- samples/（フォルダ全体）

### 注意事項
- ルートディレクトリにindex.htmlを配置
- フォルダ構造を維持したままアップロード
- .htaccessファイルがある場合は一緒にアップロード

## 3. えいごくん様の納品物について

えいごくん様（アマリア）のLP納品物は以下に格納されています：

```
/clients/eigokun/delivery-package/
├── 納品について.txt
└── amalia-lp/
    ├── README.md
    ├── index.html
    ├── styles.css
    └── script.js
```

圧縮ファイル：`eigokun-amalia-delivery.tar.gz`

### 納品物の使用方法
1. `amalia-lp`フォルダ内の全ファイルをWebサーバーにアップロード
2. index.htmlにアクセスしてLPを表示
3. フォーム送信機能は別途サーバー側実装が必要

## 4. デプロイ後の確認事項

- [ ] トップページが正しく表示される
- [ ] 全てのリンクが機能する
- [ ] サンプルサイトが表示される
- [ ] お問い合わせフォームが表示される
- [ ] レスポンシブデザインが機能する
- [ ] 画像が正しく表示される

## 5. トラブルシューティング

### 画像が表示されない場合
- 画像のパスが正しいか確認
- 画像ファイルがアップロードされているか確認

### CSSが適用されない場合
- CSSファイルのパスが正しいか確認
- ファイル名の大文字小文字を確認

### フォームが動作しない場合
- JavaScriptが有効になっているか確認
- コンソールエラーを確認