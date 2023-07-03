import React from "react";
import {Grid} from "@chakra-ui/react";
import {Cell} from "src/components/QimenPanDisplay/Cell";
import {QimenPan} from "@/qimen/type";
import {BaziCell} from "@/components/QimenPanDisplay/BaziCell";

interface Props {
    pan: QimenPan;
    size: number;
}

export const QimenPanDisplay = React.memo<Props>(({size, pan}) => {
    return (
        <Grid width={size} templateColumns="repeat(3, 1fr)">
            <Cell cell={pan.九宮[3]} panSize={size} />
            <Cell cell={pan.九宮[8]} panSize={size} />
            <Cell cell={pan.九宮[1]} panSize={size} />
            <Cell cell={pan.九宮[2]} panSize={size} />
            <BaziCell pan={pan} panSize={size} />
            <Cell cell={pan.九宮[6]} panSize={size} />
            <Cell cell={pan.九宮[7]} panSize={size} />
            <Cell cell={pan.九宮[0]} panSize={size} />
            <Cell cell={pan.九宮[5]} panSize={size} />
        </Grid>
    );
});
