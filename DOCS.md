# 奇門遁甲排盤系統 - 文檔導航

歡迎使用奇門遁甲排盤系統！本項目提供完整的算法實現和詳細文檔。

## 📚 文檔索引

### 🚀 新手入門

| 文檔 | 說明 | 適合對象 |
|------|------|---------|
| [README.md](./README.md) | 項目介紹與快速開始 | 所有用戶 |
| [QUICKSTART.md](./QUICKSTART.md) | 10分鐘快速入門教程 | 新手開發者 |
| [EXAMPLES.md](./EXAMPLES.md) | 詳細使用示例與場景 | 開發者 |

### 📖 深入學習

| 文檔 | 說明 | 適合對象 |
|------|------|---------|
| [ALGORITHM.md](./ALGORITHM.md) | 完整算法文檔（核心） | 算法研究者、傳承者 |
| [REFERENCE.md](./REFERENCE.md) | 算法速查表 | 開發者、研究者 |

### 🛠️ 開發相關

| 文檔 | 說明 | 適合對象 |
|------|------|---------|
| [CONTRIBUTING.md](./CONTRIBUTING.md) | 貢獻指南 | 貢獻者 |
| [LICENSE](./LICENSE) | MIT 開源協議 | 所有用戶 |

---

## 🎯 根據需求選擇文檔

### 我想快速使用

➡️ [QUICKSTART.md](./QUICKSTART.md)

- ✅ 10分鐘上手
- ✅ 簡單明了的示例
- ✅ 常見問題解答

### 我想深入了解用法

➡️ [EXAMPLES.md](./EXAMPLES.md)

- ✅ 完整的 API 說明
- ✅ 實用場景示例
- ✅ React Hook 集成
- ✅ 性能優化建議

### 我想理解算法原理

➡️ [ALGORITHM.md](./ALGORITHM.md)

- ✅ 逐步詳解排盤算法
- ✅ 所有查表數據
- ✅ 特殊規則說明
- ✅ 完整計算示例

這是**最重要**的文檔，旨在保存完整算法以防失傳。

### 我需要快速查閱

➡️ [REFERENCE.md](./REFERENCE.md)

- ✅ 排盤流程圖
- ✅ 核心口訣
- ✅ 所有序列表
- ✅ 計算公式
- ✅ 特殊規則

### 我想貢獻代碼

➡️ [CONTRIBUTING.md](./CONTRIBUTING.md)

- ✅ 貢獻流程
- ✅ 代碼規範
- ✅ 測試要求
- ✅ 提交規範

---

## 📦 項目結構

```
qimen/
├── 📄 README.md              # 項目介紹
├── 📄 QUICKSTART.md          # 快速入門
├── 📄 EXAMPLES.md            # 使用示例
├── 📄 ALGORITHM.md           # 算法文檔（核心）
├── 📄 REFERENCE.md           # 速查表
├── 📄 CONTRIBUTING.md        # 貢獻指南
├── 📄 LICENSE                # 開源協議
├── 📄 DOCS.md                # 本文件
│
├── src/
│   ├── qimen/                # 核心算法包
│   │   ├── QimenUtil.ts     # 主算法
│   │   ├── type.ts          # 類型定義
│   │   ├── dictionary.ts    # 查表數據
│   │   ├── LunarUtil.ts     # 農曆工具
│   │   ├── FormatUtil.ts    # 格式化工具
│   │   ├── index.ts         # 入口文件
│   │   └── __tests__/       # 測試文件
│   │       ├── QimenUtil.test.ts
│   │       ├── LunarUtil.test.ts
│   │       └── FormatUtil.test.ts
│   │
│   ├── component/           # React 組件
│   │   ├── QimenPanDisplay/ # 排盤顯示組件
│   │   └── ...
│   │
│   ├── util/                # 輔助工具
│   └── scripts/             # 腳本工具
│       └── validate.ts      # 驗證腳本
│
├── public/                  # 靜態資源
├── package.json             # 項目配置
├── tsconfig.json            # TS 配置
└── vite.config.ts           # Vite 配置
```

---

## 🎓 學習路徑

### 路徑 1：快速使用者

```
1. README.md（了解項目）
   ↓
2. QUICKSTART.md（10分鐘上手）
   ↓
3. EXAMPLES.md（查看更多示例）
   ↓
4. 開始使用！
```

### 路徑 2：算法學習者

