import {Flex} from "@chakra-ui/react";
import React from "react";
import {天干} from "@/qimen/type";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    value?: 天干;
    panSize: number;
    highlight?: string;
}

export const Gan = React.memo<Props>(({panSize, value, highlight}) => {
    return (
        <Flex
            width={`${panSize / 16}px`}
            borderRadius="md"
            borderColor={highlight}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            alignItems="center"
            justifyContent="center"
            fontSize={`${panSize / 25}px`}
            color={value ? ColorUtil.天干(value) : undefined}
        >
            {value || "　"}
        </Flex>
    );
});
