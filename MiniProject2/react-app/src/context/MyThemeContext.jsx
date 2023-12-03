import React, { createContext, useContext, useState } from 'react';
import { lightTheme } from '../themes/lightTheme';
import { darkTheme } from '../themes/darkTheme';
import ThemeSwitcher from '../components/ThemeSwitch';

export const themes = {
    light: lightTheme,
    dark: darkTheme,
};

export const MyThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {},
  darkMode: false,});

export default function MyThemeProvider(props) {
    const [theme, setTheme] = useState(themes.light);
    const darkMode = theme === themes.dark;

    const toggleTheme = () => {
      console.log('Toggle Theme');
      setTheme(theme === themes.light ? themes.dark : themes.light);
    }

  return (
      <MyThemeContext.Provider value={{ theme, setTheme: toggleTheme, darkMode }}>
        {props.children}
        <ThemeSwitcher />
      </MyThemeContext.Provider>
  );
}

export const useMyThemeContext = () => {
    return useContext(MyThemeContext);
  };