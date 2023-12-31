import React from "react";
import {Flex, GridItem} from "@chakra-ui/react";
import {Circle} from "./Circle";
import {QimenCell, 八神, 八門, 天干, 宮位} from "@/qimen/type";
import {Gan} from "./Gan";
import {God} from "./God";
import {Door} from "./Door";
import {Star} from "./Star";
import {Room} from "./Room";
import {FourDangerUtil} from "@/util/FourDangerUtil";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";
import {TwelveCycleUtil} from "@/util/TwelveCycleUtil";
import {StrengthUtil} from "@/util/StrengthUtil";
import {Pattern} from "@/component/QimenPanDisplay/Cell/Pattern";

interface Props {
    cell: QimenCell;
    highlight?: boolean;
    panSize: number;
    isScoreMode: boolean;
}

export const Cell = React.memo<Props>(({isScoreMode, highlight, panSize, cell: {宮位, 九星, 八門, 八神, 天盤干, 地盤干, 是否空亡, 是否驛馬}}) => {
    return (
        <GridItem
            p={1}
            display="flex"
            fontWeight={500}
            justifyContent="space-evenly"
            borderWidth="1px"
            borderColor="gray.300"
            w="100%"
            h={panSize / 3}
            bgColor={highlight ? "yellow.100" : undefined}
            transition="300ms ease-in-out"
        >
            <Flex position="relative" width={`${panSize / 18}px`} flexDirection="column" justifyContent="flex-end">
                <Flex position="absolute" top={0} left={0}>
                    {天盤干[1] && 地盤干[0] && <Pattern g1={天盤干[1]} g2={地盤干[0]} panSize={panSize} />}
                    {天盤干[0] && 地盤干[1] && <Pattern g1={天盤干[0]} g2={地盤干[1]} panSize={panSize} />}
                    <Pattern g1={天盤干[0]} g2={地盤干[0]} panSize={panSize} />
                </Flex>
                <Flex flexDirection="column">
                    <Gan tooltip={cycleOf(宮位, 天盤干[1])} isScoreMode={isScoreMode} panSize={panSize} value={天盤干[1]} highlight={ganHighlight(宮位, 天盤干[1])} />
                    <Gan tooltip={cycleOf(宮位, 地盤干[1])} isScoreMode={isScoreMode} panSize={panSize} value={地盤干[1]} highlight={ganHighlight(宮位, 地盤干[1])} />
                </Flex>
            </Flex>
            <Flex flexGrow={1} flexDirection="column" alignItems="center" justifyContent="space-between">
                <God isScoreMode={isScoreMode} highlight={godHighlight(宮位, 八神)} panSize={panSize} value={八神} />
                <Door tooltip={StrengthUtil.doorStrength(八門, 宮位)} isScoreMode={isScoreMode} highlight={doorHighlight(宮位, 八門)} panSize={panSize} value={八門} />
                <Star tooltip={StrengthUtil.starStrength(九星, 宮位)} isScoreMode={isScoreMode} panSize={panSize} value={九星} />
                <Room panSize={panSize} value={isScoreMode ? String(ScoreModeUtil.totalScore(八神, 九星, 八門, 天盤干, 地盤干, 是否空亡)) : 宮位} />
            </Flex>
            <Flex width={`${panSize / 18}px`} flexDirection="column" justifyContent="space-between" alignItems="center">
                <Flex flexDirection="column">
                    {是否空亡 && <Circle panSize={panSize}>空</Circle>}
                    {是否驛馬 && <Circle panSize={panSize}>馬</Circle>}
                </Flex>
                <Flex flexDirection="column">
                    <Gan tooltip={cycleOf(宮位, 天盤干[0])} isScoreMode={isScoreMode} panSize={panSize} value={天盤干[0]} highlight={ganHighlight(宮位, 天盤干[0])} />
                    <Gan tooltip={cycleOf(宮位, 地盤干[0])} isScoreMode={isScoreMode} panSize={panSize} value={地盤干[0]} highlight={ganHighlight(宮位, 地盤干[0])} />
                </Flex>
            </Flex>
        </GridItem>
    );
});

const cycleOf = (room: 宮位, gan?: 天干) => {
    if (!gan) {
        return undefined;
    }

    return TwelveCycleUtil.cellToZhi(room)
        .map(_ => TwelveCycleUtil.get(gan, _))
        .join(", ");
};

const godHighlight = (cell: 宮位, god: 八神) => {
    return cell === "坤二宮" && god === "值符"; // 甲入墓
};

const doorHighlight = (cell: 宮位, door: 八門) => {
    return FourDangerUtil.isDoorAttackCell(cell, door);
};

const ganHighlight = (cell: 宮位, gan: 天干): string | undefined => {
    if (FourDangerUtil.isInJail(cell, gan)) {
        return "purple.300";
    } else if (FourDangerUtil.isInGrave(cell, gan)) {
        return "teal.300";
    }
};
