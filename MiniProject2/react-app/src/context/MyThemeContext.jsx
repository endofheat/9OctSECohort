import React, { createContext, useContext, useState } from 'react';
import { lightTheme } from '../themes/lightTheme';
import { darkTheme } from '../themes/darkTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export const themes = {
    light: lightTheme,
    dark: darkTheme,
};

export const MyThemeContext = React.createContext(null);

export default function MyThemeProvider(props) {
    const [theme, setTheme] = React.useState(themes.light);
    //const darkMode = theme === themes.dark;

/*     const toggleTheme = () => {
      console.log('Toggle Theme');
      setTheme(theme === themes.light ? themes.dark : themes.light)}; */
    

  return (
      <MyThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        {props.children}
        </ThemeProvider>
    
      </MyThemeContext.Provider>
  );
}


export const useMyThemeContext = () => {
    return useContext(MyThemeContext);
  };