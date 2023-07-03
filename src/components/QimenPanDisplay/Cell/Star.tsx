import React from "react";
import {Text} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";
import {九星} from "@/qimen/type";

interface Props {
    panSize: number;
    value: 九星;
}

export const Star = React.memo<Props>(({panSize, value}) => {
    return (
        <Text fontSize={`${panSize / 20}px`} color={ColorUtil.九星(value)}>
            {value || "　"}
        </Text>
    );
});
