import React from "react";
import { useMyThemeContext } from "../context/MyThemeContext"

function ThemeSwitcher() {
    const { setTheme, darkMode } = useMyThemeContext();

    const handleThemeChange = () => {
        
        //(darkMode) ? setTheme(themes.light) : setTheme(themes.dark)
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <label><input type="checkbox" checked={darkMode} onChange={handleThemeChange}/> Dark Mode?</label>
    )
}

export default ThemeSwitcher;