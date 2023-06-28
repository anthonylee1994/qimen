import {三奇六儀, 上中下元, 六儀, 局數, 旬首, 遁, 節氣, 六十甲子, 天干, 八神, 九星, 八門, 宮位, 地支, 五行, QimenPan, QimenCell, 四驛馬} from "./type";
import {
    三奇六儀序,
    局數表,
    旬首表,
    節氣遁表,
    轉盤轉飛星序,
    六儀遁表,
    飛星轉轉盤序,
    上中下元表,
    八神序,
    九星序,
    八門序,
    宮位飛星序,
    天干序,
    宮位轉盤序,
    空亡表,
    驛馬表,
    旺相休囚死表,
    宮位地支表,
} from "./dictionary";
import {Lunar} from "lunar-typescript";
import {LunarUtil} from "./LunarUtil";
import {QimenFormatUtil} from "./FormatUtil";

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

const 驛馬 = (時支: 地支): 四驛馬 => {
    return Object.keys(驛馬表)[Object.values(驛馬表).findIndex(_ => _.includes(時支))] as 四驛馬;
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
    return index === -1 || index === 4 ? "天禽" : (九星[index] as 九星);
};

const 旺相休囚死 = (月支: 地支): [五行, 五行, 五行, 五行, 五行] => {
    return 旺相休囚死表[月支];
};

const 值使門 = (地盤干: 三奇六儀[], 遁: 遁, 遁干: 六儀, 時干: 天干): [八門, 宮位] => {
    const 地盤干轉盤序 = 飛星轉轉盤序.map(_ => 地盤干[_ - 1]);
    const 遁干索引 = 地盤干轉盤序.findIndex(_ => _ === 遁干);
    const 八門飛星序 = 轉盤轉飛星序.map(_ => (_ ? 八門序[_ - 1] : undefined));

    // 如果遁干在地盤中宮，遁干索引為坤二宮
    const 宮位數 = 遁干索引 === -1 ? 4 : 八門飛星序.indexOf(八門序[遁干索引]);
    const 八門 = 八門序[遁干索引 === -1 ? 5 : 遁干索引];

    return [八門, 宮位飛星序[循環數(宮位數 + 天干序.indexOf(時干) * (遁 === "陽遁" ? 1 : -1), 0, 8)]];
};

const 八門 = (值使門: 八門, 宮位: 宮位): (八門 | undefined)[] => {
    const arr: (八門 | undefined)[] = [];
    for (let i = 0; i < 8; i++) {
        arr[循環數(i + 宮位轉盤序.indexOf(宮位 === "中五宮" ? "坤二宮" : 宮位), 0, 7)] = 八門序[循環數(i + 八門序.indexOf(值使門), 0, 7)];
    }

    return 轉盤轉飛星序.map(_ => (_ ? arr[_ - 1] : undefined));
};

const 宮位地支 = (宮位: 宮位): 地支[] => {
    return 宮位地支表[宮位];
};

