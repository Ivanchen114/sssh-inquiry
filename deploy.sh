#!/bin/bash

# 🚀 探究與實作課程網站 一鍵同步腳本
# 執行方式：bash deploy.sh 或 ./deploy.sh

cd "$(dirname "$0")"

echo "📦 加入所有修改的檔案..."
git add .

echo "✨ 建立版本紀錄..."
TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
git commit -m "更新: $TIMESTAMP"

echo "🚀 推送到 GitHub（Vercel 將自動更新網站）..."
git push origin main 2>/dev/null || git push origin master

echo ""
echo "✅ 完成！Vercel 大約 1 分鐘後自動更新網站。"
