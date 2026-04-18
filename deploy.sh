#!/bin/bash

# 🚀 探究與實作課程網站 一鍵發佈腳本
# 雙擊「🚀 發佈網站.command」執行，或終端機輸入 bash deploy.sh

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
CONFIG="$SITE_DIR/.deploy-config"
TMP_DIR="/tmp/sssh-inquiry-deploy"

# 讀取設定
if [ ! -f "$CONFIG" ]; then
  echo "❌ 找不到 .deploy-config，請確認檔案存在於網站根目錄。"
  exit 1
fi
source "$CONFIG"

REMOTE="https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPO}.git"

echo "📦 準備部署..."

rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"

# 複製網站檔案（排除 .git、.DS_Store、隱藏設定檔）
rsync -a \
  --exclude='.git' \
  --exclude='.DS_Store' \
  --exclude='*.lock' \
  --exclude='.deploy-config' \
  "$SITE_DIR/" "$TMP_DIR/"

cd "$TMP_DIR"
git init -q
git config user.name "$GITHUB_USER"
git config user.email "${GITHUB_USER}@gmail.com"
git checkout -q -b master
git remote add origin "$REMOTE"
git add .

TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
git commit -q -m "更新: $TIMESTAMP"

echo "🚀 推送到 GitHub..."
# 同時推 master（Vercel 監聽）與 main（保持同步）
if git push -q -f origin master master:main 2>&1; then
  echo ""
  echo "✅ 完成！Vercel 約 1 分鐘後自動更新。"
  echo "   https://sssh-inquiry.vercel.app"
else
  echo ""
  echo "❌ push 失敗，請確認網路連線後重試。"
  exit 1
fi

rm -rf "$TMP_DIR"
