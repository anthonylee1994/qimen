import React from "react";
import {Flex} from "@chakra-ui/react";
import {AngelDevilUtil, 神煞} from "@/util/AngelDevilUtil";

interface Props {
    items: 神煞[];
}

export const GodDevilRenderer = React.memo<Props>(({items}) => {
    return (
        <React.Fragment>
            {items.map((item, index) => (
                <Flex
                    py={0}
                    px={0.5}
                    fontSize={{base: 10, sm: "sm", md: "md", lg: "xl"}}
                    m={0.5}
                    key={index}
                    bgColor={AngelDevilUtil.isAngel(item as 神煞) ? "red.400" : "gray.500"}
                    color="white"
                    borderRadius="sm"
                >
                    {item}
                </Flex>
            ))}
        </React.Fragment>
    );
});
