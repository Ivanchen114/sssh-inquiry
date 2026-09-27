# 生活探究工作室

2026-09-27 可操作模擬工作室。主題館整合 12 個共用工作臺，加上獨立單擺，共 13 個題材。實體器材校準與全班試教仍待後續進行。

## 入口

- `catalog.html`：生活探究主題館，分類與搜尋。
- `index.html?lab=...` 或 `./?lab=...`：進入對應工作臺。
- 主站首頁、工具箱、單擺頁「生活探究」及每個工作臺的「主題館」均有入口。

|領域|工作臺／lab key|主要探究與證據|
|---|---|---|
|熱與食物|保溫杯 thermos|隔熱厚度、杯蓋、水量；水溫的時間序列。|
|熱與食物|保冰盒 cooler|剩冰量、冰水溫度、相變平台；融完後的升溫。|
|熱與食物|烤地瓜 oven|等效尺寸、爐溫；外層與中心溫度差。口感、熟度與甜度留待實物操作化和量測。|
|光與電|書桌照明 lighting|燈高、量測位置與背景；照度分布和扣除背景的讀值。|
|光與電|電池與小燈泡 circuit|串／並聯、數量、導線；總電流、每顆燈功率、導線損耗。|
|飛行與運動|降落傘 parachute|張開傘面、總質量、高度；下降時間與模型落地速率。|
|飛行與運動|紙飛機 glider|翼面、質量、投擲條件；軌跡、水平落點與滯空時間。|
|飛行與運動|鞋底止滑 grip|傾角與配重；用不滑／滑動試次夾出臨界角度範圍。|
|經典物理|單擺 pendulum|獨立 `../pendulum-workbench/`。|
|經典物理|橡皮筋秤重 rubber|加重、卸載、等待、讀尺與黏彈性歷程。|
|經典物理|弦音 sound|弦長、張力、FFT 頻譜與基頻游標。|
|經典物理|浮力造船 boat|折邊、載重位置、吃水；保留進水與超出模型範圍的紀錄。|
|經典物理|翻滾仔 roller|等效齒軌、對稱配重半徑與光閘時間。|

## 探究流程

學生先留下預測，可自行寫「改變什麼、量什麼、固定什麼、重複幾次」。之後操作器材、取樣、保存筆記、比較圖表，最後寫主張、證據、解釋與修正。個人比較方法可在論證區修訂並匯出。

熱學工作臺提供模擬時間游標與前進按鈕，讀值是「該組條件、第幾分鐘」，不是實際牆上鐘錶時間。可在同一組持續取樣；同組時間點不視為獨立重複。分析時若比較不同厚度等條件，也會提醒取樣時間不一致。

二元鞋底結果不提供直線擬合；引導學生找臨界範圍。其餘資料可選軸、散佈圖、直線擬合及殘差，R² 不代表因果。排除紀錄要寫理由，可重新納入，最近的理由保留。船隻失敗的平衡讀值是 null，不能當成 0。

這是以 SVG 製作、透過器材面板操作的滿版 2.5D 場景，沒有自由繞行的 3D 相機。模型輸出與學生讀取值有區別，標示資料來源為「模擬實驗」。不提供品牌排行、好吃分數或護眼判定。

## 原始碼

- `index.html`、`studio.css`、`studio.js`：共用場景、操作狀態、資料與分析。
- `labs.js`、`models.js`：原本四個延伸工作臺。
- `life-labs.js`：八個生活題材的條件、量測、提問、實物驗證、來源與邊界。
- `life-models.js`：可在 Node 單獨測試的模型。
- `life-scenes.js`：八種 SVG 器材及儀表。
- `catalog.html`、`catalog.css`、`catalog.js`：主題館。
- 共用 `../pendulum-workbench/workbench.css` 和 `model.js` 的迴歸／CSV 編碼。

## 生活模型與參考來源

來源支持物理原理或研究設計，不代表本站示範參數已經由該研究校準。

### 保溫與保冰

牛頓冷卻搭配導熱及外部換熱的串聯熱阻；杯／盒蓋漏熱並聯。保溫杯採均溫水體，不另外模擬蒸發與溫度梯度；保冰從 0°C 開始，先消耗融化潛熱，冰融完後才計算水的升溫。盒內冰水與箱內空氣不能視為同一溫度。質量顯示是模擬感測器；實物秤冰會受開蓋、瀝水影響。

