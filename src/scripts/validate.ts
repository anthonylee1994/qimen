/**
 * 奇門遁甲排盤驗證腳本
 *
 * 用於快速驗證排盤結果的正確性
 */

import {QimenUtil} from "../qimen/QimenUtil";
import {QimenFormatUtil} from "../qimen/FormatUtil";
import {Lunar} from "lunar-typescript";

// 顏色輸出（僅用於 Node.js 終端）
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
};

function colorize(text: string, color: keyof typeof colors): string {
    return `${colors[color]}${text}${colors.reset}`;
}

// 驗證案例
interface ValidationCase {
    name: string;
    date: {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
    };
    expected: {
        遁?: string;
        局數?: number;
        旬首?: string;
        遁干?: string;
        值符星?: string;
        值符落宮?: string;
        值使門?: string;
        值使落宮?: string;
        天乙星?: string;
        空亡?: [string, string];
        驛馬?: string;
    };
}

const validationCases: ValidationCase[] = [
    {
        name: "陽遁五局示例",
        date: {year: 2024, month: 5, day: 10, hour: 14, minute: 30},
        expected: {
            遁: "陽遁",
            局數: 4,
            旬首: "甲午",
            遁干: "辛",
            空亡: ["辰", "巳"],
            驛馬: "巳",
        },
    },
    {
        name: "冬至一陽生",
        date: {year: 2024, month: 12, day: 21, hour: 12, minute: 0},
        expected: {
            遁: "陽遁",
        },
    },
    {
        name: "夏至一陰生",
        date: {year: 2024, month: 6, day: 21, hour: 12, minute: 0},
        expected: {
            遁: "陰遁",
        },
    },
    // 可以添加更多驗證案例
];

// 驗證函數
function validate(testCase: ValidationCase): boolean {
    const {name, date, expected} = testCase;
    const {year, month, day, hour, minute} = date;

    console.log(colorize(`\n【${name}】`, "bright"));
    console.log(colorize(`時間：${year}-${month}-${day} ${hour}:${minute}`, "cyan"));

    const lunar = Lunar.fromYmdHms(year, month, day, hour, minute, 0);
    const qimenPan = QimenUtil.create(lunar);

    let passed = true;
    const results: string[] = [];

    // 驗證各項數據
    if (expected.遁 !== undefined) {
        const match = qimenPan.遁 === expected.遁;
        results.push(match ? colorize(`✓ 陰陽遁：${qimenPan.遁}`, "green") : colorize(`✗ 陰陽遁：${qimenPan.遁}（預期：${expected.遁}）`, "red"));
        passed = passed && match;
    }

    if (expected.局數 !== undefined) {
        const match = qimenPan.局數 === expected.局數;
        results.push(match ? colorize(`✓ 局數：${qimenPan.局數}`, "green") : colorize(`✗ 局數：${qimenPan.局數}（預期：${expected.局數}）`, "red"));
        passed = passed && match;
    }

    if (expected.旬首 !== undefined) {
        const match = qimenPan.旬首 === expected.旬首;
        results.push(match ? colorize(`✓ 旬首：${qimenPan.旬首}`, "green") : colorize(`✗ 旬首：${qimenPan.旬首}（預期：${expected.旬首}）`, "red"));
        passed = passed && match;
    }

    if (expected.遁干 !== undefined) {
        const match = qimenPan.遁干 === expected.遁干;
        results.push(match ? colorize(`✓ 遁干：${qimenPan.遁干}`, "green") : colorize(`✗ 遁干：${qimenPan.遁干}（預期：${expected.遁干}）`, "red"));
        passed = passed && match;
    }

    if (expected.值符星 !== undefined) {
        const match = qimenPan.值符星 === expected.值符星;
        results.push(match ? colorize(`✓ 值符星：${qimenPan.值符星}`, "green") : colorize(`✗ 值符星：${qimenPan.值符星}（預期：${expected.值符星}）`, "red"));
        passed = passed && match;
    }

    if (expected.值符落宮 !== undefined) {
        const match = qimenPan.值符落宮 === expected.值符落宮;
        results.push(match ? colorize(`✓ 值符落宮：${qimenPan.值符落宮}`, "green") : colorize(`✗ 值符落宮：${qimenPan.值符落宮}（預期：${expected.值符落宮}）`, "red"));
        passed = passed && match;
    }

    if (expected.值使門 !== undefined) {
        const match = qimenPan.值使門 === expected.值使門;
        results.push(match ? colorize(`✓ 值使門：${qimenPan.值使門}`, "green") : colorize(`✗ 值使門：${qimenPan.值使門}（預期：${expected.值使門}）`, "red"));
        passed = passed && match;
    }

    if (expected.值使落宮 !== undefined) {
        const match = qimenPan.值使落宮 === expected.值使落宮;
        results.push(match ? colorize(`✓ 值使落宮：${qimenPan.值使落宮}`, "green") : colorize(`✗ 值使落宮：${qimenPan.值使落宮}（預期：${expected.值使落宮}）`, "red"));
        passed = passed && match;
    }

    if (expected.天乙星 !== undefined) {
        const match = qimenPan.天乙星 === expected.天乙星;
        results.push(match ? colorize(`✓ 天乙星：${qimenPan.天乙星}`, "green") : colorize(`✗ 天乙星：${qimenPan.天乙星}（預期：${expected.天乙星}）`, "red"));
        passed = passed && match;
    }

    if (expected.空亡 !== undefined) {
        const match = qimenPan.空亡[0] === expected.空亡[0] && qimenPan.空亡[1] === expected.空亡[1];
        results.push(match ? colorize(`✓ 空亡：${qimenPan.空亡.join("、")}`, "green") : colorize(`✗ 空亡：${qimenPan.空亡.join("、")}（預期：${expected.空亡.join("、")}）`, "red"));
        passed = passed && match;
    }

    if (expected.驛馬 !== undefined) {
        const match = qimenPan.驛馬 === expected.驛馬;
        results.push(match ? colorize(`✓ 驛馬：${qimenPan.驛馬}`, "green") : colorize(`✗ 驛馬：${qimenPan.驛馬}（預期：${expected.驛馬}）`, "red"));
        passed = passed && match;
    }

    // 輸出結果
    results.forEach(result => console.log(result));

    // 顯示完整排盤信息
    console.log(colorize("\n【完整排盤】", "bright"));
    console.log(`八字：${qimenPan.八字.join(" ")}`);
    console.log(`節氣：${qimenPan.節氣.getName()}`);
    console.log(`${qimenPan.上中下元}${qimenPan.遁}${QimenFormatUtil.中文局數(qimenPan.局數)}局`);
    console.log(`值符：${qimenPan.值符星}落${qimenPan.值符落宮}`);
    console.log(`值使：${qimenPan.值使門}落${qimenPan.值使落宮}`);
    console.log(`天乙：${qimenPan.天乙星}`);
    console.log(`空亡：${qimenPan.空亡.join("、")}`);
    console.log(`驛馬：${qimenPan.驛馬}`);

    return passed;
}

