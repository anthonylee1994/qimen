import {QimenFormatUtil} from "../FormatUtil";

describe("FormatUtil", () => {
    it("should work as expected", () => {
        expect(QimenFormatUtil.中文局數(1)).toEqual("一");
        expect(QimenFormatUtil.中文局數(4)).toEqual("四");
        expect(QimenFormatUtil.中文局數(6)).toEqual("六");
        expect(QimenFormatUtil.中文局數(8)).toEqual("八");
        expect(QimenFormatUtil.中文局數(9)).toEqual("九");

        expect(QimenFormatUtil.局名("陽遁", 9)).toEqual("陽遁九局");
        expect(QimenFormatUtil.局名("陰遁", 6)).toEqual("陰遁六局");
    });
});
