import {三奇六儀, 上中下元, 六儀, 局數, 旬首, 遁, 節氣, 六十甲子, 天干, 八神, 九星, 八門, 宮位, 地支} from "./type";
import {三奇六儀序, 局數表, 旬首表, 節氣遁表, 轉盤轉飛星序, 六儀遁表, 飛星轉轉盤序, 上中下元表, 八神序, 九星序, 八門序, 宮位飛星序, 天干序, 宮位轉盤序, 空亡表, 驛馬表} from "./dictionary";

const 循環數 = (num: number, min: number, max: number) => {
    const range = max - min + 1;
    const adjustedNum = num - min;
    const remainder = ((adjustedNum % range) + range) % range;
    return remainder + min;
};

const 陰遁或陽遁 = (節氣: 節氣): 遁 => {
    const index = Object.values(節氣遁表).findIndex(遁 => 遁.includes(節氣));
    return Object.keys(節氣遁表)[index] as 遁;
};

const 上中下元 = (日干支: 六十甲子): 上中下元 => {
    const index = Object.values(上中下元表).findIndex(上中下元 => 上中下元.includes(日干支));
    return Object.keys(上中下元表)[index] as 上中下元;
};

const 局數 = (節氣: 節氣, 上中下元: 上中下元): 局數 => {
    const index = Object.keys(局數表).findIndex(_ => _ === 節氣);
    const [上元, 中元, 下元] = Object.values(局數表)[index];
    return {上元, 中元, 下元}[上中下元];
};

const 旬首 = (時干支: 六十甲子) => {
    const index = Object.values(旬首表).findIndex(旬首 => 旬首.includes(時干支));
    return Object.keys(旬首表)[index] as 旬首;
};

const 遁干 = (旬首: 旬首): 六儀 => {
    return 六儀遁表[旬首];
};

const 值符落宮 = (地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): [九星, 宮位] => {
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);
    const 時干索引 = 地盤干轉盤序.findIndex(_ => _ === 時干);
    const 遁干索引 = 地盤干轉盤序.findIndex(_ => _ === 遁干);

    const 值符九星: 九星 = 遁干索引 === -1 ? "天禽" : 九星序[循環數(遁干索引, 0, 7)];
    const 索引 = 時干 === "甲" ? 遁干索引 : 時干索引;
    const 值符宮位 = 索引 === -1 ? "中五宮" : 宮位轉盤序[索引];

    return [值符九星, 值符宮位];
};

const 空亡 = (旬首: 旬首): [地支, 地支] => {
    return 空亡表[旬首];
};

const 驛馬 = (時支: 地支): 地支 => {
    return Object.keys(驛馬表)[Object.values(驛馬表).findIndex(_ => _.includes(時支))] as 地支;
};

const 地盤干 = (遁: 遁, 局數: 局數): 三奇六儀[] => {
    const arr: 三奇六儀[] = [];
    const start = 局數 - 1;

    for (let i = 0; i < 9; i++) {
        const index = 循環數(start + i * (遁 === "陽遁" ? 1 : -1), 0, 8);
        arr[index] = 三奇六儀序[i];
    }

    return arr;
};

const 計算遁干索引 = (地盤干: 三奇六儀[], 遁干: 六儀): number => {
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);
    let 遁干索引 = 地盤干轉盤序.findIndex(_ => _ === 遁干);
    return (遁干索引 = 遁干索引 === -1 ? 宮位轉盤序.indexOf("坤二宮") : 遁干索引);
};

const 計算時干索引 = (地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): number => {
    const [, 值符宮位] = 值符落宮(地盤干, 遁干, 時干);
    return 宮位轉盤序.indexOf(值符宮位 === "中五宮" ? "坤二宮" : 值符宮位);
};

const 天盤干 = (地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): (三奇六儀 | undefined)[] => {
    const result: (三奇六儀 | undefined)[] = [];
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);

    const 遁干索引 = 計算遁干索引(地盤干, 遁干);
    const 時干索引 = 計算時干索引(地盤干, 遁干, 時干);

    for (let i = 0; i < 9; i++) {
        result[循環數(時干索引 + i, 0, 7)] = 地盤干轉盤序[循環數(遁干索引 + i, 0, 7)];
    }

    // 轉回飛星序
    return 轉盤轉飛星序.map(_ => (_ ? result[_ - 1] : undefined));
};

