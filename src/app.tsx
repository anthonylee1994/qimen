import React from "react";
import {QimenUtil} from "./qimen/QimenUtil";
import {Lunar} from "lunar-typescript";
import {ChakraProvider, Flex} from "@chakra-ui/react";
import {QimenPanDisplay} from "@/component/QimenPanDisplay";
import {useKeyboardArrow} from "@/hook/useKeyboardArrow";
import {TwelveDisplay} from "src/component/TwelveDisplay";
import {AngelDevilUtil} from "@/util/AngelDevilUtil";
import {地支, 天干} from "@/qimen/type";
import {GodDevilRenderer} from "@/component/GodDevilRenderer";
import {TopBar} from "@/component/TopBar";
import {TimeTypeDisplay} from "@/component/TimeTypeDisplay";
import {useScreenWidth} from "@/hook/useScreenWidth";
import moment from "moment";

export const App = React.memo(() => {
    const [date, setDate] = React.useState(new Date());
    const [isScoreMode, setScoreMode] = React.useState(false);
    const [showAngelDevil, setShowAngelDevil] = React.useState(true);
    const [ref, screenWidth] = useScreenWidth(800);
    const qimenPan = QimenUtil.create(Lunar.fromDate(date));

    const changeDate = (value: Date) => {
        if (moment(value).isValid()) {
            setDate(value);
        }
    };

    useKeyboardArrow(setDate);

    return (
        <ChakraProvider>
            <Flex ref={ref} flexDirection="column" h="100%" justifyContent="space-between" alignItems="center">
                <TopBar showAngelDevil={showAngelDevil} setShowAngelDevil={setShowAngelDevil} setScoreMode={setScoreMode} isScoreMode={isScoreMode} date={date} setDate={changeDate} />
                <TimeTypeDisplay bazi={qimenPan.八字} />
                <Flex flexGrow={1} justifyContent="center" alignItems="center">
                    {showAngelDevil && (
                        <TwelveDisplay
                            renderer={items => <GodDevilRenderer items={items} />}
                            itemsMap={AngelDevilUtil.getAngelDevilMap(qimenPan.八字[3][0] as 天干, qimenPan.八字[3][1] as 地支)}
                            size={screenWidth * 0.82}
                        />
                    )}
                    <QimenPanDisplay isScoreMode={isScoreMode} pan={qimenPan} size={screenWidth * (showAngelDevil && screenWidth > 500 ? 0.82 : 0.9)} />
                </Flex>
            </Flex>
        </ChakraProvider>
    );
});
