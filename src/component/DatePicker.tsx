import React from "react";
import {Flex, IconButton, Input, Tooltip, useBreakpointValue} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon, CalendarIcon} from "@chakra-ui/icons";
import moment from "moment";

interface Props {
    date: Date;
    setDate: (date: Date) => void;
}

export const DatePicker = React.memo<Props>(({date, setDate}) => {
    const buttonSize = useBreakpointValue({base: "md", md: "lg"});
    const iconSize = useBreakpointValue({base: "lg", md: "2xl"});

    return (
        <Flex w="full" p={{base: 1, md: 2}} bgColor="gray.300" justifyContent="center">
            <IconButton size={buttonSize} aria-label="left" icon={<ArrowBackIcon fontSize={iconSize} />} mr={1.5} onClick={() => setDate(new Date(date.getTime() - 120 * 60 * 1000))} />
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
                <IconButton size={buttonSize} aria-label="current" icon={<CalendarIcon fontSize={iconSize} />} ml={1.5} onClick={() => setDate(new Date())} />
            </Tooltip>
            <IconButton size={buttonSize} aria-label="right" icon={<ArrowForwardIcon fontSize={iconSize} />} ml={1.5} onClick={() => setDate(new Date(date.getTime() + 120 * 60 * 1000))} />
        </Flex>
    );
});
