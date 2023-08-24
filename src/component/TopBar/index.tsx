import React from "react";
import {Flex, IconButton, Input, Tooltip, useBreakpointValue} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon, TimeIcon} from "@chakra-ui/icons";
import moment from "moment";
import {ScoreToggleButton} from "@/component/TopBar/ScoreToggleButton";
import {AngleDevilToggleButton} from "@/component/TopBar/AngleDevilToggleButton";

interface Props {
    date: Date;
    setDate: (date: Date) => void;
    isScoreMode: boolean;
    setScoreMode: React.Dispatch<React.SetStateAction<boolean>>;
    showAngelDevil: boolean;
    setShowAngelDevil: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TopBar = React.memo<Props>(({date, setDate, isScoreMode, setScoreMode, showAngelDevil, setShowAngelDevil}) => {
    const buttonSize = useBreakpointValue({base: "md", md: "lg"});
    const iconSize = useBreakpointValue({base: "lg", md: "2xl"});

    const previousTwoHours = () => {
        setDate(new Date(date.getTime() - 120 * 60 * 1000));
    };

    const nextTwoHours = () => {
        setDate(new Date(date.getTime() + 120 * 60 * 1000));
    };

    const currentTime = () => {
        setDate(new Date());
    };

    return (
        <Flex flexDirection="column" w="full" p={{base: 1, md: 2}} bgColor="gray.300" justifyContent="center" zIndex={10}>
            <Flex justifyContent="center" mb={{base: 1, md: 2}}>
                <IconButton _active={{transform: "scale(0.9)"}} size={buttonSize} aria-label="left" icon={<ArrowBackIcon fontSize={iconSize} />} mr={{base: 1, md: 2}} onClick={previousTwoHours} />
                <Input
                    size={buttonSize}
                    fontSize={{base: "md", md: "xl"}}
                    maxWidth={400}
                    textAlign="center"
                    borderRadius="md"
                    variant="filled"
                    type="datetime-local"
                    placeholder="small size"
                    value={moment(date).format("YYYY-MM-DDTHH:mm")}
                    onChange={e => setDate(new Date(e.target.value))}
                    mr={{base: 1, md: 2}}
                />
                <Tooltip label="當前時間">
                    <IconButton _active={{transform: "rotate(180deg)"}} size={buttonSize} aria-label="current" icon={<TimeIcon fontSize={iconSize} />} onClick={currentTime} />
                </Tooltip>
                <IconButton _active={{transform: "scale(0.9)"}} size={buttonSize} aria-label="right" icon={<ArrowForwardIcon fontSize={iconSize} />} ml={{base: 1, md: 2}} onClick={nextTwoHours} />
            </Flex>
            <Flex justifyContent="center">
                <ScoreToggleButton enabled={isScoreMode} setEnabled={setScoreMode} />
                <AngleDevilToggleButton enabled={showAngelDevil} setEnabled={setShowAngelDevil} />
            </Flex>
        </Flex>
    );
});
