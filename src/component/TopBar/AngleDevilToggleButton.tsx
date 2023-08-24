import React from "react";
import {Button, Text, useBreakpointValue} from "@chakra-ui/react";
import {MoonIcon} from "@chakra-ui/icons";

interface Props {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AngleDevilToggleButton = React.memo<Props>(({enabled, setEnabled}) => {
    const smallButtonSize = useBreakpointValue({base: "sm", md: "md"});
    const iconSize = useBreakpointValue({base: "lg", md: "2xl"});

    return (
        <Button
            bgColor={enabled ? "blue.500" : "gray.100"}
            color={enabled ? "yellow.400" : "gray.700"}
            _focus={{}}
            _hover={{}}
            _active={{transform: "scale(0.9)"}}
            size={smallButtonSize}
            aria-label="current"
            onClick={() => setEnabled(_ => !_)}
            mx={{base: 0.5, md: 1}}
        >
            <MoonIcon fontSize={iconSize} />
            <Text ml={1}>神煞</Text>
        </Button>
    );
});
