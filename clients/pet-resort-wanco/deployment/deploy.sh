#!/bin/bash

# ペットリゾートWANCO テストサイトデプロイスクリプト

echo "====================================="
echo "Pet Resort WANCO - Test Site Deploy"
echo "====================================="
echo ""

# 設定
PROJECT_NAME="pet-resort-wanco-test"
SOURCE_DIR="../development/src"
DEPLOYMENT_DIR="../test-deployment"

# カラー定義
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 関数: 成功メッセージ
success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# 関数: 警告メッセージ
warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# 関数: エラーメッセージ
error() {
    echo -e "${RED}✗ $1${NC}"
}

# 1. 事前チェック
echo "1. 事前チェックを実行中..."

# Vercel CLIの確認
if ! command -v vercel &> /dev/null; then
    error "Vercel CLIがインストールされていません"
    echo "   npm install -g vercel でインストールしてください"
    exit 1
fi
success "Vercel CLI確認OK"

# ソースディレクトリの確認
if [ ! -d "$SOURCE_DIR" ]; then
    error "ソースディレクトリが見つかりません: $SOURCE_DIR"
    exit 1
fi
success "ソースディレクトリ確認OK"

# 必須ファイルの確認
echo ""
echo "2. 必須ファイルの確認..."
REQUIRED_FILES=("index.html" "vercel.json" "css/style.css" "js/main.js")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$SOURCE_DIR/$file" ]; then
        success "$file"
    else
        warning "$file が見つかりません"
    fi
done

# 3. デプロイメントディレクトリの準備
echo ""
echo "3. デプロイメント情報の準備..."
mkdir -p "$DEPLOYMENT_DIR"
success "デプロイメントディレクトリ作成"

# 4. Vercelデプロイ実行
echo ""
echo "4. Vercelへのデプロイを開始します..."
echo "   プロジェクト名: $PROJECT_NAME"
echo ""

cd "$SOURCE_DIR" || exit

# デプロイコマンド実行
echo "Vercelデプロイを実行中..."
DEPLOY_OUTPUT=$(vercel --prod --name="$PROJECT_NAME" --yes 2>&1)
DEPLOY_STATUS=$?

if [ $DEPLOY_STATUS -eq 0 ]; then
    success "デプロイ成功！"
    
    # URLを抽出
    DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -oE 'https://[^ ]+\.vercel\.app' | head -1)
    
    if [ -n "$DEPLOY_URL" ]; then
        echo ""
        echo "デプロイURL: $DEPLOY_URL"
        
        # デプロイ情報を保存
        echo "$DEPLOY_URL" > "$DEPLOYMENT_DIR/url.txt"
        echo "$(date '+%Y-%m-%d %H:%M:%S')" > "$DEPLOYMENT_DIR/deployed_at.txt"
        echo "pending" > "$DEPLOYMENT_DIR/approval_status.txt"
        
        # 追加情報
        cat > "$DEPLOYMENT_DIR/deployment-info.json" << EOF
{
  "projectName": "$PROJECT_NAME",
  "deployUrl": "$DEPLOY_URL",
  "deployedAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "status": "pending",
  "environment": "test",
  "vercelProject": "$PROJECT_NAME",
  "expires": "$(date -u -d '+30 days' +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
        
        success "デプロイ情報を保存しました"
    else
        warning "デプロイURLの取得に失敗しました"
        echo "$DEPLOY_OUTPUT" > "$DEPLOYMENT_DIR/deploy-output.log"
    fi
else
    error "デプロイに失敗しました"
    echo "$DEPLOY_OUTPUT" > "$DEPLOYMENT_DIR/deploy-error.log"
    exit 1
fi

# 5. デプロイ後の確認
echo ""
echo "5. デプロイ後の確認..."

if [ -n "$DEPLOY_URL" ]; then
    # URLの存在確認
    echo "サイトの応答を確認中..."
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOY_URL")
    
    if [ "$HTTP_STATUS" -eq 200 ]; then
        success "サイトが正常に応答しています (HTTP $HTTP_STATUS)"
    else
        warning "サイトの応答に問題があります (HTTP $HTTP_STATUS)"
    fi
fi

# 6. 完了メッセージ
echo ""
echo "====================================="
echo -e "${GREEN}デプロイが完了しました！${NC}"
echo "====================================="
echo ""
echo "次のステップ:"
echo "1. ブラウザでテストサイトを確認"
echo "   $DEPLOY_URL"
echo ""
echo "2. テストチェックリストの実行"
echo "   - 表示確認"
echo "   - 機能テスト"
echo "   - レスポンシブ確認"
echo ""
echo "3. お客様への共有"
echo "   - URLをメールで送信"
echo "   - 確認期限の設定（3営業日）"
echo ""
echo "4. フィードバック対応"
echo "   - 修正要望の収集"
echo "   - 承認/キャンセルの確認"
echo ""

# デプロイ情報のサマリー表示
if [ -f "$DEPLOYMENT_DIR/deployment-info.json" ]; then
    echo "デプロイ情報:"
    cat "$DEPLOYMENT_DIR/deployment-info.json" | python -m json.tool 2>/dev/null || cat "$DEPLOYMENT_DIR/deployment-info.json"
fi

echo ""
echo "ログファイル:"
echo "- デプロイ情報: $DEPLOYMENT_DIR/deployment-info.json"
echo "- URL: $DEPLOYMENT_DIR/url.txt"
echo "- タイムスタンプ: $DEPLOYMENT_DIR/deployed_at.txt"