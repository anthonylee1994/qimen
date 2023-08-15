import React from "react";
import {Flex} from "@chakra-ui/react";
import {八門} from "@/qimen/type";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    panSize: number;
    value: 八門;
    highlight?: boolean;
}

export const Door = React.memo<Props>(({panSize, value, highlight}) => {
    return (
        <Flex
            justifyContent="center"
            fontSize={`${panSize / 20}px`}
            color={ColorUtil.八門(value)}
            borderColor={highlight ? "pink.300" : undefined}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            borderRadius="md"
            width={panSize / 8}
        >
            {value || "　"}
        </Flex>
    );
});
