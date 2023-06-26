import React from "react";
import {QimenCalculator} from "@/qimen/QimenCalculator.ts";

export const App = React.memo(() => {
    const calculator = new QimenCalculator(new Date("1994-04-24T17:25:00"));
    console.log("旬首", calculator.旬首());
    console.log("前節氣", calculator.目前節氣());
    console.log("上中下元", calculator.上中下元());
    console.log("遁", calculator.遁());
    console.log("局數", calculator.局數());
    console.log("局名", calculator.局名());

    return <React.Fragment>123</React.Fragment>;
});
