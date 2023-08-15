import React from "react";

export const useScreenWidth = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [screenWidth, setScreenWidth] = React.useState(0);

    React.useEffect(() => {
        if (ref.current) {
            setScreenWidth(ref.current.getBoundingClientRect().width);
        }
    }, [ref]);

    return [ref, screenWidth] as const;
};
