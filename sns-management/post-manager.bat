@echo off
title X投稿マネージャー
color 0A

:menu
cls
echo ============================================
echo    X (Twitter) 投稿マネージャー
echo ============================================
echo.
echo 1. 今日の投稿を実行
echo 2. 週間スケジュールを確認
echo 3. 投稿履歴を確認
echo 4. カスタム投稿
echo 5. 終了
echo.
set /p choice=選択してください (1-5): 

if %choice%==1 goto daily
if %choice%==2 goto schedule
if %choice%==3 goto history
if %choice%==4 goto custom
if %choice%==5 exit

:daily
cls
python daily-post.py
pause
goto menu

:schedule
cls
python daily-post.py schedule
pause
goto menu

:history
cls
python daily-post.py history
pause
goto menu

:custom
cls
echo カスタム投稿モード
echo.
python test-now.py
pause
goto menu