- [美國能源部熱傳手冊](https://www.energy.gov/ehss/articles/doe-hdbk-10122-92)
- [Science Buddies：Build a Cooler](https://www.sciencebuddies.org/stem-activities/build-a-cooler)

### 烤地瓜

球形等效地瓜、兩個熱容量節點，描述外層與中心傳熱；沒有水分遷移、蒸發、糊化、酵素、糖化或焦化。沒有用中心溫度推算熟度、糖度或口感。實物延伸要求固定品種與含水狀態，以穿刺力、糖度、失重或盲評分別操作化。

- [臺大：Mechanism of Saccharification Reaction in Baking of Sweet Potato at Constant Temperature](https://scholars.lib.ntu.edu.tw/entities/publication/e64affc2-ee8c-4280-95a9-ebc222be98e0)
- [JARQ：Maltose Generation by Beta-amylase and its Relation to Eating Quality](https://www.jstage.jst.go.jp/article/jarq/52/1/52_7/_article/-char/en)

### 光與電

照明採點光源逆平方及入射餘弦，外加固定背景；不解算真實燈罩、眩光與光譜。電路採固定燈泡電阻、電池內阻、銅線往返電阻；區分總電流、每顆燈功率及線損，忽略燈絲溫度、電池耗盡與 LED 特性。電路圖的串並聯、電源與開關連線需隨模型一致變動。

- [NIST 光度學](https://www.nist.gov/publications/chapter-a21-photometry-handbook-optoelectronics)
- [OpenStax 串聯與並聯](https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel)
- [OpenStax 電池端電壓](https://openstax.org/books/college-physics/pages/21-2-electromotive-force-terminal-voltage)

### 飛行與鞋底

降落傘採完全張開後的垂直平方阻力解析解；釋放高度以包裹底部為參考，未處理張傘、擺盪、側風或穩定度。紙飛機採二維固定升阻係數質點模型，RK4 積分；沒有俯仰、迎角、失速、重心或折法解算，不可拿來排名折法。鞋底採庫侖摩擦；係數是待校準參數，不能由品牌、紋路或乾濕狀態直接指定，未處理步態或水膜。

- [NASA 阻力方程](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-equation/)
- [NASA 紙飛機活動](https://www.grc.nasa.gov/www/k-12/aerosim/LessonHS97/paperairplaneac.html)
- [Science Buddies 斜面與摩擦](https://www.sciencebuddies.org/science-fair-projects/project-ideas/ApMech_p022/mechanical-engineering/friction-slippery-slopes)

原有橡皮筋、聲音、齒軌與造船模型及來源保留於 `labs.js` 和各工作臺「說明」。模型資料不能獨立證明產生它的方程；實物與模型的差異正是後續探究的起點。

## 保存與交換

每個共用工作臺使用 `sssh-inquiry-studio-v1-{lab}`，不同主機或連接埠隔離資料。JSON 保留預測、比較方法、條件、原始讀值、量測時間／組別、排除理由及論證；CSV 可送入試算表；Markdown 輸出完整紀錄。最多 2000 筆、匯入上限 5 MB。只接受同一實驗的備份，取代前提供備份與確認。

切換分頁或超過 0.5 秒停頓會中止尚未保存的動作。取樣時凍結畫面；重新整理保留已存紀錄，不恢復器材的瞬間狀態。實驗組別在重整／匯入後會接續編號。

## 本輪驗證

`node --test tests/inquiry-life-models.test.cjs tests/inquiry-studio-models.test.cjs tests/pendulum-workbench-model.test.cjs`

23 項通過，包括熱平衡與時間縮放、潛熱平台、兩節點溫差、逆平方與餘弦、電路能量守恆、平方阻力落地、無升阻力拋體極限、摩擦臨界、全部八個模型的控制端點及原有模型回歸。

瀏覽器使用 `127.0.0.1:8766` 的測試資料，未混入使用者 `8765` 的紀錄：

- 全八題材完成預測 → 操作 → 取樣 → 保存。
- 保溫同組 5／10／15 分鐘連續取樣、座標軸、擬合；比較方法保存與回讀。
- 保冰 15 分鐘相變平台、360 分鐘融完升溫；0 g 可以保存。
- 烤地瓜中心／外層溫度；光照讀值；電路串並聯讀值與條件變更。
- 降落傘與紙飛機落地前取樣鎖定，落地後保存；鞋底 20° 不滑與 27° 滑動，二元結果無直線擬合。
- JSON、CSV、Markdown 實際下載並核對時間、組別、負溫差、比較方法；JSON 還原成功。
- 主題館分類、搜尋；390×844 手機館頁和保溫快轉／取樣面板；桌面器材視覺檢查。

未驗收：真實手機鍵盤／觸控、全班試教、實體量測校準、真實食品感官／化學數據。

## 同步範圍

本輪更新主題館、共用工作臺、新模型／場景／測試、單擺的主題館入口、主站首頁與工具箱入口。既有 9 主題 × 3 階段的課程頁、學習單、教師投影簡報與離線下載包不改寫，這些原型也未宣稱是新的一整套課程。

## 發布檢查

- 發布包含主題館、兩個工作臺目錄、三份模型測試、首頁與工具箱入口。
- 使用固定 base URL，支援 Vercel cleanUrls 和無尾斜線網址。
- 單擺與共用工作臺皆限制 2000 筆，避免新增超過匯入上限的備份。
- 生成原圖、提示詞文件及測試檔不納入靜態網站發布。
