import { createTheme } from "@mui/material";

export const lightThemeSettings = {
    palette: {
        primary: { main: "#214D4C", contrastText: "#efefef" },
        secondary: { main: "#3CA899", contrastText: "#ffffff" },
        mode: 'dark'
    },
    typography: {
        fontFamily: "Montserrat",
        fontSize: 14,
        h1: { fontSize: 30 },
    },
    shape: { borderRadius: 0 },
    components: {
        MuiCssBaseline: {
        styleOverrides: `a { color: #3CA899; }`,
        },
        MuiButton: { defaultProps: { variant: "contained" } },
        MuiTextField: { defaultProps: { variant: "filled" } },
    },
}
  // creates a new theme containing overrides for any defaults
  // see https://mui.com/material-ui/customization/theming/
export const lightTheme = createTheme(lightThemeSettings);
