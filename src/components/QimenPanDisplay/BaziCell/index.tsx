import React from "react";
import {GridItem} from "@chakra-ui/react";
import {QimenPan} from "@/qimen/type";
import {Bazi} from "./Bazi";
import {Time} from "./Time";

interface Props {
    pan: QimenPan;
    panSize: number;
}

export const BaziCell = React.memo<Props>(({pan, panSize}) => {
    return (
        <GridItem fontWeight={500} p={2} display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" borderWidth="1px" borderColor="gray.300" w="100%" h={panSize / 3}>
            <Time panSize={panSize} lunar={pan.lunar} />
            <Bazi panSize={panSize} bazi={pan.八字} />
            <Time panSize={panSize} lunar={pan.lunar} />
        </GridItem>
    );
});
