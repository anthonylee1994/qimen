import React from "react";
import {八字, 地支, 天干} from "@/qimen/type";
import {Flex, Grid, GridItem} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";

interface Props {
    bazi: 八字;
    panSize: number;
}

export const Bazi = React.memo<Props>(({panSize, bazi: [年柱, 月柱, 日柱, 時柱]}) => {
    return (
        <Grid fontSize={panSize / 30} templateColumns="repeat(4, 1fr)">
            <GridItem w={`${panSize / 25}px`} display="flex" flexDirection="column" alignItems="center">
                <Flex color="gray.500" fontSize={panSize / 40}>
                    時
                </Flex>
                <Flex color={ColorUtil.天干(時柱[0] as 天干)}>{時柱[0]}</Flex>
                <Flex color={ColorUtil.地支(時柱[1] as 地支)}>{時柱[1]}</Flex>
            </GridItem>
            <GridItem w={`${panSize / 25}px`} display="flex" flexDirection="column" alignItems="center">
                <Flex color="gray.500" fontSize={panSize / 40}>
                    日
                </Flex>
                <Flex color={ColorUtil.天干(日柱[0] as 天干)}>{日柱[0]}</Flex>
                <Flex color={ColorUtil.地支(日柱[1] as 地支)}>{日柱[1]}</Flex>
            </GridItem>
            <GridItem w={`${panSize / 25}px`} display="flex" flexDirection="column" alignItems="center">
                <Flex color="gray.500" fontSize={panSize / 40}>
                    月
                </Flex>
                <Flex color={ColorUtil.天干(月柱[0] as 天干)}>{月柱[0]}</Flex>
                <Flex color={ColorUtil.地支(月柱[1] as 地支)}>{月柱[1]}</Flex>
            </GridItem>
            <GridItem w={`${panSize / 25}px`} display="flex" flexDirection="column" alignItems="center">
                <Flex color="gray.500" fontSize={panSize / 40}>
                    年
                </Flex>
                <Flex color={ColorUtil.天干(年柱[0] as 天干)}>{年柱[0]}</Flex>
                <Flex color={ColorUtil.地支(年柱[1] as 地支)}>{年柱[1]}</Flex>
            </GridItem>
        </Grid>
    );
});
