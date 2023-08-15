import React from "react";
import {Flex, GridItem} from "@chakra-ui/react";
import {Circle} from "./Circle";
import {QimenCell} from "@/qimen/type";
import {Gan} from "./Gan";
import {God} from "./God";
import {Door} from "./Door";
import {Star} from "./Star";
import {Room} from "./Room";
import {FourDangerUtil} from "@/util/FourDangerUtil";

interface Props {
    cell: QimenCell;
    highlight?: boolean;
    panSize: number;
}

export const Cell = React.memo<Props>(({highlight, panSize, cell: {宮位, 九星, 八門, 八神, 天盤干, 地盤干, 是否空亡, 是否驛馬}}) => {
    return (
        <GridItem fontWeight={500} p={1} display="flex" justifyContent="space-evenly" borderWidth="1px" borderColor="gray.300" w="100%" h={panSize / 3} bgColor={highlight ? "red.100" : undefined}>
            <Flex width={`${panSize / 18}px`} flexDirection="column" justifyContent="flex-end">
                <Gan panSize={panSize} value={天盤干[1]} highlight={FourDangerUtil.isInJail(宮位, 天盤干[1]) ? "purple.300" : FourDangerUtil.isInGrave(宮位, 天盤干[1]) ? "teal.300" : undefined} />
                <Gan panSize={panSize} value={地盤干[1]} highlight={FourDangerUtil.isInJail(宮位, 地盤干[1]) ? "purple.300" : FourDangerUtil.isInGrave(宮位, 地盤干[1]) ? "teal.300" : undefined} />
            </Flex>
            <Flex flexGrow={1} flexDirection="column" alignItems="center" justifyContent="space-between">
                <God highlight={宮位 === "坤二宮" && 八神 === "值符"} panSize={panSize} value={八神} />
                <Door highlight={FourDangerUtil.isDoorAttackCell(宮位, 八門)} panSize={panSize} value={八門} />
                <Star panSize={panSize} value={九星} />
                <Room panSize={panSize} value={宮位} />
            </Flex>
            <Flex width={`${panSize / 18}px`} flexDirection="column" justifyContent="space-between" alignItems="center">
                <Flex flexDirection="column">
                    {是否空亡 && <Circle panSize={panSize}>空</Circle>}
                    {是否驛馬 && <Circle panSize={panSize}>馬</Circle>}
                </Flex>
                <Flex flexDirection="column">
                    <Gan panSize={panSize} value={天盤干[0]} highlight={FourDangerUtil.isInJail(宮位, 天盤干[0]) ? "purple.300" : FourDangerUtil.isInGrave(宮位, 天盤干[0]) ? "teal.300" : undefined} />
                    <Gan panSize={panSize} value={地盤干[0]} highlight={FourDangerUtil.isInJail(宮位, 地盤干[0]) ? "purple.300" : FourDangerUtil.isInGrave(宮位, 地盤干[0]) ? "teal.300" : undefined} />
                </Flex>
            </Flex>
        </GridItem>
    );
});
