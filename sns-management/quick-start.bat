@echo off
echo ========================================
echo X投稿補助ツール - クイックスタート
echo ========================================
echo.

REM Pythonがインストールされているか確認
python --version >nul 2>&1
if errorlevel 1 (
    echo [エラー] Pythonがインストールされていません
    echo Pythonをインストールしてください: https://www.python.org/
    pause
    exit /b 1
)

echo [1/3] 必要なライブラリをインストール中...
pip install pyperclip webbrowser >nul 2>&1

echo [2/3] 投稿ツールを起動します...
echo.

REM 投稿補助ツールを実行
python x-safe-post-helper.py post

echo.
echo ========================================
echo 完了しました！
echo ========================================
pause