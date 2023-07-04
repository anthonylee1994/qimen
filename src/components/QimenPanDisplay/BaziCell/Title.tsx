import React from "react";
import {QimenPan} from "@/qimen/type";
import {Flex, Text} from "@chakra-ui/react";
import {QimenFormatUtil} from "@/qimen/FormatUtil";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    pan: QimenPan;
    panSize: number;
}

export const Title = React.memo(({pan, panSize}: Props) => {
    return (
        <Flex flexDirection="column" alignItems="center">
            <Text color="gray.700" fontSize={`${panSize / 40}px`}>
                {QimenFormatUtil.局名(pan.遁, pan.局數)}，值使：
                <Text as="span" color={ColorUtil.八門(pan.值使門)}>
                    {pan.值使門}
                </Text>
            </Text>
            <Text color="gray.700" fontSize={`${panSize / 40}px`}>
                {pan.節氣.getName()} {pan.節氣.getSolar().toYmdHms().slice(0, -3)}
            </Text>
        </Flex>
    );
});
