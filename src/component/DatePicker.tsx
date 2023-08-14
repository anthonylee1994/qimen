import React from "react";
import {Flex, IconButton, Input} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import moment from "moment";

interface Props {
    date: Date;
    setDate: (date: Date) => void;
}

export const DatePicker = React.memo<Props>(({date, setDate}) => {
    return (
        <Flex w="full" p={1} bgColor="gray.300">
            <IconButton aria-label="left" icon={<ArrowBackIcon />} mr={1.5} onClick={() => setDate(new Date(date.getTime() - 120 * 60 * 1000))} />
            <Input
                textAlign="center"
                borderRadius="md"
                variant="filled"
                type="datetime-local"
                placeholder="small size"
                value={moment(date).format("YYYY-MM-DDTHH:mm")}
                onChange={e => setDate(new Date(e.target.value))}
            />
            <IconButton aria-label="right" icon={<ArrowForwardIcon />} ml={1.5} onClick={() => setDate(new Date(date.getTime() + 120 * 60 * 1000))} />
        </Flex>
    );
});
