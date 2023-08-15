import React from "react";
import {八神} from "@/qimen/type";
import {Flex} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    panSize: number;
    value: 八神;
    highlight?: boolean;
}

export const God = React.memo<Props>(({panSize, value, highlight}) => {
    return (
        <Flex
            justifyContent="center"
            fontSize={`${panSize / 25}px`}
            color={ColorUtil.八神(value)}
            borderColor={highlight ? "teal.300" : undefined}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            borderRadius="md"
            width={panSize / 8}
        >
            {value || "　"}
        </Flex>
    );
});
