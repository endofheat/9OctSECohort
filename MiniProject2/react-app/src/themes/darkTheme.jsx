import { createTheme } from "@mui/material/styles";

export const darkThemeSettings = {
  palette: {
    primary: {
      main: "#063970",
      contrastText: "#efefef",
    },
    secondary: {
      main: "#0b64c5",
      contrastText: "#ffffff",
    },
    mode: "dark",
  },
  typography: {
    // see https://blog.logrocket.com/add-custom-fonts-mui/#google-fonts-cdn for custom fonts
    // need to add <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"> to index.html
    fontFamily: "monospace",
    fontSize: 16,
    h1: {
      fontSize: 30,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            a {
                color: #0b64c5;
            }
            `,
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
  },
};

// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/#theme-configuration-variables for more
export const darkTheme = createTheme(darkThemeSettings);
