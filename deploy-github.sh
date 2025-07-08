#\!/bin/bash

# 新しいGitHubリポジトリへのデプロイスクリプト

echo "新しいGitHubリポジトリを作成してください："
echo "1. https://github.com/new にアクセス"
echo "2. Repository name: sutto-site"
echo "3. Public を選択"
echo "4. Create repository をクリック"
echo ""
echo "リポジトリを作成したら、Enterキーを押してください..."
read

# 現在のリモートを削除
git remote remove origin

# 新しいリモートを追加（ユーザー名を入力）
echo "GitHubのユーザー名を入力してください："
read GITHUB_USERNAME

git remote add origin https://github.com/$GITHUB_USERNAME/sutto-site.git

# プッシュ
git branch -M main
git push -u origin main

echo "デプロイが完了しました！"
echo "Vercelで新しいプロジェクトを作成してください："
echo "1. https://vercel.com/new にアクセス"
echo "2. Import Git Repository から $GITHUB_USERNAME/sutto-site を選択"
echo "3. Deploy をクリック"
