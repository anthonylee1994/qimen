import React from "react";
import {Flex, GridItem, Text} from "@chakra-ui/react";
import {Circle} from "./Circle";
import {QimenCell} from "@/qimen/type";
import {Gan} from "./Gan";
import {God} from "./God";
import {Door} from "./Door";
import {Star} from "./Star";
import {Room} from "./Room";

interface Props {
    cell: QimenCell;
    panSize: number;
}

export const Cell = React.memo<Props>(({panSize, cell: {宮位, 九星, 八門, 八神, 天盤干, 地盤干, 是否空亡, 是否驛馬}}) => {
    return (
        <GridItem fontWeight={500} p={2} display="flex" justifyContent="space-evenly" borderWidth="1px" borderColor="gray.300" w="100%" h={panSize / 3}>
            <Flex width={`${panSize / 18}px`} flexDirection="column" justifyContent="flex-end">
                <Gan panSize={panSize} value={天盤干[1]} />
                <Gan panSize={panSize} value={地盤干[1]} />
            </Flex>
            <Flex flexGrow={1} flexDirection="column" alignItems="center" justifyContent="space-evenly">
                <God panSize={panSize} value={八神} />
                <Door panSize={panSize} value={八門} />
                <Star panSize={panSize} value={九星} />
                <Room panSize={panSize} value={宮位} />
            </Flex>
            <Flex width={`${panSize / 18}px`} flexDirection="column" justifyContent="space-between" alignItems="center">
                <Flex flexDirection="column">
                    {是否空亡 && <Circle panSize={panSize}>空</Circle>}
                    {是否驛馬 && <Circle panSize={panSize}>馬</Circle>}
                </Flex>
                <Flex flexDirection="column">
                    <Gan panSize={panSize} value={天盤干[0]} />
                    <Gan panSize={panSize} value={地盤干[0]} />
                </Flex>
            </Flex>
        </GridItem>
    );
});
