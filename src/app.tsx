import React from "react";
import {QimenUtil} from "./qimen/QimenUtil";
import {Lunar} from "lunar-typescript";
import {ChakraProvider, Flex} from "@chakra-ui/react";
import {QimenPanDisplay} from "@/component/QimenPanDisplay";
import {useKeyboardArrow} from "@/hook/useKeyboardArrow";
import {TwelveDisplay} from "src/component/TwelveDisplay";
import {AngelDevilUtil, 神煞} from "@/util/AngelDevilUtil";
import {地支, 天干} from "@/qimen/type";
import {GodDevilRenderer} from "@/component/GodDevilRenderer";
import {DatePicker} from "@/component/DatePicker";
import {TimeTypeDisplay} from "@/component/TimeTypeDisplay";
import {AstrologicalTimeUtil} from "@/qimen/AstrologicalTimeUtil";
import {useScreenWidth} from "@/hook/useScreenWidth";

export const App = React.memo(() => {
    const [date, setDate] = React.useState(new Date());
    const [ref, screenWidth] = useScreenWidth();
    const qimenPan = QimenUtil.create(Lunar.fromDate(date));

    useKeyboardArrow(setDate);

    return (
        <ChakraProvider>
            <Flex ref={ref} flexDirection="column" h="100%" justifyContent="space-between" alignItems="center">
                <DatePicker date={date} setDate={setDate} />
                <TimeTypeDisplay type={AstrologicalTimeUtil.getType(qimenPan.八字[2][0] as 天干, qimenPan.八字[3][0] as 天干, qimenPan.八字[3][1] as 地支)} />
                <Flex flexGrow={1} justifyContent="center" alignItems="center">
                    <TwelveDisplay renderer={items => <GodDevilRenderer items={items as 神煞[]} />} itemsMap={AngelDevilUtil.getAngelDevilMap(qimenPan.八字[3][1] as 地支)} size={screenWidth * 0.82} />
                    <QimenPanDisplay pan={qimenPan} size={screenWidth * 0.82} />
                </Flex>
            </Flex>
        </ChakraProvider>
    );
});
