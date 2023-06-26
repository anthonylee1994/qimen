import {JieQi, Lunar} from "lunar-typescript";

type 旬首 = "甲子" | "甲寅" | "甲辰" | "甲午" | "甲申" | "甲戌";

type 上中下元 = "上元" | "中元" | "下元";

type 遁 = "陽遁" | "陰遁";

type 局數 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export class QimenCalculator {
    private lunar: Lunar;

    private 旬首表: Record<旬首, string[]> = {
        甲子: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉"],
        甲寅: ["甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
        甲辰: ["甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑"],
        甲午: ["甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯"],
        甲申: ["甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳"],
        甲戌: ["甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未"],
    };

    private 上中下元表: Record<上中下元, string[]> = {
        上元: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己酉", "庚戌", "辛亥", "壬子", "癸丑"],
        中元: ["己巳", "庚午", "辛未", "壬申", "癸酉", "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己亥", "庚子", "辛丑", "壬寅", "癸卯", "甲寅", "乙卯", "丙辰", "丁巳", "戊午"],
        下元: ["甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲辰", "乙巳", "丙午", "丁未", "戊申", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
    };

    private 遁表: Record<遁, string[]> = {
        陽遁: ["冬至", "惊蛰", "小寒", "大寒", "春分", "雨水", "清明", "立夏", "立春", "谷雨", "小满", "芒种"],
        陰遁: ["夏至", "白露", "小暑", "大暑", "秋分", "立秋", "寒露", "立冬", "处暑", "霜降", "小雪", "大雪"],
    };

    private 局數表: Record<string, [局數, 局數, 局數]> = {
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

    constructor(date: Date) {
        this.lunar = Lunar.fromDate(date);
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

    旬首() {
        const 干支 = this.時干支();
        const index = Object.values(this.旬首表).findIndex(旬首 => 旬首.includes(干支));
        return Object.keys(this.旬首表)[index] as 旬首;
    }

    上中下元(): 上中下元 {
        const 干支 = this.日干支();
        const index = Object.values(this.上中下元表).findIndex(上中下元 => 上中下元.includes(干支));
        return Object.keys(this.上中下元表)[index] as 上中下元;
    }

    遁(): 遁 {
        const 節氣 = this.目前節氣().getName();
        const index = Object.values(this.遁表).findIndex(遁 => 遁.includes(節氣));
        return Object.keys(this.遁表)[index] as 遁;
    }

    局數(): 局數 {
        const 節氣 = this.目前節氣().getName();
        const 上中下元 = this.上中下元();
        const index = Object.keys(this.局數表).findIndex(_ => _ === 節氣);
        const 列 = Object.values(this.局數表)[index];

        switch (上中下元) {
            case "上元":
                return 列[0];
            case "中元":
                return 列[1];
            case "下元":
                return 列[2];
        }
    }

    局名(): string {
        return `${this.遁()}${this.中文局數(this.局數())}局`;
    }

    中文局數(num: 局數): string {
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
}