// 運行所有驗證
function runValidation() {
    console.log(colorize("=".repeat(60), "bright"));
    console.log(colorize("奇門遁甲排盤驗證", "bright"));
    console.log(colorize("=".repeat(60), "bright"));

    let totalPassed = 0;
    let totalFailed = 0;

    validationCases.forEach(testCase => {
        const passed = validate(testCase);
        if (passed) {
            totalPassed++;
        } else {
            totalFailed++;
        }
    });

    console.log(colorize("\n" + "=".repeat(60), "bright"));
    console.log(colorize("驗證結果", "bright"));
    console.log(colorize("=".repeat(60), "bright"));
    console.log(colorize(`通過：${totalPassed}`, "green"));
    if (totalFailed > 0) {
        console.log(colorize(`失敗：${totalFailed}`, "red"));
    }
    console.log(colorize(`總計：${totalPassed + totalFailed}`, "bright"));

    if (totalFailed === 0) {
        console.log(colorize("\n✓ 所有驗證通過！", "green"));
    } else {
        console.log(colorize("\n✗ 部分驗證失敗，請檢查", "red"));
    }
}

// 交互式驗證（手動輸入時間）
function interactiveValidation() {
    console.log(colorize("=".repeat(60), "bright"));
    console.log(colorize("交互式排盤驗證", "bright"));
    console.log(colorize("=".repeat(60), "bright"));

    // 這裡可以添加交互式輸入邏輯
    // 由於是 TypeScript，需要使用 readline 或其他庫
    console.log("\n提示：請修改 validationCases 數組添加自定義驗證案例");
}

// 導出
export {validate, runValidation, interactiveValidation, validationCases};

// 如果直接運行此文件
if (import.meta.url === `file://${process.argv[1]}`) {
    runValidation();
}
