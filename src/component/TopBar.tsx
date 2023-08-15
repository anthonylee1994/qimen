import React from "react";
import {Flex, IconButton, Input, Tooltip, useBreakpointValue} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon, StarIcon, TimeIcon} from "@chakra-ui/icons";
import moment from "moment";

interface Props {
    date: Date;
    setDate: (date: Date) => void;
    isScoreMode: boolean;
    setScoreMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TopBar = React.memo<Props>(({date, setDate, isScoreMode, setScoreMode}) => {
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
        <Flex w="full" p={{base: 1, md: 2}} bgColor="gray.300" justifyContent="center" zIndex={10}>
            <IconButton _active={{transform: "scale(0.9)"}} size={buttonSize} aria-label="left" icon={<ArrowBackIcon fontSize={iconSize} />} mr={1.5} onClick={previousTwoHours} />
            <Tooltip label="計分模式">
                <IconButton
                    bgColor={isScoreMode ? "blue.500" : "gray.100"}
                    color={isScoreMode ? "yellow.400" : "gray.700"}
                    _focus={{}}
                    _hover={{}}
                    _active={{}}
                    size={buttonSize}
                    aria-label="current"
                    icon={<StarIcon fontSize={iconSize} />}
                    transform={isScoreMode ? "rotate(360deg)" : "rotate(0deg)"}
                    mr={1.5}
                    onClick={() => setScoreMode(_ => !_)}
                />
            </Tooltip>
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
            />
            <Tooltip label="當前時間">
                <IconButton _active={{transform: "rotate(180deg)"}} size={buttonSize} aria-label="current" icon={<TimeIcon fontSize={iconSize} />} ml={1.5} onClick={currentTime} />
            </Tooltip>
            <IconButton _active={{transform: "scale(0.9)"}} size={buttonSize} aria-label="right" icon={<ArrowForwardIcon fontSize={iconSize} />} ml={1.5} onClick={nextTwoHours} />
        </Flex>
    );
});
