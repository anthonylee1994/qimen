import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
    panSize: number;
    children: React.ReactNode;
}

export const Circle = React.memo<Props>(({panSize, children}) => {
    return (
        <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize={`${panSize / 27}px`}
            bgColor="yellow.300"
            color="black"
            borderRadius="full"
            width={`${panSize / 18}px`}
            height={`${panSize / 18}px`}
            _first={{mb: 2}}
        >
            {children}
        </Text>
    );
});
