import {QimenUtil} from "../QimenUtil";
import {三奇六儀} from "../type";

describe("QimenUtil", () => {
    it("陰遁 / 陽遁", () => {
        // 夏至一陰生
        expect(QimenUtil.陰遁或陽遁("夏至")).toEqual("陰遁");
        expect(QimenUtil.陰遁或陽遁("大雪")).toEqual("陰遁");

        // 冬至一陽生
        expect(QimenUtil.陰遁或陽遁("冬至")).toEqual("陽遁");
        expect(QimenUtil.陰遁或陽遁("芒种")).toEqual("陽遁");
    });

    it("上中下元", () => {
        expect(QimenUtil.上中下元("甲子")).toEqual("上元");
        expect(QimenUtil.上中下元("己巳")).toEqual("中元");
        expect(QimenUtil.上中下元("甲戌")).toEqual("下元");
    });

    it("局數", () => {
        expect(QimenUtil.局數("谷雨", "上元")).toEqual(5);
        expect(QimenUtil.局數("谷雨", "中元")).toEqual(2);
        expect(QimenUtil.局數("谷雨", "下元")).toEqual(8);

        expect(QimenUtil.局數("夏至", "上元")).toEqual(9);
        expect(QimenUtil.局數("夏至", "中元")).toEqual(3);
        expect(QimenUtil.局數("夏至", "下元")).toEqual(6);
    });

    it("旬首", () => {
        expect(QimenUtil.旬首("庚辰")).toEqual("甲戌");
        expect(QimenUtil.旬首("乙酉")).toEqual("甲申");
        expect(QimenUtil.旬首("癸卯")).toEqual("甲午");
    });

    it("遁干", () => {
        expect(QimenUtil.遁干("甲子")).toEqual("戊");
        expect(QimenUtil.遁干("甲戌")).toEqual("己");
        expect(QimenUtil.遁干("甲申")).toEqual("庚");
        expect(QimenUtil.遁干("甲午")).toEqual("辛");
        expect(QimenUtil.遁干("甲辰")).toEqual("壬");
        expect(QimenUtil.遁干("甲寅")).toEqual("癸");
    });

    it("地盤干", () => {
        expect(QimenUtil.地盤干("陽遁", 1)).toEqual(["戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"]);
        expect(QimenUtil.地盤干("陽遁", 2)).toEqual(["乙", "戊", "己", "庚", "辛", "壬", "癸", "丁", "丙"]);
        expect(QimenUtil.地盤干("陽遁", 3)).toEqual(["丙", "乙", "戊", "己", "庚", "辛", "壬", "癸", "丁"]);
        expect(QimenUtil.地盤干("陽遁", 4)).toEqual(["丁", "丙", "乙", "戊", "己", "庚", "辛", "壬", "癸"]);
        expect(QimenUtil.地盤干("陽遁", 5)).toEqual(["癸", "丁", "丙", "乙", "戊", "己", "庚", "辛", "壬"]);
        expect(QimenUtil.地盤干("陽遁", 6)).toEqual(["壬", "癸", "丁", "丙", "乙", "戊", "己", "庚", "辛"]);
        expect(QimenUtil.地盤干("陽遁", 7)).toEqual(["辛", "壬", "癸", "丁", "丙", "乙", "戊", "己", "庚"]);
        expect(QimenUtil.地盤干("陽遁", 8)).toEqual(["庚", "辛", "壬", "癸", "丁", "丙", "乙", "戊", "己"]);
        expect(QimenUtil.地盤干("陽遁", 9)).toEqual(["己", "庚", "辛", "壬", "癸", "丁", "丙", "乙", "戊"]);

        expect(QimenUtil.地盤干("陰遁", 1)).toEqual(["戊", "乙", "丙", "丁", "癸", "壬", "辛", "庚", "己"]);
        expect(QimenUtil.地盤干("陰遁", 2)).toEqual(["己", "戊", "乙", "丙", "丁", "癸", "壬", "辛", "庚"]);
        expect(QimenUtil.地盤干("陰遁", 3)).toEqual(["庚", "己", "戊", "乙", "丙", "丁", "癸", "壬", "辛"]);
        expect(QimenUtil.地盤干("陰遁", 4)).toEqual(["辛", "庚", "己", "戊", "乙", "丙", "丁", "癸", "壬"]);
        expect(QimenUtil.地盤干("陰遁", 5)).toEqual(["壬", "辛", "庚", "己", "戊", "乙", "丙", "丁", "癸"]);
        expect(QimenUtil.地盤干("陰遁", 6)).toEqual(["癸", "壬", "辛", "庚", "己", "戊", "乙", "丙", "丁"]);
        expect(QimenUtil.地盤干("陰遁", 7)).toEqual(["丁", "癸", "壬", "辛", "庚", "己", "戊", "乙", "丙"]);
        expect(QimenUtil.地盤干("陰遁", 8)).toEqual(["丙", "丁", "癸", "壬", "辛", "庚", "己", "戊", "乙"]);
        expect(QimenUtil.地盤干("陰遁", 9)).toEqual(["乙", "丙", "丁", "癸", "壬", "辛", "庚", "己", "戊"]);
    });

    it("天盤干", () => {
        const 地盤干: 三奇六儀[] = ["癸", "丁", "丙", "乙", "戊", "己", "庚", "辛", "壬"];
        expect(QimenUtil.天盤干(地盤干, "己", "甲")).toEqual(["癸", "丁", "丙", "乙", undefined, "己", "庚", "辛", "壬"]);
        expect(QimenUtil.天盤干(地盤干, "己", "乙")).toEqual(["壬", "辛", "庚", "己", undefined, "乙", "丙", "丁", "癸"]);
        expect(QimenUtil.天盤干(地盤干, "己", "丙")).toEqual(["丁", "丙", "己", "癸", undefined, "壬", "乙", "庚", "辛"]);
        expect(QimenUtil.天盤干(地盤干, "己", "丁")).toEqual(["丙", "己", "壬", "丁", undefined, "辛", "癸", "乙", "庚"]);
        expect(QimenUtil.天盤干(地盤干, "己", "戊")).toEqual(["丙", "己", "壬", "丁", undefined, "辛", "癸", "乙", "庚"]);
        expect(QimenUtil.天盤干(地盤干, "己", "己")).toEqual(["癸", "丁", "丙", "乙", undefined, "己", "庚", "辛", "壬"]);
        expect(QimenUtil.天盤干(地盤干, "己", "庚")).toEqual(["辛", "庚", "乙", "壬", undefined, "癸", "己", "丙", "丁"]);
        expect(QimenUtil.天盤干(地盤干, "己", "辛")).toEqual(["庚", "乙", "癸", "辛", undefined, "丁", "壬", "己", "丙"]);
        expect(QimenUtil.天盤干(地盤干, "己", "壬")).toEqual(["乙", "癸", "丁", "庚", undefined, "丙", "辛", "壬", "己"]);
        expect(QimenUtil.天盤干(地盤干, "己", "癸")).toEqual(["己", "壬", "辛", "丙", undefined, "庚", "丁", "癸", "乙"]);

        expect(QimenUtil.天盤干(地盤干, "庚", "甲")).toEqual(["癸", "丁", "丙", "乙", undefined, "己", "庚", "辛", "壬"]);
        expect(QimenUtil.天盤干(地盤干, "庚", "乙")).toEqual(["乙", "癸", "丁", "庚", undefined, "丙", "辛", "壬", "己"]);
        expect(QimenUtil.天盤干(地盤干, "庚", "丙")).toEqual(["壬", "辛", "庚", "己", undefined, "乙", "丙", "丁", "癸"]);
        expect(QimenUtil.天盤干(地盤干, "庚", "丁")).toEqual(["辛", "庚", "乙", "壬", undefined, "癸", "己", "丙", "丁"]);
        expect(QimenUtil.天盤干(地盤干, "庚", "戊")).toEqual(["辛", "庚", "乙", "壬", undefined, "癸", "己", "丙", "丁"]);
        expect(QimenUtil.天盤干(地盤干, "庚", "己")).toEqual(["己", "壬", "辛", "丙", undefined, "庚", "丁", "癸", "乙"]);
    });

    it("八神", () => {
        const 地盤干1: 三奇六儀[] = ["癸", "丁", "丙", "乙", "戊", "己", "庚", "辛", "壬"];
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "甲")).toEqual(["騰蛇", "九地", "六合", "白虎", undefined, "值符", "九天", "太陰", "玄武"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "乙")).toEqual(["玄武", "太陰", "九天", "值符", undefined, "白虎", "六合", "九地", "騰蛇"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "丙")).toEqual(["九地", "六合", "值符", "騰蛇", undefined, "玄武", "白虎", "九天", "太陰"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "丁")).toEqual(["六合", "值符", "玄武", "九地", undefined, "太陰", "騰蛇", "白虎", "九天"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "戊")).toEqual(["六合", "值符", "玄武", "九地", undefined, "太陰", "騰蛇", "白虎", "九天"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "己")).toEqual(["騰蛇", "九地", "六合", "白虎", undefined, "值符", "九天", "太陰", "玄武"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "庚")).toEqual(["太陰", "九天", "白虎", "玄武", undefined, "騰蛇", "值符", "六合", "九地"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "辛")).toEqual(["九天", "白虎", "騰蛇", "太陰", undefined, "九地", "玄武", "值符", "六合"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "壬")).toEqual(["白虎", "騰蛇", "九地", "九天", undefined, "六合", "太陰", "玄武", "值符"]);
        expect(QimenUtil.八神(地盤干1, "陽遁", "己", "癸")).toEqual(["值符", "玄武", "太陰", "六合", undefined, "九天", "九地", "騰蛇", "白虎"]);

        const 地盤干2: 三奇六儀[] = ["庚", "己", "戊", "乙", "丙", "丁", "癸", "壬", "辛"];
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "甲")).toEqual(["白虎", "九天", "太陰", "騰蛇", undefined, "玄武", "九地", "六合", "值符"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "乙")).toEqual(["六合", "九地", "騰蛇", "值符", undefined, "白虎", "玄武", "太陰", "九天"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "丙")).toEqual(["玄武", "值符", "六合", "太陰", undefined, "九地", "九天", "白虎", "騰蛇"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "丁")).toEqual(["九天", "太陰", "玄武", "白虎", undefined, "值符", "騰蛇", "九地", "六合"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "戊")).toEqual(["太陰", "玄武", "值符", "九天", undefined, "六合", "白虎", "騰蛇", "九地"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "己")).toEqual(["玄武", "值符", "六合", "太陰", undefined, "九地", "九天", "白虎", "騰蛇"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "庚")).toEqual(["值符", "六合", "九地", "玄武", undefined, "騰蛇", "太陰", "九天", "白虎"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "辛")).toEqual(["白虎", "九天", "太陰", "騰蛇", undefined, "玄武", "九地", "六合", "值符"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "壬")).toEqual(["騰蛇", "白虎", "九天", "九地", undefined, "太陰", "六合", "值符", "玄武"]);
        expect(QimenUtil.八神(地盤干2, "陰遁", "辛", "癸")).toEqual(["九地", "騰蛇", "白虎", "六合", undefined, "九天", "值符", "玄武", "太陰"]);
    });

    it("九星", () => {
        const 地盤干: 三奇六儀[] = ["癸", "丁", "丙", "乙", "戊", "己", "庚", "辛", "壬"];

        expect(QimenUtil.九星(地盤干, "戊", "甲")).toEqual(["天蓬", "天芮", "天冲", "天輔", undefined, "天心", "天柱", "天任", "天英"]);
        expect(QimenUtil.九星(地盤干, "戊", "乙")).toEqual(["天冲", "天心", "天英", "天芮", undefined, "天任", "天蓬", "天輔", "天柱"]);
        expect(QimenUtil.九星(地盤干, "戊", "丙")).toEqual(["天輔", "天蓬", "天芮", "天柱", undefined, "天冲", "天任", "天英", "天心"]);
        expect(QimenUtil.九星(地盤干, "戊", "丁")).toEqual(["天蓬", "天芮", "天冲", "天輔", undefined, "天心", "天柱", "天任", "天英"]);
        expect(QimenUtil.九星(地盤干, "戊", "戊")).toEqual(["天蓬", "天芮", "天冲", "天輔", undefined, "天心", "天柱", "天任", "天英"]);
        expect(QimenUtil.九星(地盤干, "戊", "己")).toEqual(["天柱", "天輔", "天蓬", "天任", undefined, "天芮", "天英", "天心", "天冲"]);
        expect(QimenUtil.九星(地盤干, "戊", "庚")).toEqual(["天心", "天英", "天任", "天冲", undefined, "天柱", "天芮", "天蓬", "天輔"]);
        expect(QimenUtil.九星(地盤干, "戊", "辛")).toEqual(["天英", "天任", "天柱", "天心", undefined, "天輔", "天冲", "天芮", "天蓬"]);
        expect(QimenUtil.九星(地盤干, "戊", "壬")).toEqual(["天任", "天柱", "天輔", "天英", undefined, "天蓬", "天心", "天冲", "天芮"]);
        expect(QimenUtil.九星(地盤干, "戊", "癸")).toEqual(["天芮", "天冲", "天心", "天蓬", undefined, "天英", "天輔", "天柱", "天任"]);

        expect(QimenUtil.九星(地盤干, "己", "甲")).toEqual(["天蓬", "天芮", "天冲", "天輔", undefined, "天心", "天柱", "天任", "天英"]);
        expect(QimenUtil.九星(地盤干, "己", "乙")).toEqual(["天英", "天任", "天柱", "天心", undefined, "天輔", "天冲", "天芮", "天蓬"]);
        expect(QimenUtil.九星(地盤干, "己", "丙")).toEqual(["天芮", "天冲", "天心", "天蓬", undefined, "天英", "天輔", "天柱", "天任"]);
        expect(QimenUtil.九星(地盤干, "己", "丁")).toEqual(["天冲", "天心", "天英", "天芮", undefined, "天任", "天蓬", "天輔", "天柱"]);
        expect(QimenUtil.九星(地盤干, "己", "戊")).toEqual(["天冲", "天心", "天英", "天芮", undefined, "天任", "天蓬", "天輔", "天柱"]);
        expect(QimenUtil.九星(地盤干, "己", "己")).toEqual(["天蓬", "天芮", "天冲", "天輔", undefined, "天心", "天柱", "天任", "天英"]);
        expect(QimenUtil.九星(地盤干, "己", "庚")).toEqual(["天任", "天柱", "天輔", "天英", undefined, "天蓬", "天心", "天冲", "天芮"]);
        expect(QimenUtil.九星(地盤干, "己", "辛")).toEqual(["天柱", "天輔", "天蓬", "天任", undefined, "天芮", "天英", "天心", "天冲"]);
        expect(QimenUtil.九星(地盤干, "己", "壬")).toEqual(["天輔", "天蓬", "天芮", "天柱", undefined, "天冲", "天任", "天英", "天心"]);
        expect(QimenUtil.九星(地盤干, "己", "癸")).toEqual(["天心", "天英", "天任", "天冲", undefined, "天柱", "天芮", "天蓬", "天輔"]);
    });

    it("值符落宮", () => {
        const 地盤干: 三奇六儀[] = ["癸", "丁", "丙", "乙", "戊", "己", "庚", "辛", "壬"];
        expect(QimenUtil.值符落宮(地盤干, "戊", "甲")).toEqual(["天禽", "中五宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "乙")).toEqual(["天禽", "巽四宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "丙")).toEqual(["天禽", "震三宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "丁")).toEqual(["天禽", "坤二宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "戊")).toEqual(["天禽", "中五宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "己")).toEqual(["天禽", "乾六宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "庚")).toEqual(["天禽", "兌七宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "辛")).toEqual(["天禽", "艮八宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "壬")).toEqual(["天禽", "離九宮"]);
        expect(QimenUtil.值符落宮(地盤干, "戊", "癸")).toEqual(["天禽", "坎一宮"]);

        expect(QimenUtil.值符落宮(地盤干, "己", "甲")).toEqual(["天心", "乾六宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "乙")).toEqual(["天心", "巽四宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "丙")).toEqual(["天心", "震三宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "丁")).toEqual(["天心", "坤二宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "戊")).toEqual(["天心", "中五宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "己")).toEqual(["天心", "乾六宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "庚")).toEqual(["天心", "兌七宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "辛")).toEqual(["天心", "艮八宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "壬")).toEqual(["天心", "離九宮"]);
        expect(QimenUtil.值符落宮(地盤干, "己", "癸")).toEqual(["天心", "坎一宮"]);
    });

    it("值使門", () => {
        const 地盤干: 三奇六儀[] = ["癸", "丁", "丙", "乙", "戊", "己", "庚", "辛", "壬"];
        expect(QimenUtil.值使門(地盤干, "戊", "甲")).toEqual(["死門", "中五宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "乙")).toEqual(["死門", "乾六宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "丙")).toEqual(["死門", "兌七宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "丁")).toEqual(["死門", "艮八宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "戊")).toEqual(["死門", "離九宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "己")).toEqual(["死門", "坎一宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "庚")).toEqual(["死門", "坤二宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "辛")).toEqual(["死門", "震三宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "壬")).toEqual(["死門", "巽四宮"]);
        expect(QimenUtil.值使門(地盤干, "戊", "癸")).toEqual(["死門", "中五宮"]);

        expect(QimenUtil.值使門(地盤干, "己", "甲")).toEqual(["開門", "乾六宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "乙")).toEqual(["開門", "兌七宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "丙")).toEqual(["開門", "艮八宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "丁")).toEqual(["開門", "離九宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "戊")).toEqual(["開門", "坎一宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "己")).toEqual(["開門", "坤二宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "庚")).toEqual(["開門", "震三宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "辛")).toEqual(["開門", "巽四宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "壬")).toEqual(["開門", "中五宮"]);
        expect(QimenUtil.值使門(地盤干, "己", "癸")).toEqual(["開門", "乾六宮"]);

        expect(QimenUtil.值使門(地盤干, "庚", "甲")).toEqual(["驚門", "兌七宮"]);
        expect(QimenUtil.值使門(地盤干, "辛", "甲")).toEqual(["生門", "艮八宮"]);
        expect(QimenUtil.值使門(地盤干, "壬", "甲")).toEqual(["景門", "離九宮"]);
        expect(QimenUtil.值使門(地盤干, "癸", "甲")).toEqual(["休門", "坎一宮"]);
    });

    it("八門", () => {
        expect(QimenUtil.八門("死門", "中五宮")).toEqual(["休門", "死門", "傷門", "杜門", undefined, "開門", "驚門", "生門", "景門"]);
        expect(QimenUtil.八門("死門", "乾六宮")).toEqual(["驚門", "杜門", "休門", "生門", undefined, "死門", "景門", "開門", "傷門"]);
        expect(QimenUtil.八門("死門", "兌七宮")).toEqual(["開門", "景門", "生門", "傷門", undefined, "驚門", "死門", "休門", "杜門"]);
        expect(QimenUtil.八門("死門", "艮八宮")).toEqual(["景門", "生門", "驚門", "開門", undefined, "杜門", "傷門", "死門", "休門"]);
        expect(QimenUtil.八門("死門", "離九宮")).toEqual(["生門", "驚門", "杜門", "景門", undefined, "休門", "開門", "傷門", "死門"]);
        expect(QimenUtil.八門("死門", "坎一宮")).toEqual(["死門", "傷門", "開門", "休門", undefined, "景門", "杜門", "驚門", "生門"]);
        expect(QimenUtil.八門("死門", "坤二宮")).toEqual(["休門", "死門", "傷門", "杜門", undefined, "開門", "驚門", "生門", "景門"]);
        expect(QimenUtil.八門("死門", "震三宮")).toEqual(["杜門", "休門", "死門", "驚門", undefined, "傷門", "生門", "景門", "開門"]);
        expect(QimenUtil.八門("死門", "巽四宮")).toEqual(["傷門", "開門", "景門", "死門", undefined, "生門", "休門", "杜門", "驚門"]);

        expect(QimenUtil.八門("開門", "乾六宮")).toEqual(["休門", "死門", "傷門", "杜門", undefined, "開門", "驚門", "生門", "景門"]);
        expect(QimenUtil.八門("生門", "艮八宮")).toEqual(["休門", "死門", "傷門", "杜門", undefined, "開門", "驚門", "生門", "景門"]);
        expect(QimenUtil.八門("景門", "離九宮")).toEqual(["休門", "死門", "傷門", "杜門", undefined, "開門", "驚門", "生門", "景門"]);
        expect(QimenUtil.八門("休門", "坎一宮")).toEqual(["休門", "死門", "傷門", "杜門", undefined, "開門", "驚門", "生門", "景門"]);
    });
});
