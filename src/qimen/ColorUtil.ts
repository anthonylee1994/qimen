import type {九星, 八神, 八門, 地支, 天干} from "@/qimen/type";

const colorMap = {
    wood: "green.600",
    fire: "red.500",
    earth: "orange.600",
    metal: "orange.400",
    water: "blue.600",
};

const 天干 = (value: 天干): string => {
    switch (value) {
        case "甲":
        case "乙":
            return colorMap.wood;
        case "丙":
        case "丁":
            return colorMap.fire;
        case "戊":
        case "己":
            return colorMap.earth;
        case "庚":
        case "辛":
            return colorMap.metal;
        case "壬":
        case "癸":
            return colorMap.water;
    }
};

const 地支 = (value: 地支): string => {
    switch (value) {
        case "寅":
        case "卯":
            return colorMap.wood;
        case "巳":
        case "午":
            return colorMap.fire;
        case "辰":
        case "戌":
        case "丑":
        case "未":
            return colorMap.earth;
        case "申":
        case "酉":
            return colorMap.metal;
        case "亥":
        case "子":
            return colorMap.water;
    }
};

const 八神 = (value: 八神): string => {
    switch (value) {
        case "值符":
        case "六合":
            return colorMap.wood;
        case "騰蛇":
            return colorMap.fire;
        case "九地":
            return colorMap.earth;
        case "太陰":
        case "白虎":
        case "九天":
            return colorMap.metal;
        case "玄武":
            return colorMap.water;
    }
};

const 八門 = (value: 八門): string => {
    switch (value) {
        case "休門":
            return colorMap.water;
        case "生門":
        case "死門":
            return colorMap.earth;
        case "傷門":
        case "杜門":
            return colorMap.wood;
        case "景門":
            return colorMap.fire;
        case "驚門":
        case "開門":
            return colorMap.metal;
    }
};

const 九星 = (value: 九星): string => {
    switch (value) {
        case "天蓬":
            return colorMap.water;
        case "天任":
        case "天芮":
        case "天禽":
            return colorMap.earth;
        case "天冲":
        case "天輔":
            return colorMap.wood;
        case "天英":
            return colorMap.fire;
        case "天柱":
        case "天心":
            return colorMap.metal;
    }
};

export const ColorUtil = Object.freeze({
    天干,
    八神,
    八門,
    九星,
    地支,
});
