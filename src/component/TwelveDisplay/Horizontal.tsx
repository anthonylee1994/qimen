import React from "react";
import {Flex, FlexProps} from "@chakra-ui/react";

interface Props extends FlexProps {
    size: number;
}

export const Horizontal = React.memo<Props>(({size, ...restProps}) => {
    return <Flex fontSize="xs" textAlign="center" position="absolute" justifyContent="center" alignItems="center" w={size * 0.33} h={size * 0.1} {...restProps} />;
});
