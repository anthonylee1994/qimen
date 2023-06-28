import {JieQi, Lunar} from "lunar-typescript";
import {六十甲子, 八字} from "./type";

const 時干支 = (lunar: Lunar): 六十甲子 => {
    return `${lunar.getTimeGan()}${lunar.getTimeZhi()}` as 六十甲子;
};

const 日干支 = (lunar: Lunar): 六十甲子 => {
    return `${lunar.getDayGan()}${lunar.getDayZhi()}` as 六十甲子;
};

const 月干支 = (lunar: Lunar): 六十甲子 => {
    return `${lunar.getMonthGan()}${lunar.getMonthZhi()}` as 六十甲子;
};

const 年干支 = (lunar: Lunar): 六十甲子 => {
    return `${lunar.getYearGan()}${lunar.getYearZhi()}` as 六十甲子;
};

const 八字 = (lunar: Lunar): 八字 => {
    return [年干支(lunar), 月干支(lunar), 日干支(lunar), 時干支(lunar)];
};

const 節氣 = (lunar: Lunar): JieQi => {
    return lunar.getPrevJieQi(true);
};

export const LunarUtil = Object.freeze({
    時干支,
    日干支,
    月干支,
    年干支,
    八字,
    節氣,
});
