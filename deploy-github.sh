#!/bin/bash

echo "==================================="
echo "GitHub デプロイスクリプト"
echo "==================================="
echo ""
echo "このスクリプトを実行する前に、GitHubで新しいリポジトリを作成してください。"
echo "リポジトリ名: lp-service-site (推奨)"
echo ""
echo "準備ができたら、以下の情報を入力してください："
echo ""

read -p "GitHubユーザー名: " username
read -p "リポジトリ名 (デフォルト: lp-service-site): " repo_name

# デフォルト値の設定
repo_name=${repo_name:-lp-service-site}

# リモートURLの構築
remote_url="https://github.com/${username}/${repo_name}.git"

echo ""
echo "リモートURL: $remote_url"
echo ""
read -p "この設定で続行しますか？ (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "キャンセルしました。"
    exit 1
fi

# Gitリモートの追加
echo "リモートリポジトリを追加しています..."
git remote add origin $remote_url 2>/dev/null || git remote set-url origin $remote_url

# プッシュ
echo "GitHubにプッシュしています..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ デプロイ成功！"
    echo ""
    echo "次のステップ:"
    echo "1. Vercel (https://vercel.com) にアクセス"
    echo "2. 'Add New Project' をクリック"
    echo "3. GitHubリポジトリ '${repo_name}' を選択"
    echo "4. 'Deploy' をクリック"
    echo ""
    echo "または"
    echo ""
    echo "1. Netlify (https://netlify.com) にアクセス"
    echo "2. 'Add new site' > 'Import an existing project' をクリック"
    echo "3. GitHubリポジトリ '${repo_name}' を選択"
    echo "4. 'Deploy site' をクリック"
else
    echo ""
    echo "❌ エラーが発生しました。"
    echo "GitHubでリポジトリが作成されているか確認してください。"
    echo "また、Gitの認証情報が正しく設定されているか確認してください。"
fi