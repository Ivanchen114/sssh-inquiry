#!/bin/bash

# 🚀 探究與實作課程網站 一鍵同步腳本
# 執行方式：bash deploy.sh 或 ./deploy.sh

cd "$(dirname "$0")"

# 🔓 清除可能殘留的 git 鎖定檔（防止 commit 失敗）
if find .git -name "*.lock" | grep -q .; then
    echo "⚠️  發現 git 鎖定檔，正在清除..."
    find .git -name "*.lock" -delete
fi

echo "📦 加入所有修改的檔案..."
git add .

echo "✨ 建立版本紀錄..."
TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
if ! git commit -m "更新: $TIMESTAMP"; then
    echo "❌ commit 失敗！請確認是否有檔案需要儲存，或聯絡管理員。"
    exit 1
fi

echo "🚀 推送到 GitHub（Vercel 將自動更新網站）..."
if ! git push origin main 2>/dev/null && ! git push origin master; then
    echo "❌ push 失敗！請確認網路連線，或重新執行發佈腳本。"
    exit 1
fi

echo ""
echo "✅ 完成！Vercel 大約 1 分鐘後自動更新網站。"
