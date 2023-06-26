import React from "react";
import {QimenCalculator} from "@/qimen/QimenCalculator.ts";

export const App = React.memo(() => {
    // "1994-04-24T17:25:00"
    // "2023-06-26T13:25:00"
    const calculator = new QimenCalculator(new Date("1994-04-24T17:25:00"));

    // for (let i = 1; i <= 9; i++) {
    //     console.log(QimenCalculator.局名("陰遁", i as 局數));
    //     QimenCalculator.天干測試(QimenCalculator.地盤干("陰遁", i));
    //     console.log("");
    // }

    console.log(calculator.局名());
    QimenCalculator.天干測試(calculator.地盤干());

    return <React.Fragment>123</React.Fragment>;
});
