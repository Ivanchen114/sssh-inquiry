# 松山高中 探究與實作課程網站

108課綱自然科必修「探究與實作」教學網站。  
學生自學 + 老師上課投影兩用。

## 部署

1. 把這個資料夾 push 到 GitHub repo
2. 到 [vercel.com](https://vercel.com) → Import Project → 選這個 repo
3. Framework: **Other**（純靜態，不需要 build command）
4. 完成，Vercel 自動產生網址

## 檔案結構

```
課程網站/
├── index.html              ← 首頁（課程地圖）
├── about.html              ← 關於課程
├── assets/
│   ├── css/style.css       ← 共用樣式
│   └── js/main.js          ← 教師模式、互動功能
├── units/
│   ├── phase1/             ← 論證建模單元
│   ├── phase2/             ← 規劃研究單元
│   └── phase3/             ← 發現問題單元
├── tools/                  ← 工具箱（報告、ORID、Excel）
├── practice/               ← 練習場
└── vercel.json             ← Vercel 設定
```

## 教師模式

右上角按鈕切換，不需要密碼。  
教師模式顯示：課堂節奏建議、學生迷思概念、引導問題、練習題解答。  
狀態存在瀏覽器 localStorage，重新整理後保留。

## 新增單元

複製 `units/phase1/vaccine.html`，修改內容即可。  
顏色系統：phase1=藍、phase2=綠、phase3=橘，CSS class 已定義好。

## 待完成頁面

- [ ] `about.html`
- [ ] `units/phase1/shm.html`（SHM週期）
- [ ] `units/phase1/uncertainty.html`（有效數字與不確定度）
- [ ] `units/phase1/pendulum-lv1.html`（單擺與數據處理）
- [ ] `units/phase2/spring-lv2.html`（彈簧變因設計）
- [ ] `units/phase2/power-law.html`（冪級數與線性化）
- [ ] `units/phase2/report.html`（報告撰寫規範）
- [ ] `units/phase2/buoyancy-lv2.html`（浮力：鐵達尼號）
- [x] `units/phase3/roller-lv3.html`（翻滾仔 Lv3 競賽）
- [x] `units/phase3/sound-lv3.html`（聲音 Lv3 水瓶琴）
- [ ] `units/phase3/final.html`（期末發表）
- [ ] `tools/report.html`
- [ ] `tools/orid.html`
- [ ] `tools/excel.html`
- [ ] `tools/portfolio.html`
