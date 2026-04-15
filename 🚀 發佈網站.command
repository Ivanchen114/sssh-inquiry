#!/bin/bash
cd "$(dirname "$0")"
bash deploy.sh
echo ""
echo "按任意鍵關閉..."
read -n 1
