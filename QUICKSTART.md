# 快速入門

10 分鐘上手奇門遁甲排盤系統。

## 1. 安裝依賴

```bash
# 使用 pnpm（推薦）
pnpm add lunar-typescript

# 或使用 npm
npm install lunar-typescript

# 或使用 yarn
yarn add lunar-typescript
```

## 2. 導入模塊

```typescript
import {QimenUtil} from "./qimen/QimenUtil";
import {Lunar} from "lunar-typescript";
```

## 3. 創建第一個排盤

```typescript
// 使用公曆日期創建
const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0);
const qimenPan = QimenUtil.create(lunar);

// 打印結果
QimenUtil.prettyLog(qimenPan);
```

輸出示例：

```
2024-05-10 14:30:00
甲辰年四月初三午時
立夏 (2024-05-05 08:10:00)
谷雨 (2024-04-19 21:59:00)
上元陽遁四局

┌──────┬──────┬──────┬──────┐
│  時  │  日  │  月  │  年  │
│  己  │  癸  │  己  │  甲  │
│  未  │  未  │  巳  │  辰  │
└──────┴──────┴──────┴──────┘

巽四宮: 戊+地盤干 太陰 天心 驚門
離九宮: 癸+地盤干 九地 天英 開門
坤二宮: 丙+地盤干 六合 天芮 景門
震三宮: 乙+地盤干 騰蛇 天輔 傷門
兌七宮: 辛+地盤干 值符 天柱 杜門
艮八宮: 壬+地盤干 玄武 天任 生門
坎一宮: 丁+地盤干 六合 天蓬 休門
乾六宮: 庚+地盤干 白虎 天冲 死門

值符：甲午辛 天柱落乾六宮
值使：驚門落巽四宮
天乙：天禽
```

## 4. 訪問盤面數據

```typescript
// 基礎信息
console.log(qimenPan.遁); // "陽遁"
console.log(qimenPan.局數); // 4
console.log(qimenPan.八字); // ["甲辰", "己巳", "癸未", "己未"]

// 值符值使
console.log(qimenPan.值符星); // "天柱"
console.log(qimenPan.值符落宮); // "乾六宮"
console.log(qimenPan.值使門); // "驚門"
console.log(qimenPan.值使落宮); // "巽四宮"

// 輔助信息
console.log(qimenPan.空亡); // ["辰", "巳"]
console.log(qimenPan.驛馬); // "巳"
console.log(qimenPan.天乙星); // "天禽"

// 九宮信息
const 坎一宮 = qimenPan.九宮[0];
console.log(坎一宮.九星); // "天蓬"
console.log(坎一宮.八門); // "休門"
console.log(坎一宮.八神); // "六合"
console.log(坎一宮.天盤干); // ["丁"]
console.log(坎一宮.地盤干); // ["丁"]
```

## 5. 使用當前時間

```typescript
import {Solar} from "lunar-typescript";

// 獲取當前時間
const solar = Solar.fromDate(new Date());
const lunar = solar.getLunar();

// 創建排盤
const qimenPan = QimenUtil.create(lunar);
```

## 6. 格式化輸出

```typescript
import {QimenFormatUtil} from "./qimen/FormatUtil";

// 格式化局數
const 局名 = QimenFormatUtil.局名(qimenPan.遁, qimenPan.局數);
console.log(局名); // "陽遁四局"

// 格式化數字
const 中文局數 = QimenFormatUtil.中文局數(qimenPan.局數);
console.log(中文局數); // "四"
```

## 7. 遍歷九宮

```typescript
// 遍歷所有宮位
qimenPan.九宮.forEach((cell, index) => {
    // 跳過中五宮（索引4）
    if (index === 4) return;

    console.log(`${cell.宮位}：`);
    console.log(`  天盤：${cell.天盤干.join("+")}`);
    console.log(`  地盤：${cell.地盤干.join("+")}`);
    console.log(`  九星：${cell.九星}`);
    console.log(`  八門：${cell.八門}`);
    console.log(`  八神：${cell.八神}`);

    if (cell.是否空亡) console.log("  ⚠️ 空亡");
    if (cell.是否驛馬) console.log("  🐎 驛馬");
});
```

