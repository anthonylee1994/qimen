import {三奇六儀, 上中下元, 九星, 八神, 八門, 六儀, 六十甲子, 四驛馬, 地支, 天干, 宮位, 局數, 旬首, 節氣, 遁} from "./type";

export const 飛星轉轉盤序: number[] = [1, 8, 3, 4, 9, 2, 7, 6];
export const 轉盤轉飛星序: (number | undefined)[] = [1, 6, 3, 4, undefined, 8, 7, 2, 5];

export const 三奇六儀序: 三奇六儀[] = ["戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"];

export const 宮位飛星序: 宮位[] = ["坎一宮", "坤二宮", "震三宮", "巽四宮", "中五宮", "乾六宮", "兌七宮", "艮八宮", "離九宮"];

export const 宮位轉盤序: 宮位[] = ["坎一宮", "艮八宮", "震三宮", "巽四宮", "離九宮", "坤二宮", "兌七宮", "乾六宮"];

export const 八神序: 八神[] = ["值符", "騰蛇", "太陰", "六合", "白虎", "玄武", "九地", "九天"];

export const 九星序: 九星[] = ["天蓬", "天任", "天冲", "天輔", "天英", "天芮", "天柱", "天心"];

export const 八門序: 八門[] = ["休門", "生門", "傷門", "杜門", "景門", "死門", "驚門", "開門"];

export const 天干序: 天干[] = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];

export const 地支序: 地支[] = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉"];

export const 旬首表: Record<旬首, 六十甲子[]> = {
    甲子: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉"],
    甲寅: ["甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
    甲辰: ["甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑"],
    甲午: ["甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯"],
    甲申: ["甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳"],
    甲戌: ["甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未"],
};

export const 空亡表: Record<旬首, [地支, 地支]> = {
    甲子: ["戌", "亥"],
    甲戌: ["申", "酉"],
    甲申: ["午", "未"],
    甲午: ["辰", "巳"],
    甲辰: ["寅", "卯"],
    甲寅: ["子", "丑"],
};

export const 驛馬表: Record<四驛馬, [地支, 地支, 地支]> = {
    申: ["寅", "午", "戌"],
    巳: ["亥", "卯", "未"],
    亥: ["巳", "酉", "丑"],
    寅: ["申", "子", "辰"],
};

export const 六儀遁表: Record<旬首, 六儀> = {
    甲子: "戊",
    甲戌: "己",
    甲申: "庚",
    甲午: "辛",
    甲辰: "壬",
    甲寅: "癸",
};

export const 上中下元表: Record<上中下元, 六十甲子[]> = {
    上元: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己酉", "庚戌", "辛亥", "壬子", "癸丑"],
    中元: ["己巳", "庚午", "辛未", "壬申", "癸酉", "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己亥", "庚子", "辛丑", "壬寅", "癸卯", "甲寅", "乙卯", "丙辰", "丁巳", "戊午"],
    下元: ["甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲辰", "乙巳", "丙午", "丁未", "戊申", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
};

export const 節氣遁表: Record<遁, 節氣[]> = {
    陽遁: ["冬至", "惊蛰", "小寒", "大寒", "春分", "雨水", "清明", "立夏", "立春", "谷雨", "小满", "芒种"],
    陰遁: ["夏至", "白露", "小暑", "大暑", "秋分", "立秋", "寒露", "立冬", "处暑", "霜降", "小雪", "大雪"],
};

export const 局數表: Record<節氣, [局數, 局數, 局數]> = {
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
