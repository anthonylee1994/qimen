import React from "react";
import {Text} from "@chakra-ui/react";
import {Lunar} from "lunar-typescript";

interface Props {
    panSize: number;
    lunar: Lunar;
}

export const Time = React.memo<Props>(({lunar, panSize}) => {
    return (
        <Text color="gray.700" fontSize={`${panSize / 40}px`}>
            {lunar.getSolar().toYmd()}&nbsp;
            {lunar.getTimeZhi()}時
        </Text>
    );
});