const create = (lunar: Lunar) => {
    const [yearStem, monthStem, dayStem, hourStem] = LunarUtil.八字(lunar);
    const monthGan = monthStem[1] as 地支;

    const hourGan = hourStem[0] as 天干;
    const hourZhi = hourStem[1] as 地支;

    const solarTerm = LunarUtil.節氣(lunar);
    const solarTermName = solarTerm.getName() as 節氣;

    const yinOrYangDun = 陰遁或陽遁(solarTermName);
    const upperMiddleLowerSector = 上中下元(dayStem);
    const inning = 局數(solarTermName, upperMiddleLowerSector);

    const daysHead = 旬首(hourStem);
    const dunGan = 遁干(daysHead);

    // 地盤干
    const earthGans = 地盤干(yinOrYangDun, inning);

    // 天盤干
    const skyGans = 天盤干(earthGans, dunGan, hourGan);

    const [headStar, headCell] = 值符落宮(earthGans, dunGan, hourGan);
    const [emissaryDoor, emissaryCell] = 值使門(earthGans, yinOrYangDun, dunGan, hourGan);

    // 八神
    const eightGods = 八神(earthGans, yinOrYangDun, dunGan, hourGan);

    // 九星
    const nineStars = 九星(earthGans, dunGan, hourGan);

    // 八門
    const eightDoors = 八門(emissaryDoor, emissaryCell);

    // 天乙
    const tianYiStar = 天乙(skyGans, nineStars, hourGan);

    // 旺相休囚死
    const seasonCycle = 旺相休囚死(monthGan);

    // 空亡
    const voidZhis = 空亡(daysHead);

    // 驛馬
    const horse = 驛馬(hourZhi);

    const qimenPan: QimenPan = {
        lunar,
        八字: [yearStem, monthStem, dayStem, hourStem],
        上中下元: upperMiddleLowerSector,
        遁: yinOrYangDun,
        局數: inning,
        旬首: daysHead,
        遁干: dunGan,
        值符星: headStar,
        值符落宮: headCell,
        值使門: emissaryDoor,
        值使落宮: emissaryCell,
        空亡: voidZhis,
        天乙星: tianYiStar,
        驛馬: horse,
        節氣: solarTerm,
        旺相休囚死: seasonCycle,
        九宮: earthGans.map(
            (_, index) =>
                ({
                    八神: eightGods[index],
                    九星: nineStars[index],
                    八門: eightDoors[index],
                    天盤干: index === nineStars.indexOf("天芮") ? [earthGans[4], skyGans[index]] : skyGans[index] ? [skyGans[index]] : [],
                    地盤干: index === 1 ? [earthGans[4], earthGans[index]] : [earthGans[index]],
                    宮位: 宮位飛星序[index],
                    是否空亡: voidZhis.some(_ => 宮位地支(宮位飛星序[index]).includes(_)),
                    是否驛馬: 宮位地支(宮位飛星序[index]).includes(horse),
                } as QimenCell)
        ),
    };

    return qimenPan;
};

const prettyLog = (qimenPan: QimenPan) => {
    const printCell = (cell: QimenCell) => {
        return `${cell.天盤干.length ? `${cell.天盤干}+` : ""}${cell.地盤干} ${cell.八神 ?? ""} ${cell.九星 ?? ""} ${cell.八門 ?? ""} ${cell.宮位}${cell.是否空亡 ? " (空)" : ""}${
            cell.是否驛馬 ? " (馬)" : ""
        }`;
    };

    const [年, 月, 日, 時] = qimenPan.八字;

    const 節 = qimenPan.lunar.getPrevJie();
    const 氣 = qimenPan.lunar.getPrevQi();

    console.log(`${qimenPan.lunar.getSolar().toFullString()}
${qimenPan.lunar.toString()}日${qimenPan.lunar.getTimeZhi()}時
${節.getName()} (${節.getSolar().toYmdHms()})
${氣.getName()} (${氣.getSolar().toYmdHms()})
${qimenPan.上中下元}${qimenPan.遁}${QimenFormatUtil.中文局數(qimenPan.局數)}局`);

    console.table(
        [
            {時: 時[0], 日: 日[0], 月: 月[0], 年: 年[0]},
            {時: 時[1], 日: 日[1], 月: 月[1], 年: 年[1]},
        ],
        ["時", "日", "月", "年"]
    );

    console.table([
        [printCell(qimenPan.九宮[3]), printCell(qimenPan.九宮[8]), printCell(qimenPan.九宮[1])],
        [printCell(qimenPan.九宮[2]), printCell(qimenPan.九宮[4]), printCell(qimenPan.九宮[6])],
        [printCell(qimenPan.九宮[7]), printCell(qimenPan.九宮[0]), printCell(qimenPan.九宮[5])],
    ]);

    console.table({
        值符: `${qimenPan.旬首}${qimenPan.遁干} ${qimenPan.值符星}落${qimenPan.值符落宮}`,
        值使: `${qimenPan.值使門}落${qimenPan.值使落宮}`,
        天乙: qimenPan.天乙星,
    });

    console.table([{旺: qimenPan.旺相休囚死[0], 相: qimenPan.旺相休囚死[1], 休: qimenPan.旺相休囚死[1], 囚: qimenPan.旺相休囚死[1], 死: qimenPan.旺相休囚死[1]}], ["旺", "相", "休", "囚", "死"]);
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
    空亡,
    驛馬,
    天乙,
    旺相休囚死,
    create,
    prettyLog,
});
