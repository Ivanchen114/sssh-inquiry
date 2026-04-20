#!/bin/bash

# 🚀 探究與實作課程網站 一鍵發佈腳本（Mode B：保留歷史）
# 雙擊「🚀 發佈網站.command」執行，或終端機輸入 bash deploy.sh
#
# 行為：
#  1. 如果有未提交改動，自動幫你 commit（時間戳訊息）
#  2. 把 master 推到 GitHub，同時同步 main（Vercel 監聽的）
#  3. Git 歷史完整保留（不會像舊版那樣洗掉）
# 預設已用 SSH key 認證，不需要 token。

set -e
cd "$(dirname "$0")"

# 確認在 git repo 內
if [ ! -d ".git" ]; then
  echo "❌ 這個資料夾不是 git repo。"
  exit 1
fi

# 檢查有沒有未提交的改動（包含 untracked）
HAS_CHANGES=0
if ! git diff --quiet 2>/dev/null; then HAS_CHANGES=1; fi
if ! git diff --cached --quiet 2>/dev/null; then HAS_CHANGES=1; fi
if [ -n "$(git ls-files --others --exclude-standard)" ]; then HAS_CHANGES=1; fi

if [ "$HAS_CHANGES" = "1" ]; then
  echo "📝 發現未提交改動，自動 commit..."
  git add -A
  TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
  git commit -q -m "更新: $TIMESTAMP"
  echo "   ✓ 已 commit：更新: $TIMESTAMP"
else
  echo "✨ 沒有新改動，推送既有 commit。"
fi

echo ""
echo "🚀 推送到 GitHub..."
if git push -q origin master && git push -q origin master:main; then
  echo ""
  echo "✅ 完成！Vercel 約 1 分鐘後自動更新。"
  echo "   https://sssh-inquiry.vercel.app"
else
  echo ""
  echo "❌ push 失敗。常見原因："
  echo "   - 網路斷線"
  echo "   - 遠端被別處推過（git fetch 看一下）"
  echo "   - SSH key 沒載入（終端機跑 ssh -T git@github.com 檢查）"
  exit 1
fi
