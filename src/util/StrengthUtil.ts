import {九星, 八門, 宮位} from "@/qimen/type";

export type StarStrength = "旺" | "相" | "休" | "囚" | "廢";

export type DoorStrength = "伏吟" | "次吉" | "入墓" | "門迫" | "反吟" | "受制" | "大吉" | "大凶" | "小凶" | "泄氣" | "受生" | "比和" | "生旺" | "生宮";

const doorStrengthMap: Record<八門, Record<宮位, DoorStrength>> = {
    休門: {
        乾六宮: "大吉",
        坎一宮: "伏吟",
        艮八宮: "受制",
        震三宮: "次吉",
        巽四宮: "入墓",
        離九宮: "反吟",
        坤二宮: "受制",
        兌七宮: "大吉",
        中五宮: "入墓",
    },
    生門: {
        乾六宮: "次吉",
        坎一宮: "門迫",
        艮八宮: "伏吟",
        震三宮: "受制",
        巽四宮: "入墓",
        離九宮: "大吉",
        坤二宮: "反吟",
        兌七宮: "次吉",
        中五宮: "入墓",
    },
    傷門: {
        乾六宮: "受制",
        坎一宮: "大凶",
        艮八宮: "門迫",
        震三宮: "伏吟",
        巽四宮: "小凶",
        離九宮: "泄氣",
        坤二宮: "入墓",
        兌七宮: "反吟",
        中五宮: "入墓",
    },
    杜門: {
        乾六宮: "反吟",
        坎一宮: "受生",
        艮八宮: "門迫",
        震三宮: "比和",
        巽四宮: "伏吟",
        離九宮: "泄氣",
        坤二宮: "入墓",
        兌七宮: "受制",
        中五宮: "入墓",
    },
    景門: {
        乾六宮: "入墓",
        坎一宮: "反吟",
        艮八宮: "生宮",
        震三宮: "生旺",
        巽四宮: "生旺",
        離九宮: "伏吟",
        坤二宮: "生宮",
        兌七宮: "門迫",
        中五宮: "入墓",
    },
    死門: {
        乾六宮: "生宮",
        坎一宮: "門迫",
        艮八宮: "反吟",
        震三宮: "受制",
        巽四宮: "入墓",
        離九宮: "大凶",
        坤二宮: "伏吟",
        兌七宮: "生宮",
        中五宮: "入墓",
    },
    驚門: {
        乾六宮: "比和",
        坎一宮: "泄氣",
        艮八宮: "入墓",
        震三宮: "反吟",
        巽四宮: "門迫",
        離九宮: "受制",
        坤二宮: "受生",
        兌七宮: "伏吟",
        中五宮: "入墓",
    },
    開門: {
        乾六宮: "伏吟",
        坎一宮: "次吉",
        艮八宮: "入墓",
        震三宮: "門迫",
        巽四宮: "反吟",
        離九宮: "受制",
        坤二宮: "大吉",
        兌七宮: "大吉",
        中五宮: "入墓",
    },
};

const starStrengthMap: Record<九星, Record<宮位, StarStrength>> = {
    天蓬: {
        震三宮: "旺",
        巽四宮: "旺",
        離九宮: "休",
        艮八宮: "囚",
        坤二宮: "囚",
        乾六宮: "廢",
        兌七宮: "廢",
        坎一宮: "相",
        中五宮: "廢",
    },
    天任: {
        震三宮: "囚",
        巽四宮: "囚",
        離九宮: "廢",
        艮八宮: "相",
        坤二宮: "相",
        乾六宮: "旺",
        兌七宮: "旺",
        坎一宮: "休",
        中五宮: "廢",
    },
    天冲: {
        震三宮: "相",
        巽四宮: "相",
        離九宮: "旺",
        艮八宮: "休",
        坤二宮: "休",
        乾六宮: "囚",
        兌七宮: "囚",
        坎一宮: "廢",
        中五宮: "廢",
    },
    天輔: {
        震三宮: "相",
        巽四宮: "相",
        離九宮: "旺",
        艮八宮: "休",
        坤二宮: "休",
        乾六宮: "囚",
        兌七宮: "囚",
        坎一宮: "廢",
        中五宮: "廢",
    },
    天英: {
        震三宮: "廢",
        巽四宮: "廢",
        離九宮: "相",
        艮八宮: "旺",
        坤二宮: "旺",
        乾六宮: "休",
        兌七宮: "休",
        坎一宮: "囚",
        中五宮: "廢",
    },
    天芮: {
        震三宮: "囚",
        巽四宮: "囚",
        離九宮: "廢",
        艮八宮: "相",
        坤二宮: "相",
        乾六宮: "旺",
        兌七宮: "旺",
        坎一宮: "休",
        中五宮: "廢",
    },
    天柱: {
        震三宮: "休",
        巽四宮: "休",
        離九宮: "囚",
        艮八宮: "廢",
        坤二宮: "廢",
        乾六宮: "相",
        兌七宮: "相",
        坎一宮: "旺",
        中五宮: "廢",
    },
    天心: {
        震三宮: "休",
        巽四宮: "休",
        離九宮: "囚",
        艮八宮: "廢",
        坤二宮: "廢",
        乾六宮: "相",
        兌七宮: "相",
        坎一宮: "旺",
        中五宮: "廢",
    },
    天禽: {
        震三宮: "廢",
        巽四宮: "廢",
        離九宮: "廢",
        艮八宮: "廢",
        坤二宮: "廢",
        乾六宮: "廢",
        兌七宮: "廢",
        坎一宮: "廢",
        中五宮: "廢",
    },
};

export const StrengthUtil = Object.freeze({
    starStrength(star: 九星, palace: 宮位): StarStrength {
        return starStrengthMap[star][palace];
    },
    doorStrength(door: 八門, palace: 宮位): DoorStrength {
        return doorStrengthMap[door][palace];
    },
});