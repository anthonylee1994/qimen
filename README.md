# 奇門遁甲排盤系統

> 完整的奇門遁甲排盤算法實現與 Web 應用

🔗 **在線體驗**：https://qm.9days.io/

## 項目簡介

本項目是一套完整的奇門遁甲排盤系統，包含：

- ✅ 完整的排盤算法實現
- ✅ 準確的農曆與節氣計算
- ✅ 現代化的 Web 界面
- ✅ 詳盡的算法文檔
- ✅ 完整的單元測試

## 核心功能

### 排盤算法

系統能夠準確計算以下要素：

- **基礎信息**：八字、節氣、陰陽遁、局數
- **地盤布局**：三奇六儀地盤排列
- **天盤布局**：天盤干轉動計算
- **九宮要素**：九星、八門、八神完整排布
- **輔助信息**：值符、值使、旬首、遁干、空亡、驛馬、天乙星、旺相休囚死

### 使用示例

```typescript
import { QimenUtil } from './qimen/QimenUtil'
import { Lunar } from 'lunar-typescript'

// 創建農曆時間對象
const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0)

// 生成奇門盤
const qimenPan = QimenUtil.create(lunar)

// 打印排盤結果
QimenUtil.prettyLog(qimenPan)

// 訪問盤面信息
console.log(qimenPan.遁)        // "陽遁" 或 "陰遁"
console.log(qimenPan.局數)      // 1-9
console.log(qimenPan.值符星)    // "天蓬", "天任" 等
console.log(qimenPan.九宮[0])   // 坎一宮的完整信息
```

### 九宮數據結構

每個宮位包含以下信息：

```typescript
interface QimenCell {
  八神: 八神           // "值符", "騰蛇", "太陰" 等
  九星: 九星           // "天蓬", "天任", "天冲" 等
  八門: 八門           // "休門", "生門", "傷門" 等
  天盤干: 天干[]       // 天盤干支
  地盤干: 天干[]       // 地盤干支（三奇六儀）
  宮位: 宮位           // "坎一宮", "坤二宮" 等
  是否空亡: boolean    // 該宮是否有空亡
  是否驛馬: boolean    // 該宮是否有驛馬
}
```

## 項目結構

```
qimen/
├── src/
│   ├── qimen/                 # 核心算法
│   │   ├── QimenUtil.ts      # 主算法實現
│   │   ├── type.ts           # 類型定義
│   │   ├── dictionary.ts     # 查表數據
│   │   ├── LunarUtil.ts      # 農曆工具
│   │   ├── FormatUtil.ts     # 格式化工具
│   │   └── __tests__/        # 單元測試
│   │       └── QimenUtil.test.ts
│   ├── component/            # React 組件
│   └── util/                 # 輔助工具
├── ALGORITHM.md              # 算法完整文檔
├── package.json
└── README.md
```

## 安裝與運行

### 環境要求

- Node.js >= 16
- pnpm (推薦) 或 npm

### 安裝依賴

```bash
pnpm install
```

### 運行開發服務器

```bash
pnpm dev
```

### 運行測試

```bash
pnpm test
```

### 構建生產版本

```bash
pnpm build
```

## 算法文檔

完整的算法說明請查看 [ALGORITHM.md](./ALGORITHM.md)，包含：

- 🔍 **詳細的計算步驟**：每一步都有清晰的說明和代碼示例
- 📊 **完整的查表數據**：所有需要的對照表
- 🎯 **特殊規則說明**：中五宮寄宮、甲時規則等
- 📝 **完整示例**：從輸入到輸出的完整計算過程
- ✅ **算法驗證**：180+ 測試用例覆蓋

## API 文檔

### QimenUtil 對象

