import {三奇六儀, 上中下元, 六儀, 局數, 旬首, 遁, 節氣, 六十甲子, 天干, 八神, 九星} from "@/qimen/type";
import {三奇六儀列, 局數表, 旬首表, 節氣遁表, 轉盤轉飛星序, 六儀遁表, 飛星轉轉盤序, 上中下元表, 八神序, 九星序} from "./dictionary";

const wrapNumberInRange = (num: number, min: number, max: number) => {
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

const 地盤干 = (遁: 遁, 局數: 局數): 三奇六儀[] => {
    const arr: 三奇六儀[] = [];
    const start = 局數 - 1;

    for (let i = 0; i < 9; i++) {
        const index = wrapNumberInRange(start + i * (遁 === "陽遁" ? 1 : -1), 0, 8);
        arr[index] = 三奇六儀列[i];
    }

    return arr;
};

const 地盤時干轉盤索引 = (地盤干轉盤序: 三奇六儀[], 時干: 天干, 遁干索引: number): number => {
    const 時干索引 = 地盤干轉盤序.findIndex(_ => _ === 時干);

    if (時干 === "甲") {
        // for 甲時，天盤伏吟
        return 遁干索引;
    } else if (時干索引 === -1) {
        // 如果時干在地盤中宮，寄天盤干落坤二宮
        return 5;
    } else {
        return 時干索引;
    }
};

const 天盤干 = (地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): (三奇六儀 | undefined)[] => {
    const arr: (三奇六儀 | undefined)[] = [];
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);

    const 遁干索引 = 地盤干轉盤序.findIndex(_ => _ === 遁干);
    const 時干索引 = 地盤時干轉盤索引(地盤干轉盤序, 時干, 遁干索引);

    for (let i = 0; i < 9; i++) {
        arr[wrapNumberInRange(時干索引 + i, 0, 7)] = 地盤干轉盤序[wrapNumberInRange(遁干索引 + i, 0, 7)];
    }

    // 轉回飛星序
    return 轉盤轉飛星序.map(_ => (_ ? arr[_ - 1] : undefined));
};

const 八神 = (地盤干: 三奇六儀[], 遁: 遁, 遁干: 六儀, 時干: 天干): (八神 | undefined)[] => {
    const arr: (八神 | undefined)[] = [];
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);

    const 遁干索引 = 地盤干轉盤序.findIndex(_ => _ === 遁干);
    const 時干索引 = 地盤時干轉盤索引(地盤干轉盤序, 時干, 遁干索引);

    for (let i = 0; i < 8; i++) {
        if (遁 === "陽遁") {
            arr[wrapNumberInRange(時干索引 + i, 0, 7)] = 八神序[i];
        } else {
            arr[wrapNumberInRange(時干索引 - i, 0, 7)] = 八神序[i];
        }
    }

    // 轉回飛星序
    return 轉盤轉飛星序.map(_ => (_ ? arr[_ - 1] : undefined));
};

const 九星 = (地盤干: 三奇六儀[], 遁干: 六儀, 時干: 天干): (九星 | undefined)[] => {
    const arr: (九星 | undefined)[] = [];
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);

    const 遁干索引 = 地盤干轉盤序.findIndex(_ => _ === 遁干);
    const 時干索引 = 地盤時干轉盤索引(地盤干轉盤序, 時干, 遁干索引);

    for (let i = 0; i < 8; i++) {
        arr[wrapNumberInRange(時干索引 + i, 0, 7)] = 九星序[wrapNumberInRange(遁干索引 + i, 0, 7)];
    }

    // 轉回飛星序
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
    天干測試,
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
