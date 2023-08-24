import React from "react";
import {Flex, FlexProps} from "@chakra-ui/react";

interface Props extends FlexProps {
    size: number;
}

export const Horizontal = React.memo<Props>(({size, ...restProps}) => {
    return (
        <Flex cursor="pointer" fontSize="xs" textAlign="center" position="absolute" justifyContent="center" alignItems="center" width={`${size * 0.33}px`} height={`${size * 0.1}px`} {...restProps} />
    );
});
