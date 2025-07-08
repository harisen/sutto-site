#!/bin/bash

echo "GitHub CLIを使用してデプロイします..."
echo ""

# GitHub CLIがインストールされているか確認
if ! command -v gh &> /dev/null; then
    echo "GitHub CLIがインストールされていません。"
    echo "./install-gh-cli.sh を実行してインストールしてください。"
    exit 1
fi

# 認証状態を確認
if ! gh auth status &> /dev/null; then
    echo "GitHubにログインしていません。"
    echo "認証を開始します..."
    gh auth login
fi

echo ""
echo "認証が完了しました。デプロイを開始します..."
echo ""

# リモートURLをHTTPSに変更（既に変更済みの場合はスキップ）
CURRENT_URL=$(git remote get-url origin)
if [[ $CURRENT_URL == git@github.com:* ]]; then
    echo "リモートURLをHTTPSに変更中..."
    NEW_URL=${CURRENT_URL/git@github.com:/https://github.com/}
    git remote set-url origin $NEW_URL
fi

# 現在のブランチを確認
CURRENT_BRANCH=$(git branch --show-current)

# mainブランチでない場合は切り替え
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "mainブランチに切り替え中..."
    git checkout main || git checkout -b main
fi

# プッシュ
echo "GitHubにプッシュ中..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ デプロイが成功しました！"
    echo ""
    echo "Vercelが自動的にデプロイを開始します。"
    echo "1-2分後に https://sutto-site.jp で確認できます。"
    echo ""
    echo "デプロイ状態を確認:"
    echo "https://vercel.com/dashboard"
else
    echo ""
    echo "❌ デプロイに失敗しました。"
    echo "エラーメッセージを確認してください。"
fi