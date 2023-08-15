import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
    panSize: number;
    value: React.ReactNode;
}

export const Room = React.memo<Props>(({panSize, value}) => {
    return (
        <Text fontSize={`${panSize / 30}px`} color="gray.500">
            {value || "　"}
        </Text>
    );
});