const 八神 = (地盤干: 三奇六儀[], 遁: 遁, 遁干: 六儀, 時干: 天干): (八神 | undefined)[] => {
    const result: (八神 | undefined)[] = [];
    const 時干索引 = 計算時干索引(地盤干, 遁干, 時干);

    for (let i = 0; i < 8; i++) {
        if (遁 === "陽遁") {
            result[循環數(時干索引 + i, 0, 7)] = 八神序[i];
        } else {
            result[循環數(時干索引 - i, 0, 7)] = 八神序[i];
        }
    }

    // 轉回飛星序
    return 轉盤轉飛星序.map(_ => (_ ? result[_ - 1] : undefined));
};

const 九星 = (地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): (九星 | undefined)[] => {
    const arr: (九星 | undefined)[] = [];

    const 遁干索引 = 計算遁干索引(地盤干, 遁干);
    const 時干索引 = 計算時干索引(地盤干, 遁干, 時干);

    for (let i = 0; i < 8; i++) {
        arr[循環數(時干索引 + i, 0, 7)] = 九星序[循環數(遁干索引 + i, 0, 7)];
    }

    // 轉回飛星序
    return 轉盤轉飛星序.map(_ => (_ ? arr[_ - 1] : undefined));
};

const 天乙 = (天盤干: (三奇六儀 | undefined)[], 九星: (九星 | undefined)[], 時干: 天干): 九星 => {
    const index = 天盤干.findIndex(_ => _ === 時干);
    return index === -1 ? "天禽" : (九星[index] as 九星);
};

const 值使門 = (地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): [八門, 宮位] => {
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);
    const 遁干索引 = 地盤干轉盤序.findIndex(_ => _ === 遁干);
    const 八門飛星序 = 轉盤轉飛星序.map(_ => (_ ? 八門序[_ - 1] : undefined));

    // 如果遁干在地盤中宮，遁干索引為坤二宮
    const 宮位數 = 遁干索引 === -1 ? 4 : 八門飛星序.indexOf(八門序[遁干索引]);
    const 八門 = 八門序[遁干索引 === -1 ? 5 : 遁干索引];

    return [八門, 宮位飛星序[循環數(宮位數 + 天干序.indexOf(時干), 0, 8)]];
};

const 八門 = (值使門: 八門, 宮位: 宮位): (八門 | undefined)[] => {
    const arr: (八門 | undefined)[] = [];
    for (let i = 0; i < 8; i++) {
        arr[循環數(i + 宮位轉盤序.indexOf(宮位 === "中五宮" ? "坤二宮" : 宮位), 0, 7)] = 八門序[循環數(i + 八門序.indexOf(值使門), 0, 7)];
    }

    return 轉盤轉飛星序.map(_ => (_ ? arr[_ - 1] : undefined));
};

const 天干測試 = (result: 三奇六儀[]) => {
    console.log(result[4 - 1] + "(4)", result[9 - 1] + "(9)", result[2 - 1] + "(2)");
    console.log(result[3 - 1] + "(3)", result[5 - 1] + "(5)", result[7 - 1] + "(7)");
    console.log(result[8 - 1] + "(8)", result[1 - 1] + "(1)", result[6 - 1] + "(6)");
};

export const QimenUtil = Object.freeze({
    陰遁或陽遁,
    上中下元,
    局數,
    旬首,
    遁干,
    地盤干,
    天盤干,
    八神,
    九星,
    值符落宮,
    值使門,
    八門,
    天干測試,
    空亡,
    驛馬,
    天乙,
});

// calculate() {
//     const 節氣 = this.目前節氣();
//     console.log("節氣", 節氣);
//     const 遁 = QimenCalculator.遁(節氣);
//     console.log("遁", 遁);
//     const 局數 = QimenCalculator.局數(節氣, QimenCalculator.上中下元(LunarUtil.日干支(this.lunar)));
//     console.log("局數", 局數);
//     const 局名 = QimenFormatUtil.局名(遁, 局數);
//     console.log("局名", 局名);
//     const 旬首 = QimenCalculator.旬首(LunarUtil.時干支(this.lunar));
//     console.log("旬首", 旬首);
//     const 地盤干 = QimenCalculator.地盤干(遁, 局數);
//     console.log("地盤干");
//     QimenCalculator.天干測試(地盤干);

//     const 遁干 = QimenCalculator.遁干(旬首);
//     const 天盤干 = QimenCalculator.天盤干(地盤干, 遁干, this.lunar.getTimeGan());
//     console.log("天盤干");
//     QimenCalculator.天干測試(天盤干);
// }