```
1. README.md（了解項目）
   ↓
2. ALGORITHM.md（深入學習算法）
   ↓
3. REFERENCE.md（速查表）
   ↓
4. 測試文件（查看驗證案例）
   ↓
5. 理解完整算法！
```

### 路徑 3：貢獻者

```
1. README.md（了解項目）
   ↓
2. CONTRIBUTING.md（貢獻指南）
   ↓
3. ALGORITHM.md（理解算法）
   ↓
4. 源代碼（閱讀實現）
   ↓
5. 測試文件（學習測試）
   ↓
6. 開始貢獻！
```

---

## 🔥 核心文檔：ALGORITHM.md

**[ALGORITHM.md](./ALGORITHM.md)** 是本項目最重要的文檔，包含：

### 完整內容

1. **核心概念** - 奇門遁甲基本要素與九宮格式
2. **基礎數據結構** - 完整的 TypeScript 類型定義
3. **查表數據** - 所有必需的對照表（14個）
4. **排盤算法流程** - 主流程圖與步驟概覽
5. **詳細計算步驟** - 16個步驟的逐一說明
6. **特殊規則** - 4個關鍵特殊規則
7. **完整示例** - 從輸入到輸出的實例演算

### 為什麼重要？

這份文檔的目標是**保存完整算法以防失傳**。它包含：

- ✅ 可執行的算法描述
- ✅ 所有查表數據
- ✅ 特殊規則說明
- ✅ 驗證方法
- ✅ 實現細節

即使沒有代碼，也能根據這份文檔重新實現完整的奇門遁甲排盤系統。

---

## 📊 文檔統計

| 文檔 | 字數 | 代碼塊 | 適合 |
|------|------|--------|------|
| README.md | ~2000 | 20+ | 所有人 |
| QUICKSTART.md | ~1500 | 15+ | 新手 |
| EXAMPLES.md | ~3000 | 30+ | 開發者 |
| ALGORITHM.md | ~8000 | 40+ | 研究者 |
| REFERENCE.md | ~2000 | 10+ | 查閱 |
| CONTRIBUTING.md | ~1200 | 8+ | 貢獻者 |

---

## 🔗 外部資源

### 在線演示

- 🌐 https://qm.9days.io/

### 相關項目

- 📦 [lunar-typescript](https://github.com/6tail/lunar-typescript) - 農曆計算庫

### 社區

- 💬 GitHub Issues - 問題反饋
- 💬 GitHub Discussions - 討論交流

---

## ⚡ 快速鏈接

### 常用代碼片段

**創建排盤**
```typescript
import { QimenUtil } from './qimen'
import { Lunar } from 'lunar-typescript'

const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0)
const qimenPan = QimenUtil.create(lunar)
```

**訪問信息**
```typescript
console.log(qimenPan.遁)        // "陽遁"
console.log(qimenPan.局數)      // 4
console.log(qimenPan.值符星)    // "天柱"
```

**格式化輸出**
```typescript
QimenUtil.prettyLog(qimenPan)
```

### 常用查詢

- 判斷陰陽遁：`QimenUtil.陰遁或陽遁(節氣)`
- 查詢局數：`QimenUtil.局數(節氣, 上中下元)`
- 計算旬首：`QimenUtil.旬首(時干支)`
- 查詢空亡：`QimenUtil.空亡(旬首)`
- 查詢驛馬：`QimenUtil.驛馬(時支)`

---

## 🤝 參與方式

### 使用反饋

- 📝 提交使用心得
- 🐛 報告 Bug
- 💡 提出功能建議

### 內容貢獻

- 📖 改進文檔
- 🌏 翻譯文檔
- ✏️ 糾正錯誤

### 代碼貢獻

- 🔧 修復 Bug
- ✨ 添加功能
- 🎨 改進 UI
- ⚡ 性能優化

---

## 📞 聯繫方式

- 🌐 網站：https://qm.9days.io/
- 💻 GitHub：https://github.com/yourusername/qimen
- 📧 Issues：提交問題和建議

---

## 🙏 致謝

感謝所有為保存和傳承奇門遁甲算法做出貢獻的人！

特別感謝：
- 傳統奇門遁甲典籍的作者和傳承者
- lunar-typescript 項目
- 所有貢獻者和使用者

---

**最後更新**：2026-02-08  
**項目版本**：1.0.0

---

<div align="center">

**⭐ 如果這個項目對您有幫助，請給我們一個 Star！**

**🔖 收藏本頁面以便隨時查閱文檔**

</div>
