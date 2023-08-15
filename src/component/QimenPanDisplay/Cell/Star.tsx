import React from "react";
import {Text} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";
import {九星} from "@/qimen/type";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";

interface Props {
    panSize: number;
    isScoreMode: boolean;
    value: 九星;
}

export const Star = React.memo<Props>(({panSize, value, isScoreMode}) => {
    return (
        <Text fontSize={`${panSize / 20}px`} color={isScoreMode ? scoreColor(value) : ColorUtil.九星(value)}>
            {value || "　"}
        </Text>
    );
});

const scoreColor = (value: 九星) => {
    switch (ScoreModeUtil.starScore(value)) {
        case "吉":
            return "red.500";
        case "大凶":
            return "green.400";
        case "平":
            return "gray.700";
    }
};
