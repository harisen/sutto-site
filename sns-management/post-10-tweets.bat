@echo off
chcp 65001 > nul
echo ========================================
echo 🚀 10ツイート投稿ツール
echo ========================================
echo.
echo これから10個のツイートを順番に開きます。
echo 各ツイートを投稿後、Enterキーを押して次に進んでください。
echo.
pause

python open-all-tweets.py

echo.
echo ✅ 全ての投稿が完了しました！
echo.
pause