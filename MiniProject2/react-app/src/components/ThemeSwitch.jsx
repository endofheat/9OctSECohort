import React from "react";
import { useMyThemeContext, themes } from "../context/MyThemeContext"

function ThemeSwitcher() {
    const { setTheme, darkMode } = useMyThemeContext();

    const handleThemeChange = () => {
        //(darkMode) ? setTheme(themes.light) : setTheme(themes.dark)
        setTheme((darkMode) => (darkMode === themes.light ? themes.dark : themes.light));
    }

    return (
        <label><input type="checkbox" checked={darkMode} onChange={handleThemeChange}/> Dark Mode?</label>
    )
}

export default ThemeSwitcher;