import {QimenCell} from "@/qimen/type";

const isLuckyDoor = (cell: QimenCell) => {
    switch (cell.宮位) {
        case "坎一宮":
            return ["開門"].includes(cell.八門);
        case "坤二宮":
            return ["開門", "景門"].includes(cell.八門);
        case "震三宮":
        case "巽四宮":
            return ["休門", "景門"].includes(cell.八門);
        case "中五宮":
            return false;
        case "乾六宮":
            return ["休門", "生門"].includes(cell.八門);
        case "兌七宮":
            return ["開門", "休門", "生門"].includes(cell.八門);
        case "艮八宮":
            return ["開門", "景門"].includes(cell.八門);
        case "離九宮":
            return ["生門"].includes(cell.八門);
    }
};

const isInJail = (cell: QimenCell) => {
    switch (cell.宮位) {
        case "坎一宮":
        case "乾六宮":
        case "兌七宮":
        case "中五宮":
            return false;
        case "坤二宮":
            return cell.天盤干.includes("己") || cell.地盤干.includes("己");
        case "震三宮":
            return cell.天盤干.includes("戊") || cell.地盤干.includes("戊");
        case "巽四宮":
            return cell.天盤干.includes("壬") || cell.地盤干.includes("壬") || cell.天盤干.includes("癸") || cell.地盤干.includes("癸");
        case "艮八宮":
            return cell.天盤干.includes("庚") || cell.地盤干.includes("庚");
        case "離九宮":
            return cell.天盤干.includes("辛") || cell.地盤干.includes("辛");
    }
};

const hasTiger = (cell: QimenCell) => {
    return cell.八神 === "白虎";
};

const isBlackHole = (cell: QimenCell) => {
    return cell.是否空亡;
};

const isLucky = (cell: QimenCell) => {
    return isLuckyDoor(cell) && !isInJail(cell) && !hasTiger(cell) && !isBlackHole(cell);
};

export const LuckyCellUtil = Object.freeze({
    isLucky,
});
