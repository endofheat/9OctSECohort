import React from "react";
import { useMyThemeContext, themes } from "../context/MyThemeContext"

function ThemeSwitcher() {
    const { theme,setTheme } = useMyThemeContext();

    const handleThemeChange = () => {
        //(darkMode) ? setTheme(themes.light) : setTheme(themes.dark)
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <label><input type="checkbox" onChange={()=>{setTheme(theme == themes.dark ? themes.light : themes.dark);}}/> Dark Mode?</label>
    )
}

export default ThemeSwitcher;