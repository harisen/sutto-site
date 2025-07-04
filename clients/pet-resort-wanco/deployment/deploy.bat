@echo off
REM ペットリゾートWANCO テストサイトデプロイスクリプト (Windows版)

echo =====================================
echo Pet Resort WANCO - Test Site Deploy
echo =====================================
echo.

REM 設定
set PROJECT_NAME=pet-resort-wanco-test
set SOURCE_DIR=..\development\src
set DEPLOYMENT_DIR=..\test-deployment

REM 1. 事前チェック
echo 1. 事前チェックを実行中...

REM Vercel CLIの確認
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Vercel CLIがインストールされていません
    echo         npm install -g vercel でインストールしてください
    exit /b 1
)
echo [OK] Vercel CLI確認OK

REM ソースディレクトリの確認
if not exist "%SOURCE_DIR%" (
    echo [ERROR] ソースディレクトリが見つかりません: %SOURCE_DIR%
    exit /b 1
)
echo [OK] ソースディレクトリ確認OK

REM 2. 必須ファイルの確認
echo.
echo 2. 必須ファイルの確認...
if exist "%SOURCE_DIR%\index.html" (
    echo [OK] index.html
) else (
    echo [WARN] index.html が見つかりません
)

if exist "%SOURCE_DIR%\vercel.json" (
    echo [OK] vercel.json
) else (
    echo [WARN] vercel.json が見つかりません
)

REM 3. デプロイメントディレクトリの準備
echo.
echo 3. デプロイメント情報の準備...
if not exist "%DEPLOYMENT_DIR%" mkdir "%DEPLOYMENT_DIR%"
echo [OK] デプロイメントディレクトリ作成

REM 4. Vercelデプロイ実行
echo.
echo 4. Vercelへのデプロイを開始します...
echo    プロジェクト名: %PROJECT_NAME%
echo.

cd "%SOURCE_DIR%"

REM デプロイコマンド実行
echo Vercelデプロイを実行中...
vercel --prod --name="%PROJECT_NAME%" --yes > "%DEPLOYMENT_DIR%\deploy-output.txt" 2>&1

if %errorlevel% equ 0 (
    echo [OK] デプロイ成功！
    
    REM URLを抽出
    for /f "tokens=*" %%i in ('findstr /i "https://" "%DEPLOYMENT_DIR%\deploy-output.txt" ^| findstr "vercel.app"') do set DEPLOY_URL=%%i
    
    if defined DEPLOY_URL (
        echo.
        echo デプロイURL: %DEPLOY_URL%
        
        REM デプロイ情報を保存
        echo %DEPLOY_URL% > "%DEPLOYMENT_DIR%\url.txt"
        echo %date% %time% > "%DEPLOYMENT_DIR%\deployed_at.txt"
        echo pending > "%DEPLOYMENT_DIR%\approval_status.txt"
        
        echo [OK] デプロイ情報を保存しました
    ) else (
        echo [WARN] デプロイURLの取得に失敗しました
    )
) else (
    echo [ERROR] デプロイに失敗しました
    type "%DEPLOYMENT_DIR%\deploy-output.txt"
    exit /b 1
)

REM 5. 完了メッセージ
echo.
echo =====================================
echo デプロイが完了しました！
echo =====================================
echo.
echo 次のステップ:
echo 1. ブラウザでテストサイトを確認
echo    %DEPLOY_URL%
echo.
echo 2. テストチェックリストの実行
echo    - 表示確認
echo    - 機能テスト  
echo    - レスポンシブ確認
echo.
echo 3. お客様への共有
echo    - URLをメールで送信
echo    - 確認期限の設定（3営業日）
echo.
echo 4. フィードバック対応
echo    - 修正要望の収集
echo    - 承認/キャンセルの確認
echo.

REM デプロイ情報の表示
echo デプロイ情報:
echo - URL: %DEPLOY_URL%
echo - 日時: %date% %time%
echo - ステータス: pending
echo.

echo ログファイル:
echo - デプロイ出力: %DEPLOYMENT_DIR%\deploy-output.txt
echo - URL: %DEPLOYMENT_DIR%\url.txt
echo - タイムスタンプ: %DEPLOYMENT_DIR%\deployed_at.txt

pause