```typescript
QimenUtil = {
  // 主函數
  create(lunar: Lunar): QimenPan           // 生成完整奇門盤
  prettyLog(qimenPan: QimenPan): void     // 控制台打印排盤
  
  // 輔助函數
  陰遁或陽遁(節氣: 節氣): 遁
  上中下元(日干支: 六十甲子): 上中下元
  局數(節氣: 節氣, 上中下元: 上中下元): 局數
  旬首(時干支: 六十甲子): 旬首
  遁干(旬首: 旬首): 六儀
  地盤干(遁: 遁, 局數: 局數): 三奇六儀[]
  天盤干(地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): (三奇六儀 | undefined)[]
  八神(地盤干: 三奇六儀[], 遁: 遁, 遁干: 六儀, 時干: 天干): (八神 | undefined)[]
  九星(地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): (九星 | undefined)[]
  值符落宮(地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): [九星, 宮位]
  值使門(地盤干: 三奇六儀[], 遁: 遁, 遁干: 六儀, 時干: 天干): [八門, 宮位]
  八門(值使門: 八門, 宮位: 宮位): (八門 | undefined)[]
  空亡(旬首: 旬首): [地支, 地支]
  驛馬(時支: 地支): 四驛馬
  天乙(天盤干: (三奇六儀 | undefined)[], 九星: (九星 | undefined)[], 時干: 天干): 九星
  旺相休囚死(月支: 地支): [五行, 五行, 五行, 五行, 五行]
}
```

### LunarUtil 對象

```typescript
LunarUtil = {
  時干支(lunar: Lunar): 六十甲子
  日干支(lunar: Lunar): 六十甲子
  月干支(lunar: Lunar): 六十甲子
  年干支(lunar: Lunar): 六十甲子
  八字(lunar: Lunar): 八字
  節氣(lunar: Lunar): JieQi
}
```

### FormatUtil 對象

```typescript
QimenFormatUtil = {
  中文局數(局數: 局數): string    // 1 → "一"
  局名(遁: 遁, 局數: 局數): string // "陽遁五局"
}
```

## 技術棧

- **核心算法**：TypeScript
- **前端框架**：React 18
- **UI 庫**：Chakra UI
- **農曆計算**：lunar-typescript
- **構建工具**：Vite
- **測試框架**：Jest
- **代碼規範**：ESLint + Prettier

## 測試覆蓋

項目包含完整的單元測試：

- ✅ 18種陰陽遁組合的地盤干測試
- ✅ 180個天盤干測試案例
- ✅ 120個八神測試案例  
- ✅ 90個九星測試案例
- ✅ 88個八門測試案例
- ✅ 所有輔助功能測試（空亡、驛馬等）

查看測試：`src/qimen/__tests__/QimenUtil.test.ts`

## 特色說明

### 1. 算法準確性

- 基於傳統奇門遁甲典籍
- 經過180+測試用例驗證
- 與傳統手工排盤結果一致

### 2. 代碼質量

- TypeScript 強類型保證
- 完整的類型定義
- 清晰的函數命名（使用中文）
- 詳盡的注釋說明

### 3. 可維護性

- 模塊化設計
- 數據與邏輯分離
- 完整的文檔
- 單元測試覆蓋

### 4. 使用體驗

- 現代化界面
- 響應式設計
- 移動端友好
- PWA 支持

## 貢獻指南

歡迎提交 Issue 和 Pull Request！

### 開發流程

1. Fork 本倉庫
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 代碼規範

- 使用 TypeScript
- 遵循 ESLint 規則
- 添加必要的測試
- 更新相關文檔

## 許可證

本項目採用 MIT 許可證。詳見 [LICENSE](./LICENSE) 文件。

## 致謝

- 感謝 [lunar-typescript](https://github.com/6tail/lunar-typescript) 提供農曆計算支持
- 感謝所有貢獻者和使用者

## 聯繫方式

- 項目主頁：https://qm.9days.io/
- 問題反饋：請在 GitHub Issues 中提交

---

**⚠️ 重要說明**

本項目旨在保存和傳承奇門遁甲這門傳統術數的完整算法。詳細的算法文檔 [ALGORITHM.md](./ALGORITHM.md) 記錄了所有計算細節，以防失傳。

如果您發現任何算法錯誤或有改進建議，請務必提交 Issue 或 Pull Request。讓我們一起保護和傳承這份文化遺產！
