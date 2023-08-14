import React from "react";
import {八神} from "@/qimen/type";
import {Text} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    panSize: number;
    value: 八神;
}

export const God = React.memo<Props>(({panSize, value}) => {
    return (
        <Text fontSize={`${panSize / 25}px`} color={ColorUtil.八神(value)}>
            {value || "　"}
        </Text>
    );
});
