import React from "react";
import {QimenCalculator} from "@/qimen/QimenCalculator.ts";

export const App = React.memo(() => {
    // "1994-04-24T17:25:00"
    // "2023-06-26T13:25:00"
    const calculator = new QimenCalculator(new Date("2023-06-26T17:25:00"));
    calculator.calculate();

    return <React.Fragment>123</React.Fragment>;
});
