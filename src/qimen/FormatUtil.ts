import {局數, 遁} from "@/qimen/type";

const 中文局數 = (num: 局數) => {
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
};

const 局名 = (遁: 遁, 局數: 局數) => {
    return `${遁}${中文局數(局數)}局`;
};

export const QimenFormatUtil = Object.freeze({
    中文局數,
    局名,
});
