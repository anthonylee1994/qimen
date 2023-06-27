import {Lunar} from "lunar-typescript";

const 時干支 = (lunar: Lunar): string => {
    return `${lunar.getTimeGan()}${lunar.getTimeZhi()}`;
};

const 日干支 = (lunar: Lunar): string => {
    return `${lunar.getDayGan()}${lunar.getDayZhi()}`;
};

const 節氣 = (lunar: Lunar): string => {
    return lunar.getPrevJieQi(true).getName();
};

export const LunarUtil = Object.freeze({
    時干支,
    日干支,
    節氣,
});
