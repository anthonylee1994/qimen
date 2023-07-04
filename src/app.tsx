import React from "react";
import {QimenUtil} from "./qimen/QimenUtil";
import {Lunar} from "lunar-typescript";
import {ChakraProvider, Flex} from "@chakra-ui/react";
import {QimenPanDisplay} from "src/components/QimenPanDisplay";

export const App = React.memo(() => {
    // "1994-04-24T17:25:00"
    // "2023-06-26T13:25:00"
    const [date, setDate] = React.useState(new Date());
    const qimenPan = QimenUtil.create(Lunar.fromDate(date));

    React.useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                setDate(prev => {
                    const next = new Date(prev);
                    // minus two hour
                    next.setHours(next.getHours() - 2);
                    return next;
                });
            }
            if (e.key === "ArrowRight") {
                setDate(prev => {
                    const next = new Date(prev);
                    // plus two hour
                    next.setHours(next.getHours() + 2);
                    return next;
                });
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <ChakraProvider>
            <Flex h="100vh" justifyContent="center" alignItems="center">
                <QimenPanDisplay pan={qimenPan} size={300} />
            </Flex>
        </ChakraProvider>
    );
});
