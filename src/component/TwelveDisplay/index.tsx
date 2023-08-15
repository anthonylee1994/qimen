import React from "react";
import {Flex} from "@chakra-ui/react";
import {Horizontal} from "@/component/TwelveDisplay/Horizontal";
import {Vertical} from "@/component/TwelveDisplay/Vertical";
import {地支} from "@/qimen/type";

interface Props<T extends string> {
    itemsMap: Record<地支, T[]>;
    renderer?: (items: T[]) => React.ReactNode;
    size: number;
}

export const TwelveDisplay = <T extends string>({renderer, itemsMap, size}: Props<T>) => {
    return (
        <Flex position="absolute" width={`${size * 1.2}px`} height={`${size * 1.2}px`}>
            <Horizontal size={size} bottom={0} left="50%" transform="translateX(-50%)">
                {renderer ? renderer(itemsMap.子) : itemsMap.子}
            </Horizontal>
            <Horizontal size={size} bottom={0} left={`${size * 0.1}px`}>
                {renderer ? renderer(itemsMap.丑) : itemsMap.丑}
            </Horizontal>
            <Vertical size={size} bottom={`${size * 0.1}px`} left={0}>
                {renderer ? renderer(itemsMap.寅) : itemsMap.寅}
            </Vertical>
            <Vertical size={size} top="50%" left={0} transform="translateY(-50%)">
                {renderer ? renderer(itemsMap.卯) : itemsMap.卯}
            </Vertical>
            <Vertical size={size} top={`${size * 0.1}px`} left={0}>
                {renderer ? renderer(itemsMap.辰) : itemsMap.辰}
            </Vertical>
            <Horizontal size={size} top={0} left={`${size * 0.1}px`}>
                {renderer ? renderer(itemsMap.巳) : itemsMap.巳}
            </Horizontal>
            <Horizontal size={size} top={0} left="50%" transform="translateX(-50%)">
                {renderer ? renderer(itemsMap.午) : itemsMap.午}
            </Horizontal>
            <Horizontal size={size} top={0} right={`${size * 0.1}px`}>
                {renderer ? renderer(itemsMap.未) : itemsMap.未}
            </Horizontal>
            <Vertical size={size} top={`${size * 0.1}px`} right={0}>
                {renderer ? renderer(itemsMap.申) : itemsMap.申}
            </Vertical>
            <Vertical size={size} top="50%" right={0} transform="translateY(-50%)">
                {renderer ? renderer(itemsMap.酉) : itemsMap.酉}
            </Vertical>
            <Vertical size={size} bottom={`${size * 0.1}px`} right={0}>
                {renderer ? renderer(itemsMap.戌) : itemsMap.戌}
            </Vertical>
            <Horizontal size={size} bottom={0} right={`${size * 0.1}px`}>
                {renderer ? renderer(itemsMap.亥) : itemsMap.亥}
            </Horizontal>
        </Flex>
    );
};
