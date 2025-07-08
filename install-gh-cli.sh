#!/bin/bash

echo "GitHub CLIをインストールします..."
echo "このスクリプトはsudo権限が必要です。"
echo ""

# GPGキーの追加
echo "1. GPGキーを追加中..."
sudo mkdir -p /usr/share/keyrings
sudo cp /tmp/githubcli-archive-keyring.gpg /usr/share/keyrings/githubcli-archive-keyring.gpg

# リポジトリの追加
echo "2. リポジトリを追加中..."
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null

# パッケージリストの更新
echo "3. パッケージリストを更新中..."
sudo apt update

# GitHub CLIのインストール
echo "4. GitHub CLIをインストール中..."
sudo apt install gh -y

echo ""
echo "インストールが完了しました！"
echo ""
echo "次のステップ:"
echo "1. 'gh auth login' を実行してGitHubにログイン"
echo "2. HTTPSを選択"
echo "3. ブラウザで認証"
echo "4. 'git push origin main' でデプロイ"