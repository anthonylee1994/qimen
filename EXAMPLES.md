# 奇門遁甲排盤 API 使用示例

本文檔提供詳細的 API 使用示例，幫助開發者快速上手。

## 目錄

- [基礎使用](#基礎使用)
- [創建排盤](#創建排盤)
- [訪問盤面信息](#訪問盤面信息)
- [格式化輸出](#格式化輸出)
- [高級用法](#高級用法)
- [實用場景](#實用場景)

---

## 基礎使用

### 安裝依賴

```bash
pnpm add lunar-typescript
```

### 導入模塊

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { LunarUtil } from './qimen/LunarUtil'
import { QimenFormatUtil } from './qimen/FormatUtil'
import { Lunar } from 'lunar-typescript'
```

---

## 創建排盤

### 示例 1：使用公曆日期創建排盤

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar } from 'lunar-typescript'

// 創建農曆對象（公曆：2024年5月10日 14:30）
const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0)

// 生成奇門盤
const qimenPan = QimenUtil.create(lunar)

// 控制台打印完整排盤
QimenUtil.prettyLog(qimenPan)
```

### 示例 2：使用當前時間創建排盤

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar, Solar } from 'lunar-typescript'

// 獲取當前時間
const solar = Solar.fromDate(new Date())
const lunar = solar.getLunar()

// 生成奇門盤
const qimenPan = QimenUtil.create(lunar)
```

### 示例 3：使用農曆日期創建排盤

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar } from 'lunar-typescript'

// 農曆：2024年四月初三 午時
const lunar = Lunar.fromYmdHms(2024, 4, 3, 12, 0, 0)

// 生成奇門盤
const qimenPan = QimenUtil.create(lunar)
```

---

## 訪問盤面信息

### 基礎信息

```typescript
const qimenPan = QimenUtil.create(lunar)

// 八字
const [年柱, 月柱, 日柱, 時柱] = qimenPan.八字
console.log(`年柱：${年柱}`)  // "甲辰"
console.log(`月柱：${月柱}`)  // "己巳"
console.log(`日柱：${日柱}`)  // "癸未"
console.log(`時柱：${時柱}`)  // "己未"

// 節氣
const 節氣 = qimenPan.節氣.getName()
console.log(`當前節氣：${節氣}`)  // "立夏"

// 陰陽遁與局數
console.log(`${qimenPan.上中下元}${qimenPan.遁}${QimenFormatUtil.中文局數(qimenPan.局數)}局`)
// "上元陽遁四局"
```

### 值符值使信息

```typescript
// 旬首與遁干
console.log(`旬首：${qimenPan.旬首}`)      // "甲午"
console.log(`遁干：${qimenPan.遁干}`)      // "辛"

// 值符
console.log(`值符星：${qimenPan.值符星}`)  // "天柱"
console.log(`值符落宮：${qimenPan.值符落宮}`)  // "乾六宮"

// 值使
console.log(`值使門：${qimenPan.值使門}`)  // "驚門"
console.log(`值使落宮：${qimenPan.值使落宮}`)  // "巽四宮"

// 天乙星
console.log(`天乙星：${qimenPan.天乙星}`)  // "天禽"
```

### 輔助信息

```typescript
// 空亡
const [空亡1, 空亡2] = qimenPan.空亡
console.log(`空亡：${空亡1}、${空亡2}`)  // "辰、巳"

// 驛馬
console.log(`驛馬：${qimenPan.驛馬}`)  // "巳"

// 旺相休囚死
const [旺, 相, 休, 囚, 死] = qimenPan.旺相休囚死
console.log(`旺：${旺}，相：${相}，休：${休}，囚：${囚}，死：${死}`)
// "旺：火，相：土，休：木，囚：水，死：金"
```

### 九宮信息

```typescript
// 訪問特定宮位
const 坎一宮 = qimenPan.九宮[0]  // 坎一宮
const 坤二宮 = qimenPan.九宮[1]  // 坤二宮
const 震三宮 = qimenPan.九宮[2]  // 震三宮
// ... 以此類推

// 打印坎一宮信息
console.log('坎一宮信息：')
console.log(`  宮位：${坎一宮.宮位}`)
console.log(`  天盤干：${坎一宮.天盤干.join('、')}`)
console.log(`  地盤干：${坎一宮.地盤干.join('、')}`)
console.log(`  九星：${坎一宮.九星}`)
console.log(`  八門：${坎一宮.八門}`)
console.log(`  八神：${坎一宮.八神}`)
console.log(`  是否空亡：${坎一宮.是否空亡}`)
console.log(`  是否驛馬：${坎一宮.是否驛馬}`)
```

### 遍歷所有宮位

```typescript
// 按飛星序遍歷（坎一、坤二、震三...）
qimenPan.九宮.forEach((cell, index) => {
  if (index === 4) {
    console.log('中五宮（無實體）')
    return
  }
  
  console.log(`\n${cell.宮位}：`)
  console.log(`  天盤：${cell.天盤干.join('、')}`)
  console.log(`  地盤：${cell.地盤干.join('、')}`)
  console.log(`  星：${cell.九星}`)
  console.log(`  門：${cell.八門}`)
  console.log(`  神：${cell.八神}`)
})
```

---

## 格式化輸出

### 打印九宮格式

```typescript
import { QimenUtil } from './qimen/QimenUtil'

// 使用內建的格式化函數
QimenUtil.prettyLog(qimenPan)

/* 輸出示例：
2024-05-10 14:30:00
甲辰年四月初三午時
立夏 (2024-05-05 08:10:00)
谷雨 (2024-04-19 21:59:00)
上元陽遁四局

┌────────────────┬────────────────┬────────────────┐
│  時    日    月    年  │
│  己    癸    己    甲  │
│  未    未    巳    辰  │
├────────────────┴────────────────┴────────────────┤
│  巽四宮          離九宮          坤二宮          │
│  戊+地盤干       癸+地盤干       丙+地盤干       │
│  太陰 天心 驚門  九地 天英 開門  六合 天芮 景門  │
├────────────────┼────────────────┼────────────────┤
│  震三宮          中五宮          兌七宮          │
│  乙+地盤干       --寄坤二--      辛+地盤干       │
│  騰蛇 天輔 傷門  --寄--         值符 天柱 杜門  │
├────────────────┼────────────────┼────────────────┤
│  艮八宮          坎一宮          乾六宮          │
│  壬+地盤干       丁+地盤干       庚+地盤干       │
│  玄武 天任 生門  六合 天蓬 休門  白虎 天冲 死門  │
└────────────────┴────────────────┴────────────────┘

值符：甲午辛 天柱落乾六宮
值使：驚門落巽四宮
天乙：天禽

旺：火  相：土  休：木  囚：水  死：金
*/
```

### 自定義格式化

```typescript
// 格式化局名
const 局名 = QimenFormatUtil.局名(qimenPan.遁, qimenPan.局數)
console.log(局名)  // "陽遁四局"

// 格式化八字
function format八字(八字: 八字): string {
  const [年, 月, 日, 時] = 八字
  return `${年}年 ${月}月 ${日}日 ${時}時`
}

console.log(format八字(qimenPan.八字))
// "甲辰年 己巳月 癸未日 己未時"

// 格式化宮位信息
function format宮位(cell: QimenCell): string {
  const parts = []
  
  if (cell.天盤干.length > 0) {
    parts.push(`天盤：${cell.天盤干.join('+')}`)
  }
  
  parts.push(`地盤：${cell.地盤干.join('+')}`)
  parts.push(`${cell.九星} ${cell.八門} ${cell.八神}`)
  
  if (cell.是否空亡) parts.push('(空亡)')
  if (cell.是否驛馬) parts.push('(驛馬)')
  
  return parts.join(' ')
}

qimenPan.九宮.forEach(cell => {
  if (cell.宮位 !== '中五宮') {
    console.log(`${cell.宮位}：${format宮位(cell)}`)
  }
})
```

---

## 高級用法

### 單獨使用各個計算函數

```typescript
import { QimenUtil } from './qimen/QimenUtil'

// 1. 判斷陰陽遁
const 遁 = QimenUtil.陰遁或陽遁("立夏")  // "陽遁"

// 2. 確定上中下元
const 上中下元 = QimenUtil.上中下元("癸未")  // "上元"

// 3. 查詢局數
const 局數 = QimenUtil.局數("立夏", "上元")  // 4

// 4. 計算旬首
const 旬首 = QimenUtil.旬首("己未")  // "甲午"

// 5. 查詢遁干
const 遁干 = QimenUtil.遁干("甲午")  // "辛"

// 6. 計算地盤干
const 地盤干 = QimenUtil.地盤干("陽遁", 4)
// ["丁", "丙", "乙", "戊", "己", "庚", "辛", "壬", "癸"]

// 7. 計算天盤干
const 天盤干 = QimenUtil.天盤干(地盤干, "辛", "己")
// ["壬", "辛", "庚", "己", undefined, "戊", "乙", "丙", "丁"]

// 8. 計算九星
const 九星 = QimenUtil.九星(地盤干, "辛", "己")
// ["天任", "天柱", "天芮", "天心", undefined, "天禽", "天輔", "天冲", "天英"]

// 9. 計算八門
const [值使門, 值使落宮] = QimenUtil.值使門(地盤干, "陽遁", "辛", "己")
const 八門 = QimenUtil.八門(值使門, 值使落宮)
// ["生門", "景門", "傷門", "驚門", undefined, "死門", "杜門", "休門", "開門"]

// 10. 計算八神
const 八神 = QimenUtil.八神(地盤干, "陽遁", "辛", "己")
// ["六合", "九天", "騰蛇", "太陰", undefined, "白虎", "值符", "玄武", "九地"]

// 11. 計算值符落宮
const [值符星, 值符落宮位] = QimenUtil.值符落宮(地盤干, "辛", "己")
// ["天柱", "乾六宮"]

// 12. 計算天乙星
const 天乙星 = QimenUtil.天乙(天盤干, 九星, "己")  // "天禽"

// 13. 查詢空亡
const 空亡 = QimenUtil.空亡("甲午")  // ["辰", "巳"]

// 14. 查詢驛馬
const 驛馬 = QimenUtil.驛馬("未")  // "巳"

// 15. 查詢旺相休囚死
const 旺相休囚死 = QimenUtil.旺相休囚死("巳")
// ["火", "土", "木", "水", "金"]
```

### 農曆工具使用

```typescript
import { LunarUtil } from './qimen/LunarUtil'
import { Lunar } from 'lunar-typescript'

const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0)

// 獲取年月日時干支
const 年干支 = LunarUtil.年干支(lunar)  // "甲辰"
const 月干支 = LunarUtil.月干支(lunar)  // "己巳"
const 日干支 = LunarUtil.日干支(lunar)  // "癸未"
const 時干支 = LunarUtil.時干支(lunar)  // "己未"

// 獲取八字
const 八字 = LunarUtil.八字(lunar)
// ["甲辰", "己巳", "癸未", "己未"]

// 獲取節氣
const 節氣 = LunarUtil.節氣(lunar)
console.log(節氣.getName())  // "立夏"
console.log(節氣.getSolar().toYmdHms())  // "2024-05-05 08:10:00"
```

---

## 實用場景

### 場景 1：批量計算多個時間的排盤

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar } from 'lunar-typescript'

// 批量計算一天內每個時辰的排盤
function calculate每時辰排盤(year: number, month: number, day: number) {
  const results = []
  
  // 12個時辰
  const 時辰 = [
    { name: '子時', hour: 0 },
    { name: '丑時', hour: 2 },
    { name: '寅時', hour: 4 },
    { name: '卯時', hour: 6 },
    { name: '辰時', hour: 8 },
    { name: '巳時', hour: 10 },
    { name: '午時', hour: 12 },
    { name: '未時', hour: 14 },
    { name: '申時', hour: 16 },
    { name: '酉時', hour: 18 },
    { name: '戌時', hour: 20 },
    { name: '亥時', hour: 22 },
  ]
  
  時辰.forEach(({ name, hour }) => {
    const lunar = Lunar.fromYmdHms(year, month, day, hour, 0, 0)
    const qimenPan = QimenUtil.create(lunar)
    
    results.push({
      時辰: name,
      遁: qimenPan.遁,
      局數: qimenPan.局數,
      值符星: qimenPan.值符星,
      值符落宮: qimenPan.值符落宮,
      值使門: qimenPan.值使門,
      值使落宮: qimenPan.值使落宮,
    })
  })
  
  return results
}

// 使用示例
const 結果 = calculate每時辰排盤(2024, 5, 10)
console.table(結果)
```

### 場景 2：查找特定條件的時間

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar } from 'lunar-typescript'

// 查找值符落某宮的時間
function find值符落宮時間(
  year: number,
  month: number,
  startDay: number,
  endDay: number,
  目標宮位: 宮位
) {
  const results = []
  
  for (let day = startDay; day <= endDay; day++) {
    for (let hour = 0; hour < 24; hour += 2) {
      try {
        const lunar = Lunar.fromYmdHms(year, month, day, hour, 0, 0)
        const qimenPan = QimenUtil.create(lunar)
        
        if (qimenPan.值符落宮 === 目標宮位) {
          results.push({
            日期: lunar.getSolar().toYmdHms(),
            八字: qimenPan.八字,
            遁: qimenPan.遁,
            局數: qimenPan.局數,
            值符星: qimenPan.值符星,
          })
        }
      } catch (e) {
        // 處理無效日期
      }
    }
  }
  
  return results
}

// 使用示例：查找5月值符落乾六宮的時間
const 結果 = find值符落宮時間(2024, 5, 1, 31, "乾六宮")
console.log(`找到 ${結果.length} 個時間`)
結果.forEach(r => {
  console.log(`${r.日期} - ${r.遁}${r.局數}局 ${r.值符星}`)
})
```

### 場景 3：分析九宮特徵

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import type { QimenCell } from './qimen/type'

// 分析宮位吉凶特徵
function analyze宮位特徵(cell: QimenCell) {
  const features = []
  
  // 判斷吉門
  const 吉門 = ['開門', '休門', '生門']
  if (吉門.includes(cell.八門)) {
    features.push('吉門')
  }
  
  // 判斷凶門
  const 兇門 = ['死門', '驚門', '傷門']
  if (兇門.includes(cell.八門)) {
    features.push('凶門')
  }
  
  // 判斷吉星
  const 吉星 = ['天心', '天任', '天輔']
  if (吉星.includes(cell.九星)) {
    features.push('吉星')
  }
  
  // 判斷凶星
  const 兇星 = ['天蓬', '天芮']
  if (兇星.includes(cell.九星)) {
    features.push('凶星')
  }
  
  // 空亡和驛馬
  if (cell.是否空亡) features.push('空亡')
  if (cell.是否驛馬) features.push('驛馬')
  
  // 伏吟（天地盤相同）
  if (cell.天盤干.length === 1 && 
      cell.地盤干.length === 1 && 
      cell.天盤干[0] === cell.地盤干[0]) {
    features.push('伏吟')
  }
  
  return features
}

// 使用示例
const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0)
const qimenPan = QimenUtil.create(lunar)

qimenPan.九宮.forEach((cell, index) => {
  if (index !== 4) {  // 跳過中五宮
    const 特徵 = analyze宮位特徵(cell)
    console.log(`${cell.宮位}：${特徵.join('、') || '平'}`)
  }
})
```

### 場景 4：導出為 JSON

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar } from 'lunar-typescript'

// 將排盤結果序列化為 JSON
function exportToJSON(qimenPan: QimenPan) {
  return JSON.stringify({
    時間: {
      公曆: qimenPan.lunar.getSolar().toYmdHms(),
      農曆: qimenPan.lunar.toString(),
      八字: qimenPan.八字,
      節氣: qimenPan.節氣.getName(),
    },
    局數信息: {
      上中下元: qimenPan.上中下元,
      遁: qimenPan.遁,
      局數: qimenPan.局數,
      旬首: qimenPan.旬首,
      遁干: qimenPan.遁干,
    },
    值符值使: {
      值符星: qimenPan.值符星,
      值符落宮: qimenPan.值符落宮,
      值使門: qimenPan.值使門,
      值使落宮: qimenPan.值使落宮,
      天乙星: qimenPan.天乙星,
    },
    輔助信息: {
      空亡: qimenPan.空亡,
      驛馬: qimenPan.驛馬,
      旺相休囚死: qimenPan.旺相休囚死,
    },
    九宮: qimenPan.九宮.map(cell => ({
      宮位: cell.宮位,
      天盤干: cell.天盤干,
      地盤干: cell.地盤干,
      九星: cell.九星,
      八門: cell.八門,
      八神: cell.八神,
      是否空亡: cell.是否空亡,
      是否驛馬: cell.是否驛馬,
    }))
  }, null, 2)
}

// 使用示例
const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0)
const qimenPan = QimenUtil.create(lunar)
const json = exportToJSON(qimenPan)

// 保存到文件或發送到 API
console.log(json)
```

### 場景 5：React Hook 使用

```typescript
import { useState, useEffect } from 'react'
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar, Solar } from 'lunar-typescript'
import type { QimenPan } from './qimen/type'

// 自定義 Hook：實時更新的奇門盤
function useQimenPan(updateInterval: number = 60000) {
  const [qimenPan, setQimenPan] = useState<QimenPan | null>(null)
  
  useEffect(() => {
    const update = () => {
      const solar = Solar.fromDate(new Date())
      const lunar = solar.getLunar()
      const pan = QimenUtil.create(lunar)
      setQimenPan(pan)
    }
    
    // 初始更新
    update()
    
    // 定時更新
    const timer = setInterval(update, updateInterval)
    
    return () => clearInterval(timer)
  }, [updateInterval])
  
  return qimenPan
}

// 在組件中使用
function QimenPanDisplay() {
  const qimenPan = useQimenPan(60000)  // 每分鐘更新一次
  
  if (!qimenPan) return <div>載入中...</div>
  
  return (
    <div>
      <h2>{qimenPan.遁}{QimenFormatUtil.中文局數(qimenPan.局數)}局</h2>
      <p>值符：{qimenPan.值符星}落{qimenPan.值符落宮}</p>
      <p>值使：{qimenPan.值使門}落{qimenPan.值使落宮}</p>
      {/* 更多UI... */}
    </div>
  )
}
```

---

## 錯誤處理

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar } from 'lunar-typescript'

try {
  // 無效的日期可能拋出異常
  const lunar = Lunar.fromYmdHms(2024, 13, 32, 25, 61, 61)
  const qimenPan = QimenUtil.create(lunar)
} catch (error) {
  console.error('創建排盤失敗：', error)
  // 處理錯誤...
}
```

---

## 性能優化建議

### 1. 緩存計算結果

```typescript
const cache = new Map<string, QimenPan>()

function getCachedQimenPan(year: number, month: number, day: number, hour: number) {
  const key = `${year}-${month}-${day}-${hour}`
  
  if (!cache.has(key)) {
    const lunar = Lunar.fromYmdHms(year, month, day, hour, 0, 0)
    const pan = QimenUtil.create(lunar)
    cache.set(key, pan)
  }
  
  return cache.get(key)!
}
```

### 2. 按需計算

如果只需要部分信息，可以單獨調用對應的函數，而不是創建完整的排盤：

```typescript
// 只需要判斷陰陽遁
const 遁 = QimenUtil.陰遁或陽遁("立夏")

// 只需要局數
const 局數 = QimenUtil.局數("立夏", "上元")
```

---

## 更多資源

- [算法詳細文檔](./ALGORITHM.md)
- [項目 README](./README.md)
- [單元測試](./src/qimen/__tests__/QimenUtil.test.ts)
- [在線演示](https://qm.9days.io/)

---

如有任何問題或建議，歡迎提交 Issue！
