import React from "react";
import {QimenUtil} from "./qimen/QimenUtil";
import {Lunar} from "lunar-typescript";
import {ChakraProvider, Flex} from "@chakra-ui/react";
import {QimenPanDisplay} from "@/component/QimenPanDisplay";
import {useKeyboardArrow} from "@/hook/useKeyboardArrow";
import {TwelveDisplay} from "src/component/TwelveDisplay";
import {AngelDevilUtil} from "@/util/AngelDevilUtil";
import {地支} from "@/qimen/type";
import {GodDevilRenderer} from "@/component/GodDevilRenderer";
import {TopBar} from "@/component/TopBar";
import {TimeTypeDisplay} from "@/component/TimeTypeDisplay";
import {useScreenWidth} from "@/hook/useScreenWidth";

export const App = React.memo(() => {
    const [date, setDate] = React.useState(new Date());
    const [isScoreMode, setScoreMode] = React.useState(false);
    const [ref, screenWidth] = useScreenWidth(800);
    const qimenPan = QimenUtil.create(Lunar.fromDate(date));

    useKeyboardArrow(setDate);

    return (
        <ChakraProvider>
            <Flex ref={ref} flexDirection="column" h="100%" justifyContent="space-between" alignItems="center">
                <TopBar setScoreMode={setScoreMode} isScoreMode={isScoreMode} date={date} setDate={setDate} />
                <TimeTypeDisplay bazi={qimenPan.八字} />
                <Flex my={20} flexGrow={1} justifyContent="center" alignItems="center">
                    <TwelveDisplay renderer={items => <GodDevilRenderer items={items} />} itemsMap={AngelDevilUtil.getAngelDevilMap(qimenPan.八字[3][1] as 地支)} size={screenWidth * 0.82} />
                    <QimenPanDisplay isScoreMode={isScoreMode} pan={qimenPan} size={screenWidth * 0.82} />
                </Flex>
            </Flex>
        </ChakraProvider>
    );
});
