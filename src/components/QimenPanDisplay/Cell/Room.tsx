import React from "react";
import {Text} from "@chakra-ui/react";
import {宮位} from "@/qimen/type";

interface Props {
    panSize: number;
    value: 宮位;
}

export const Room = React.memo<Props>(({panSize, value}) => {
    return (
        <Text fontSize={`${panSize / 30}px`} color="gray.300">
            {value || "　"}
        </Text>
    );
});
