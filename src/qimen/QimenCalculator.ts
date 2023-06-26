import {JieQi, Lunar} from "lunar-typescript";

export type 旬首 = "甲子" | "甲寅" | "甲辰" | "甲午" | "甲申" | "甲戌";

export type 上中下元 = "上元" | "中元" | "下元";

export type 遁 = "陽遁" | "陰遁";

export type 局數 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type 三奇 = "乙" | "丙" | "丁";

export type 六儀 = "戊" | "己" | "庚" | "辛" | "壬" | "癸";

export type 三奇六儀 = 三奇 | 六儀;

export class QimenCalculator {
    private lunar: Lunar;

    constructor(date: Date) {
        this.lunar = Lunar.fromDate(date);
    }

    calculate() {
        const 節氣 = this.目前節氣().getName();
        console.log("節氣", 節氣);
        const 遁 = QimenCalculator.遁(節氣);
        console.log("遁", 遁);
        const 局數 = QimenCalculator.局數(節氣, QimenCalculator.上中下元(this.日干支()));
        console.log("局數", 局數);
        const 局名 = QimenCalculator.局名(遁, 局數);
        console.log("局名", 局名);
        const 旬首 = QimenCalculator.旬首(this.時干支());
        console.log("旬首", 旬首);
        const 地盤干 = QimenCalculator.地盤干(遁, 局數);
        console.log("地盤干");
        QimenCalculator.天干測試(地盤干);

        const 遁干 = QimenCalculator.遁干(旬首);
        const 天盤干 = QimenCalculator.天盤干(地盤干, 遁干, this.lunar.getTimeGan());
        console.log("天盤干");
        QimenCalculator.天干測試(天盤干);
    }

    目前節氣(): JieQi {
        return this.lunar.getPrevJieQi(true);
    }

    目前節(): JieQi {
        return this.lunar.getPrevJie();
    }

    目前氣(): JieQi {
        return this.lunar.getPrevQi();
    }

    static 天盤干(地盤干: 三奇六儀[], 遁干: 六儀, 時干: string): 三奇六儀[] {
        const arr: string[] = [];
        const 地盤順轉列 = this.飛星轉轉盤序.map(_ => 地盤干[_ - 1]);

        const 遁干索引 = 地盤順轉列.findIndex(干 => 干 === 遁干);
        let 時干索引 = 地盤順轉列.findIndex(干 => 干 === 時干);
        時干索引 = 時干索引 === -1 ? 0 : 時干索引; // for 甲時

        for (let i = 0; i < 9; i++) {
            arr[(i + 時干索引) % 8] = 地盤順轉列[(i + 遁干索引) % 8];
        }

        return QimenCalculator.轉盤轉飛星序.map(_ => (_ ? arr[_ - 1] : undefined)) as 三奇六儀[];
    }

    static 地盤干(遁: 遁, 局數: number): 三奇六儀[] {
        const arr: string[] = [];

        let sequence: number[];

        if (遁 === "陽遁") {
            // generate a sequence from 局數 to 9 then 1 to 局數
            // eg. 3 => [3, 4, 5, 6, 7, 8, 9, 1, 2]
            // eg. 5 => [5, 6, 7, 8, 9, 1, 2, 3, 4]
            sequence = Array.from({length: 9}, (_, i) => (i + 局數) % 9 || 9);
        } else {
            // generate a sequence from 局數 to 1 then 9 to 局數
            // eg. 3 => [3, 2, 1, 9, 8, 7, 6, 5, 4]
            // eg. 5 => [5, 4, 3, 2, 1, 9, 8, 7, 6]
            sequence = Array.from({length: 9}, (_, i) => (i + 1 + 局數) % 9 || 9).reverse();
        }

        for (let i = 0; i < 9; i++) {
            arr[sequence[i] - 1] = this.三奇六儀列[i];
        }

        return arr as 三奇六儀[];
    }

    static 天干測試(result: 三奇六儀[]) {
        console.log(result[4 - 1] + "(4)", result[9 - 1] + "(9)", result[2 - 1] + "(2)");
        console.log(result[3 - 1] + "(3)", result[5 - 1] + "(5)", result[7 - 1] + "(7)");
        console.log(result[8 - 1] + "(8)", result[1 - 1] + "(1)", result[6 - 1] + "(6)");
    }

