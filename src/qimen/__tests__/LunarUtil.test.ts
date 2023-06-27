import {LunarUtil} from "../LunarUtil";
import {Lunar} from "lunar-typescript";

describe("LunarUtil", () => {
    it("should work as expected", () => {
        const lunar1 = Lunar.fromDate(new Date("2023-06-27T11:00:00+08:00"));
        expect(LunarUtil.日干支(lunar1)).toEqual("丙辰");
        expect(LunarUtil.時干支(lunar1)).toEqual("甲午");
        expect(LunarUtil.節氣(lunar1)).toEqual("夏至");

        const lunar2 = Lunar.fromDate(new Date("1994-04-24T17:00:00+08:00"));
        expect(LunarUtil.日干支(lunar2)).toEqual("庚辰");
        expect(LunarUtil.時干支(lunar2)).toEqual("乙酉");
        expect(LunarUtil.節氣(lunar2)).toEqual("谷雨");
    });
});
