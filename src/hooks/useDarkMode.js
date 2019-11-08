import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {

    const [enabled, setEnabled] = useLocalStorage("dark-mode-enabled");

    useEffect(() => {
        const className = "dark-mode";
        const element = window.document.body;
        if(enabled) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [enabled]
    );

    return [enabled, setEnabled]
}

