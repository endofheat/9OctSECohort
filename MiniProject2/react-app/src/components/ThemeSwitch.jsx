import React from "react";
import { useMyThemeContext, themes } from "../context/MyThemeContext"

function ThemeSwitcher() {
    const { theme, setTheme } = useMyThemeContext();
/*     const theme = useTheme();
    const themeDarkMode = setTheme ? darkMode : theme.palette.mode == 'dark'; */

    const handleThemeChange = () => {
        //(darkMode) ? setTheme(themes.light) : setTheme(themes.dark)
        //if (setTheme) (darkMode) ? setTheme(themes.light) : setTheme(themes.dark);
        setTheme(theme === themes.dark ? themes.light : themes.dark)

       /*  if(theme) {
            let newThemeSettings = {...lightThemeSettings}; // clone the current settings

            if (theme.palette.primary.main == darkThemeSettings.palette.primary.main) {
                newThemeSettings = {...darkThemeSettings}; // switch to dark if activated
            }

            newThemeSettings.palette.mode = theme.palette.mode == 'dark' ? 'light' : 'dark'; // override the mode in cloned settings

            const newTheme = createTheme(newThemeSettings); // create new theme with same settings but new mode
            onChangeTheme(newTheme) // update new theme in state 
    }  */
}

    return (
        <label><input type="checkbox" /* checked={themeDarkMode} */ onChange={handleThemeChange}/> Dark Mode?</label>
    )
}

export default ThemeSwitcher;