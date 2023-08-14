import React from "react";
import {Grid} from "@chakra-ui/react";
import {Cell} from "@/component/QimenPanDisplay/Cell";
import {QimenPan} from "@/qimen/type";
import {BaziCell} from "@/component/QimenPanDisplay/BaziCell";
import {LuckyCellUtil} from "@/util/LuckyCellUtil";

interface Props {
    pan: QimenPan;
    size: number;
}

export const QimenPanDisplay = React.memo<Props>(({size, pan}) => {
    return (
        <Grid zIndex={1} width={size} templateColumns="repeat(3, 1fr)">
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[3])} cell={pan.九宮[3]} panSize={size} />
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[8])} cell={pan.九宮[8]} panSize={size} />
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[1])} cell={pan.九宮[1]} panSize={size} />
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[2])} cell={pan.九宮[2]} panSize={size} />
            <BaziCell pan={pan} panSize={size} />
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[6])} cell={pan.九宮[6]} panSize={size} />
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[7])} cell={pan.九宮[7]} panSize={size} />
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[0])} cell={pan.九宮[0]} panSize={size} />
            <Cell highlight={LuckyCellUtil.isLucky(pan.九宮[5])} cell={pan.九宮[5]} panSize={size} />
        </Grid>
    );
});