    static 局數(節氣: string, 上中下元: 上中下元): 局數 {
        const index = Object.keys(QimenCalculator.局數表).findIndex(_ => _ === 節氣);
        const 列 = Object.values(QimenCalculator.局數表)[index];

        switch (上中下元) {
            case "上元":
                return 列[0];
            case "中元":
                return 列[1];
            case "下元":
                return 列[2];
        }
    }

    static 旬首(時干支: string) {
        const index = Object.values(QimenCalculator.旬首表).findIndex(旬首 => 旬首.includes(時干支));
        return Object.keys(QimenCalculator.旬首表)[index] as 旬首;
    }

    static 上中下元(日干支: string): 上中下元 {
        const index = Object.values(QimenCalculator.上中下元表).findIndex(上中下元 => 上中下元.includes(日干支));
        return Object.keys(QimenCalculator.上中下元表)[index] as 上中下元;
    }

    static 遁(節氣: string): 遁 {
        const index = Object.values(QimenCalculator.節氣遁表).findIndex(遁 => 遁.includes(節氣));
        return Object.keys(QimenCalculator.節氣遁表)[index] as 遁;
    }

    static 遁干(旬首: 旬首): 六儀 {
        return QimenCalculator.遁表[旬首];
    }

    static 局名(遁: 遁, 局數: 局數): string {
        return `${遁}${QimenCalculator.中文局數(局數)}局`;
    }

    static 中文局數(num: 局數): string {
        switch (num) {
            case 1:
                return "一";
            case 2:
                return "二";
            case 3:
                return "三";
            case 4:
                return "四";
            case 5:
                return "五";
            case 6:
                return "六";
            case 7:
                return "七";
            case 8:
                return "八";
            case 9:
                return "九";
        }
    }

    private 時干支(): string {
        return `${this.lunar.getTimeGan()}${this.lunar.getTimeZhi()}`;
    }

    private 日干支(): string {
        return `${this.lunar.getDayGan()}${this.lunar.getDayZhi()}`;
    }

    private static 飛星轉轉盤序: number[] = [1, 8, 3, 4, 9, 2, 7, 6];
    private static 轉盤轉飛星序: (number | undefined)[] = [1, 6, 3, 4, undefined, 8, 7, 2, 5];

    private static 三奇六儀列: 三奇六儀[] = ["戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"];

    private static 旬首表: Record<旬首, string[]> = {
        甲子: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉"],
        甲寅: ["甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
        甲辰: ["甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑"],
        甲午: ["甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯"],
        甲申: ["甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳"],
        甲戌: ["甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未"],
    };

    private static 遁表: Record<旬首, 六儀> = {
        甲子: "戊",
        甲戌: "己",
        甲申: "庚",
        甲午: "辛",
        甲辰: "壬",
        甲寅: "癸",
    };

    private static 上中下元表: Record<上中下元, string[]> = {
        上元: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己酉", "庚戌", "辛亥", "壬子", "癸丑"],
        中元: ["己巳", "庚午", "辛未", "壬申", "癸酉", "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己亥", "庚子", "辛丑", "壬寅", "癸卯", "甲寅", "乙卯", "丙辰", "丁巳", "戊午"],
        下元: ["甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲辰", "乙巳", "丙午", "丁未", "戊申", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
    };

    private static 節氣遁表: Record<遁, string[]> = {
        陽遁: ["冬至", "惊蛰", "小寒", "大寒", "春分", "雨水", "清明", "立夏", "立春", "谷雨", "小满", "芒种"],
        陰遁: ["夏至", "白露", "小暑", "大暑", "秋分", "立秋", "寒露", "立冬", "处暑", "霜降", "小雪", "大雪"],
    };

    private static 局數表: Record<string, [局數, 局數, 局數]> = {
        冬至: [1, 7, 4],
        惊蛰: [1, 7, 4],
        小寒: [2, 8, 5],
        大寒: [3, 9, 6],
        春分: [3, 9, 6],
        雨水: [9, 6, 3],
        清明: [4, 1, 7],
        立夏: [4, 1, 7],
        立春: [8, 5, 2],
        谷雨: [5, 2, 8],
        小满: [5, 2, 8],
        芒种: [6, 3, 9],
        夏至: [9, 3, 6],
        白露: [9, 3, 6],
        小暑: [8, 2, 5],
        大暑: [7, 1, 4],
        秋分: [7, 1, 4],
        立秋: [2, 5, 8],
        寒露: [6, 9, 3],
        立冬: [6, 9, 3],
        处暑: [1, 4, 7],
        霜降: [5, 8, 2],
        小雪: [5, 8, 2],
        大雪: [4, 7, 1],
    };
}
