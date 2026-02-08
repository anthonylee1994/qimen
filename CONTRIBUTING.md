# 貢獻指南

感謝您對奇門遁甲排盤項目的關注！我們歡迎任何形式的貢獻。

## 如何貢獻

### 報告問題

如果您發現了 bug 或有功能建議，請：

1. 先在 [Issues](https://github.com/yourusername/qimen/issues) 中搜索是否已有相關問題
2. 如果沒有，創建一個新的 Issue
3. 清楚描述問題或建議，包括：
   - 問題的重現步驟
   - 預期行為
   - 實際行為
   - 相關截圖或錯誤信息

### 提交代碼

1. **Fork 項目**
   ```bash
   # 點擊 GitHub 頁面右上角的 Fork 按鈕
   ```

2. **克隆倉庫**
   ```bash
   git clone https://github.com/your-username/qimen.git
   cd qimen
   ```

3. **安裝依賴**
   ```bash
   pnpm install
   ```

4. **創建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

5. **進行修改**
   - 遵循現有的代碼風格
   - 添加必要的註釋
   - 確保類型正確

6. **運行測試**
   ```bash
   # 運行所有測試
   pnpm test
   
   # 運行 linter
   pnpm lint
   
   # 構建項目
   pnpm build
   ```

7. **提交更改**
   ```bash
   git add .
   git commit -m "feat: 添加新功能"
   # 或
   git commit -m "fix: 修復某個問題"
   ```

   提交信息格式：
   - `feat:` 新功能
   - `fix:` 修復 bug
   - `docs:` 文檔更新
   - `style:` 代碼格式調整
   - `refactor:` 代碼重構
   - `test:` 測試相關
   - `chore:` 構建工具或輔助工具的變動

8. **推送分支**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **創建 Pull Request**
   - 前往 GitHub 上的原項目頁面
   - 點擊 "New Pull Request"
   - 選擇您的分支
   - 填寫 PR 描述，說明您的更改

## 開發規範

### 代碼風格

- 使用 TypeScript
- 遵循 ESLint 配置
- 使用有意義的中文命名（適用於奇門術語）
- 保持代碼簡潔清晰

### 函數命名

```typescript
// ✅ 好的命名
function 計算地盤干(遁: 遁, 局數: 局數): 三奇六儀[] { }

// ❌ 避免的命名
function calc1(d: string, j: number): any[] { }
```

### 類型定義

```typescript
// ✅ 使用明確的類型
type 宮位 = "坎一宮" | "坤二宮" | "震三宮" // ...

// ❌ 避免使用 any
type 宮位 = any
```

### 測試

每個新功能都應該包含對應的測試：

```typescript
describe("QimenUtil", () => {
  it("計算地盤干", () => {
    expect(QimenUtil.地盤干("陽遁", 1)).toEqual([
      "戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"
    ])
  })
})
```

### 文檔

- 為新功能添加使用示例
- 更新 README.md（如果需要）
- 更新 ALGORITHM.md（如果涉及算法變更）
- 更新 EXAMPLES.md（如果有新的使用場景）

## 特別貢獻

### 算法驗證

如果您發現算法錯誤，請：

1. 提供具體的輸入數據
2. 說明預期結果
3. 附上參考資料或傳統排盤結果的對比

這對於保證算法準確性非常重要！

### 文檔完善

歡迎幫助改進文檔：

- 糾正錯別字
- 添加更多示例
- 改進解釋說明
- 翻譯成其他語言

### UI/UX 改進

如果您擅長前端設計，歡迎：

- 改進界面設計
- 優化用戶體驗
- 添加新的可視化功能
- 提升移動端體驗

## 項目結構

```
qimen/
├── src/
│   ├── qimen/              # 核心算法
│   │   ├── QimenUtil.ts   # 主算法
│   │   ├── type.ts        # 類型定義
│   │   ├── dictionary.ts  # 查表數據
│   │   ├── LunarUtil.ts   # 農曆工具
│   │   ├── FormatUtil.ts  # 格式化
│   │   └── __tests__/     # 測試
│   ├── component/         # React 組件
│   │   ├── QimenPanDisplay/  # 排盤顯示
│   │   └── ...
│   └── util/              # 輔助工具
├── ALGORITHM.md           # 算法文檔
├── EXAMPLES.md            # 使用示例
├── CONTRIBUTING.md        # 本文件
└── README.md              # 項目說明
```

## 重要提醒

### 算法準確性

這個項目旨在保存和傳承奇門遁甲算法。任何算法相關的修改都需要：

1. 有可靠的文獻或傳統排盤依據
2. 通過完整的測試驗證
3. 在 PR 中詳細說明修改原因

### 性能考慮

- 保持算法的可讀性優先於過度優化
- 如果需要優化，請提供性能測試數據
- 緩存等優化應該在業務層實現，不要影響核心算法

### 向後兼容

- 盡量保持 API 的向後兼容性
- 如果必須破壞兼容性，請在 PR 中明確說明
- 提供遷移指南

## 交流討論

- GitHub Issues: 用於 bug 報告和功能請求
- Discussions: 用於一般性討論和提問
- Pull Requests: 用於代碼審查和討論

## 行為準則

- 尊重他人
- 友善交流
- 建設性反饋
- 包容多樣性

## 致謝

感謝每一位貢獻者！您的付出幫助保存和傳承了這門傳統文化。

特別感謝：
- [lunar-typescript](https://github.com/6tail/lunar-typescript) 項目
- 所有提出建議和報告問題的用戶
- 所有貢獻代碼的開發者

---

再次感謝您的貢獻！🙏
