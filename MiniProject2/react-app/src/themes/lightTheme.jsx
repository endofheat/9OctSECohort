import { createTheme } from "@mui/material";

export const lightThemeSettings = {
  palette: {
    primary: { main: "#EAAA76", contrastText: "#efefef" },
    secondary: { main: "#EAC276", contrastText: "#ffffff" },
    
    mode: "light",
  },
  typography: {
    fontFamily: "monospace",
    fontSize: 16,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #EAC276; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
};
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const lightTheme = createTheme(lightThemeSettings);
