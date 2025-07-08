@echo off
title X投稿 自動スケジューラー
color 0E

echo ============================================
echo    X投稿 自動スケジューラー 起動中...
echo ============================================
echo.
echo このウィンドウを閉じないでください。
echo バックグラウンドで動作します。
echo.

REM 必要なライブラリをインストール
pip install schedule plyer >nul 2>&1

REM スケジューラーを起動
python auto-scheduler.py run

pause