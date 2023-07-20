/*

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme:dark)"
    ).matches;

    const storedDarkMode = localStorage.getItem("dark_theme") === "true";

    return storedDarkMode || prefersDarkMode;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem("dark_theme", newDarkTheme);
    };

    useEffect(() => {
        document.body.classList.toggle("dark_theme", isDarkTheme);
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider
            value={{
                isDarkTheme,
                toggleDarkTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);

*/

$(function () {
    $(".darkmodebtn").on("click", function () {
        $("body").toggleClass("darkmode");
    });
});
