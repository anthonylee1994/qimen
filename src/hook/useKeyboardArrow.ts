import React from "react";

export const useKeyboardArrow = (setDate: React.Dispatch<React.SetStateAction<Date>>) => {
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
};
