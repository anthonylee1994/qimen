import {九星, 八神, 八門, 天干} from "@/qimen/type";

type ScoreType = "吉" | "大凶" | "平";

const ganScore = (gan: 天干): ScoreType => {
    if (["乙", "丙", "丁", "戊"].includes(gan)) {
        return "吉";
    } else if (gan === "庚") {
        return "大凶";
    }

    return "平";
};

const godScore = (god: 八神): ScoreType => {
    if (["值符", "太陰", "六合", "九天"].includes(god)) {
        return "吉";
    } else if (god === "白虎") {
        return "大凶";
    }
    return "平";
};

const starScore = (star: 九星): ScoreType => {
    if (["天任", "天輔", "天心"].includes(star)) {
        return "吉";
    } else if (["天蓬", "天芮"].includes(star)) {
        return "大凶";
    }
    return "平";
};

const doorScore = (door: 八門): ScoreType => {
    if (["開門", "休門", "生門"].includes(door)) {
        return "吉";
    } else if (["死門"].includes(door)) {
        return "大凶";
    }
    return "平";
};

const totalScore = (god: 八神, star: 九星, door: 八門, tinGan: 天干[], diGan: 天干[], isBlackHole: boolean): number => {
    if (isBlackHole) {
        return 0;
    }

    let total = 0;

    const gs = godScore(god);
    if (gs === "大凶") {
        return 0;
    } else if (gs === "吉") {
        total += 20;
    }

    const ss = starScore(star);
    if (ss === "大凶") {
        return 0;
    } else if (ss === "吉") {
        total += 20;
    }

    const ds = doorScore(door);
    if (ds === "大凶") {
        return 0;
    } else if (ds === "吉") {
        total += 40;
    }

    const tgs = tinGan.map(ganScore);
    const dgs = diGan.map(ganScore);
    const tdgs = [...tgs, ...dgs];

    if (tdgs.includes("大凶")) {
        return 0;
    }

    total += (tgs.filter(_ => _ === "吉").length / tgs.length) * 10;
    total += (dgs.filter(_ => _ === "吉").length / dgs.length) * 10;

    return total;
};

export const ScoreModeUtil = Object.freeze({
    ganScore,
    godScore,
    starScore,
    doorScore,
    totalScore,
});
