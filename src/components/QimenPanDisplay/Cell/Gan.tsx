import {Text} from "@chakra-ui/react";
import React from "react";
import {天干} from "@/qimen/type";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    value?: 天干;
    panSize: number;
}

export const Gan = React.memo<Props>(({panSize, value}) => {
    return (
        <Text fontSize={`${panSize / 25}px`} color={value ? ColorUtil.天干(value) : undefined}>
            {value || "　"}
        </Text>
    );
});
