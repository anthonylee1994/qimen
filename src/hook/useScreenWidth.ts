import React from "react";

export const useScreenWidth = (maxWidth: number) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [screenWidth, setScreenWidth] = React.useState(0);

    React.useEffect(() => {
        if (!ref.current) {
            return;
        }
        const resize = () => {
            const screenWidth = ref.current?.getBoundingClientRect().width ?? 0;
            if (screenWidth >= maxWidth) {
                setScreenWidth(maxWidth);
            } else {
                setScreenWidth(screenWidth);
            }
        };

        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, [maxWidth, ref]);

    return [ref, screenWidth] as const;
};
