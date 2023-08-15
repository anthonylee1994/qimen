import {八門, 天干, 宮位} from "@/qimen/type";

const isDoorAttackCell = (cell: 宮位, door: 八門): boolean => {
    switch (cell) {
        case "坎一宮":
            return ["生門", "死門"].includes(door);
        case "坤二宮":
        case "艮八宮":
            return ["傷門", "杜門"].includes(door);
        case "震三宮":
        case "巽四宮":
            return ["開門", "驚門"].includes(door);
        case "中五宮":
            return false;
        case "乾六宮":
        case "兌七宮":
            return ["景門"].includes(door);
        case "離九宮":
            return ["休門"].includes(door);
    }
};

const isInJail = (cell: 宮位, gan: 天干) => {
    switch (cell) {
        case "坎一宮":
        case "乾六宮":
        case "兌七宮":
        case "中五宮":
            return false;
        case "坤二宮":
            return gan === "己";
        case "震三宮":
            return gan === "戊";
        case "巽四宮":
            return gan === "壬" || gan === "癸";
        case "艮八宮":
            return gan === "庚";
        case "離九宮":
            return gan === "辛";
    }
};

const isInGrave = (cell: 宮位, gan: 天干) => {
    switch (cell) {
        case "坎一宮":
        case "兌七宮":
        case "震三宮":
        case "中五宮":
        case "離九宮":
            return false;
        case "乾六宮":
            return ["乙", "丙", "戊"].includes(gan);
        case "坤二宮":
            return ["癸"].includes(gan);
        case "艮八宮":
            return ["丁", "己", "庚"].includes(gan);
        case "巽四宮":
            return ["辛", "壬"].includes(gan);
    }
};

export const FourDangerUtil = Object.freeze({
    isDoorAttackCell, // 門迫
    isInJail, // 擊刑
    isInGrave, // 入墓
});
