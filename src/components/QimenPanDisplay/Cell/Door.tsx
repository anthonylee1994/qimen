import React from "react";
import {Text} from "@chakra-ui/react";
import {八門} from "@/qimen/type";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    panSize: number;
    value: 八門;
}

export const Door = React.memo<Props>(({panSize, value}) => {
    return (
        <Text fontSize={`${panSize / 20}px`} color={ColorUtil.八門(value)}>
            {value || "　"}
        </Text>
    );
});
