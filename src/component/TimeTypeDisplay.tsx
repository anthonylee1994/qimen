import React from "react";
import {Flex} from "@chakra-ui/react";
import {TimeType} from "@/qimen/AstrologicalTimeUtil";

interface Props {
    type: TimeType;
}

export const TimeTypeDisplay = React.memo<Props>(({type}) => {
    return (
        <Flex
            w="full"
            justifyContent="center"
            alignItems="center"
            bgColor={type === "天顯時格" ? "pink.50" : type === "五不遇時" ? "gray.50" : type === "時干入墓" ? "green.50" : "white"}
            color={type === "天顯時格" ? "pink.500" : type === "五不遇時" ? "gray.500" : type === "時干入墓" ? "green.500" : "gray.500"}
            borderBottomColor={type === "天顯時格" ? "pink.200" : type === "五不遇時" ? "gray.200" : type === "時干入墓" ? "green.200" : "gray.200"}
            borderBottomWidth={type === null ? undefined : {base: 1, md: 2}}
            borderBottomStyle="dashed"
            fontWeight="bold"
            fontSize={{base: "md", md: "xl"}}
            p={{base: 1, md: 2}}
        >
            {type || <React.Fragment>&nbsp;</React.Fragment>}
        </Flex>
    );
});
