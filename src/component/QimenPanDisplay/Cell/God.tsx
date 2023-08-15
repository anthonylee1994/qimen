import React from "react";
import {八神} from "@/qimen/type";
import {Flex} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";

interface Props {
    panSize: number;
    value: 八神;
    isScoreMode: boolean;
    highlight?: boolean;
}

export const God = React.memo<Props>(({panSize, value, isScoreMode, highlight}) => {
    return (
        <Flex
            justifyContent="center"
            fontSize={`${panSize / 25}px`}
            color={isScoreMode ? scoreColor(value) : ColorUtil.八神(value)}
            borderColor={highlight ? "teal.300" : undefined}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            borderRadius="md"
            width={panSize / 8}
        >
            {value || "　"}
        </Flex>
    );
});

const scoreColor = (value: 八神) => {
    switch (ScoreModeUtil.godScore(value)) {
        case "吉":
            return "red.500";
        case "大凶":
            return "green.400";
        case "平":
            return "gray.700";
    }
};
