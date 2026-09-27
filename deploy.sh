#!/bin/bash
# Publish reviewed commits only. Never stage or commit unrelated working files.
set -euo pipefail
cd "$(dirname "$0")"
git rev-parse --show-toplevel >/dev/null
if [ -n "$(git status --porcelain)" ]; then
  echo "尚有未提交或未追蹤檔案，已停止發佈。請先檢查並明確提交要發佈的檔案，或從乾淨的發佈工作目錄執行。"
  git status --short
  exit 1
fi
if [ "$(git branch --show-current)" != "master" ]; then
  echo "請先確認發佈提交並切換到 master；本腳本不會自動切換分支。"
  exit 1
fi
git push --atomic origin HEAD:master HEAD:main
echo "已推送。請確認 Vercel 部署成功及正式站操作正常：https://sssh-inquiry.vercel.app"
