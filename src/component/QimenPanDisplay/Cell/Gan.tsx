import {Flex} from "@chakra-ui/react";
import React from "react";
import {天干} from "@/qimen/type";
import {ColorUtil} from "@/qimen/ColorUtil";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";

interface Props {
    value?: 天干;
    panSize: number;
    isScoreMode: boolean;
    highlight?: string;
}

export const Gan = React.memo<Props>(({panSize, value, highlight, isScoreMode}) => {
    return (
        <Flex
            width={`${panSize / 16}px`}
            borderRadius="md"
            borderColor={highlight}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            alignItems="center"
            justifyContent="center"
            fontSize={`${panSize / 25}px`}
            color={isScoreMode && value ? scoreColor(value) : value ? ColorUtil.天干(value) : undefined}
        >
            {value || "　"}
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
