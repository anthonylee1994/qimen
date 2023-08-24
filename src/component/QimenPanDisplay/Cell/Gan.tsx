import {Flex, Tooltip} from "@chakra-ui/react";
import React from "react";
import {天干} from "@/qimen/type";
import {ColorUtil} from "@/qimen/ColorUtil";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";

interface Props {
    value?: 天干;
    panSize: number;
    isScoreMode: boolean;
    tooltip?: string;
    highlight?: string;
}

export const Gan = React.memo<Props>(({panSize, value, highlight, isScoreMode, tooltip}) => {
    return (
        <Flex
            cursor="pointer"
            width={`${panSize / 16}px`}
            borderRadius={{base: "md", md: "xl"}}
            borderColor={highlight}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            alignItems="center"
            justifyContent="center"
            fontSize={`${panSize / 25}px`}
            color={isScoreMode && value ? scoreColor(value) : value ? ColorUtil.天干(value) : undefined}
        >
            <Tooltip hasArrow label={tooltip} aria-label={tooltip}>
                {value || "　"}
            </Tooltip>
        </Flex>
    );
});

const scoreColor = (value: 天干) => {
    switch (ScoreModeUtil.ganScore(value)) {
        case "吉":
            return "red.500";
        case "大凶":
            return "green.400";
        case "平":
            return "gray.700";
    }
};
