import {地支, 天干} from "@/qimen/type";

export type TimeType = "天顯時格" | "五不遇時" | "時干入墓" | null;

const auspiciousTimeMap: Record<天干, 地支 | null> = {
    甲: "巳",
    己: "巳",
    乙: "申",
    庚: "申",
    丙: "午",
    辛: "午",
    丁: "辰",
    壬: "寅",
    戊: null, // 同時為五不遇時，因此不用
    癸: "寅",
};

const fiveUnavoidableTimeMap: Record<天干, 天干> = {
    甲: "庚",
    乙: "辛",
    丙: "壬",
    丁: "癸",
    戊: "甲",
    己: "乙",
    庚: "丙",
    辛: "丁",
    壬: "戊",
    癸: "己",
};

const burialTimeMap: Record<天干, 地支 | null> = {
    甲: "丑", // not exists
    乙: "戌", // not exists
    丙: "戌",
    丁: "丑",
    戊: "戌",
    己: "丑",
    庚: "丑", // not exists
    辛: "辰", // not exists
    壬: "辰",
    癸: "未",
};

const isAuspiciousTime = (日干: 天干, 時支: 地支): boolean => {
    return auspiciousTimeMap[日干] === 時支;
};

const isFiveUnavoidableTime = (日干: 天干, 時干: 天干): boolean => {
    return fiveUnavoidableTimeMap[日干] === 時干;
};

const isBurialTime = (時干: 天干, 時支: 地支): boolean => {
    return burialTimeMap[時干] === 時支;
};

const getType = (日干: 天干, 時干: 天干, 時支: 地支): TimeType => {
    if (isAuspiciousTime(日干, 時支)) {
        return "天顯時格";
    } else if (isFiveUnavoidableTime(日干, 時干)) {
        return "五不遇時";
    } else if (isBurialTime(時干, 時支)) {
        return "時干入墓";
    }

    return null;
};

export const AstrologicalTimeUtil = Object.freeze({
    isBurialTime,
    isAuspiciousTime,
    isFiveUnavoidableTime,
    getType,
});
