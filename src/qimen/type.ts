import {JieQi, Lunar} from "lunar-typescript";

export type 五行 = "木" | "火" | "土" | "金" | "水";

export type 旬首 = "甲子" | "甲寅" | "甲辰" | "甲午" | "甲申" | "甲戌";

export type 上中下元 = "上元" | "中元" | "下元";

export type 遁 = "陽遁" | "陰遁";

export type 局數 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type 宮位 = "坎一宮" | "坤二宮" | "震三宮" | "巽四宮" | "中五宮" | "乾六宮" | "兌七宮" | "艮八宮" | "離九宮";

export type 三奇 = "乙" | "丙" | "丁";

export type 六儀 = "戊" | "己" | "庚" | "辛" | "壬" | "癸";

export type 三奇六儀 = 三奇 | 六儀;

export type 四驛馬 = "申" | "巳" | "亥" | "寅";

export type 陽地支 = "子" | "寅" | "辰" | "午" | "申" | "戌";

export type 陰地支 = "丑" | "卯" | "巳" | "未" | "酉" | "亥";

export type 地支 = 陽地支 | 陰地支;

export type 陽天干 = "甲" | "丙" | "戊" | "庚" | "壬";

export type 陰天干 = "乙" | "丁" | "己" | "辛" | "癸";

export type 天干 = 陽天干 | 陰天干;

export type 六十甲子 = `${陽天干}${陽地支}` | `${陰天干}${陰地支}`;

export type 節氣 =
    | "冬至"
    | "惊蛰"
    | "小寒"
    | "大寒"
    | "春分"
    | "雨水"
    | "清明"
    | "立夏"
    | "立春"
    | "谷雨"
    | "小满"
    | "芒种"
    | "夏至"
    | "白露"
    | "小暑"
    | "大暑"
    | "秋分"
    | "立秋"
    | "寒露"
    | "立冬"
    | "处暑"
    | "霜降"
    | "小雪"
    | "大雪";

export type 八字 = [六十甲子, 六十甲子, 六十甲子, 六十甲子];

export type 八神 = "值符" | "騰蛇" | "太陰" | "六合" | "白虎" | "玄武" | "九地" | "九天";

export type 九星 = "天蓬" | "天任" | "天冲" | "天輔" | "天英" | "天芮" | "天柱" | "天心" | "天禽";

export type 八門 = "休門" | "生門" | "傷門" | "杜門" | "景門" | "死門" | "驚門" | "開門";

export interface QimenCell {
    八神: 八神;
    九星: 九星;
    八門: 八門;
    天盤干: 天干[];
    地盤干: 天干[];
    宮位: 宮位;
    是否空亡: boolean;
    是否驛馬: boolean;
}

export interface QimenPan {
    lunar: Lunar;
    八字: 八字;
    上中下元: 上中下元;
    遁: 遁;
    局數: 局數;
    旬首: 旬首;
    遁干: 天干;
    值符星: 九星;
    值符落宮: 宮位;
    值使門: 八門;
    值使落宮: 宮位;
    驛馬: 四驛馬;
    空亡: 地支[];
    天乙星: 九星;
    節氣: JieQi;
    旺相休囚死: [五行, 五行, 五行, 五行, 五行];
    九宮: QimenCell[];
}

export type 十二長生 = "長生" | "沐浴" | "冠帶" | "臨官" | "帝旺" | "衰" | "病" | "死" | "墓" | "絕" | "胎" | "養";