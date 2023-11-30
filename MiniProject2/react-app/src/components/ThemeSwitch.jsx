import { useMyThemeContext, themes } from "../context/MyThemeContext"

function ThemeSwitcher() {
    const { setTheme, darkMode } = useMyThemeContext();

    const handleThemeChange = (e) => {
        (darkMode) ? setTheme(themes.light) : setTheme(themes.dark)
    }

    return (
        <label><input type="checkbox" checked={darkMode} onChange={handleThemeChange}/> Dark Mode?</label>
    )
}

export default ThemeSwitcher;