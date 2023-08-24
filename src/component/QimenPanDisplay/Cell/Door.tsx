import React from "react";
import {Flex, Tooltip} from "@chakra-ui/react";
import {八門} from "@/qimen/type";
import {ColorUtil} from "@/qimen/ColorUtil";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";

interface Props {
    panSize: number;
    value: 八門;
    isScoreMode: boolean;
    highlight?: boolean;
    tooltip?: string;
}

export const Door = React.memo<Props>(({panSize, value, isScoreMode, highlight, tooltip}) => {
    return (
        <Flex
            cursor="pointer"
            justifyContent="center"
            fontSize={`${panSize / 20}px`}
            color={isScoreMode ? scoreColor(value) : ColorUtil.八門(value)}
            borderColor={highlight ? "pink.300" : undefined}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            borderRadius={{base: "md", md: "xl"}}
            width={panSize / 8}
        >
            <Tooltip hasArrow label={tooltip} aria-label={tooltip}>
                {value || "　"}
            </Tooltip>
        </Flex>
    );
});

const scoreColor = (value: 八門) => {
    switch (ScoreModeUtil.doorScore(value)) {
        case "吉":
            return "red.500";
        case "大凶":
            return "green.400";
        case "平":
            return "gray.700";
    }
};
