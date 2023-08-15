import React from "react";
import {Flex, FlexProps} from "@chakra-ui/react";

interface Props extends FlexProps {
    size: number;
}

export const Vertical = React.memo<Props>(({size, ...restProps}) => {
    return <Flex flexDirection="column" fontSize="xs" textAlign="center" position="absolute" justifyContent="center" alignItems="center" w={`${size * 0.1}px`} h={`${size * 0.33}px`} {...restProps} />;
});