## 8. 單獨使用算法函數

```typescript
// 判斷陰陽遁
const 遁 = QimenUtil.陰遁或陽遁("立夏"); // "陽遁"

// 確定上中下元
const 上中下元 = QimenUtil.上中下元("癸未"); // "上元"

// 查詢局數
const 局數 = QimenUtil.局數("立夏", "上元"); // 4

// 計算旬首
const 旬首 = QimenUtil.旬首("己未"); // "甲午"

// 查詢遁干
const 遁干 = QimenUtil.遁干("甲午"); // "辛"

// 查詢空亡
const 空亡 = QimenUtil.空亡("甲午"); // ["辰", "巳"]

// 查詢驛馬
const 驛馬 = QimenUtil.驛馬("未"); // "巳"
```

## 9. 在 React 中使用

```typescript
import {useState, useEffect} from "react";
import {QimenUtil} from "./qimen/QimenUtil";
import {Lunar, Solar} from "lunar-typescript";

function QimenPan() {
    const [pan, setPan] = useState(null);

    useEffect(() => {
        const solar = Solar.fromDate(new Date());
        const lunar = solar.getLunar();
        const qimenPan = QimenUtil.create(lunar);
        setPan(qimenPan);
    }, []);

    if (!pan) return <div>載入中...</div>;

    return (
        <div>
            <h1>
                {pan.遁}
                {QimenFormatUtil.中文局數(pan.局數)}局
            </h1>
            <p>
                值符：{pan.值符星}落{pan.值符落宮}
            </p>
            <p>
                值使：{pan.值使門}落{pan.值使落宮}
            </p>
            {/* 更多內容... */}
        </div>
    );
}
```

## 10. 下一步

現在您已經掌握了基礎用法！繼續學習：

-   📚 [完整 API 文檔](./EXAMPLES.md) - 更多使用示例
-   🧮 [算法詳解](./ALGORITHM.md) - 深入了解排盤算法
-   🧪 [測試用例](./src/qimen/__tests__/QimenUtil.test.ts) - 查看所有測試
-   🌐 [在線演示](https://qm.9days.io/) - 體驗完整應用

## 常見問題

### Q: 如何指定特定時辰？

A: 時辰對應的小時數：

-   子時：0-1 時
-   丑時：2-3 時
-   寅時：4-5 時
-   卯時：6-7 時
-   辰時：8-9 時
-   巳時：10-11 時
-   午時：12-13 時
-   未時：14-15 時
-   申時：16-17 時
-   酉時：18-19 時
-   戌時：20-21 時
-   亥時：22-23 時

```typescript
// 午時（12-13點）
const lunar = Lunar.fromYmdHms(2024, 5, 10, 12, 0, 0);
```

### Q: 如何處理早子時和夜子時？

A: lunar-typescript 會自動處理子時分界問題。23:00-0:59 為子時。

### Q: 排盤結果與傳統手工排盤不一致？

A: 請檢查：

1. 節氣是否準確（系統使用真太陽時計算）
2. 時辰劃分是否一致
3. 是否使用了相同的上中下元劃分法

如果仍有問題，請提交 Issue 並附上詳細數據。

### Q: 如何導出排盤結果？

A: 可以序列化為 JSON：

```typescript
const json = JSON.stringify(qimenPan, null, 2);
console.log(json);
```

### Q: 性能如何優化？

A:

1. 使用緩存避免重複計算
2. 按需調用單獨的函數而非完整排盤
3. 在 Web Worker 中計算（避免阻塞主線程）

---

🎉 恭喜！您已經完成快速入門。開始探索奇門遁甲的奧秘吧！
