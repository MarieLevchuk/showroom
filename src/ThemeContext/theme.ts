import { createTheme, Theme } from "@mui/material/styles";

export const AppLightTheme: Theme = createTheme({
    palette: {
        common: {
            black: "rgba(20, 20, 20, 1)",
            white: "rgba(255, 255, 255, 1)"
        },
        primary:{
            main: "rgba(254, 132, 0, 1)",
            light: "rgba(255, 166, 70, 1)",
            dark: "rgba(217, 114, 2, 1)"
        },
        secondary:{
            main: "rgba(255, 217, 175, 1)"
        },
        background: {
            default: "rgba(251, 251, 251, 1)",
            // default: "rgba(20, 20, 20, 1)",
            paper: "rgba(255, 255, 255, 1)"
        },
        text: {
            primary: "rgba(20, 20, 20, 1)",
            secondary: "rgba(255, 217, 175, 1)"
        },
        grey: {
            100: "rgba(196, 196, 196, 1)"
        },
    },
    typography: {
        htmlFontSize: 24,
        fontFamily: '"Montserrat", "Poppins", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1:{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 1.229,
        },
        h2:{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
            fontSize: 32,
            lineHeight: 1.219,
        },
        h3:{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: 26,
            lineHeight: 1.231,
        },
        h4:{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: 22,
            lineHeight: 1.227,
        },
    },
    components: {
        MuiAppBar:{
            styleOverrides: {
                root: {
                  backgroundColor: "transparent",
                  boxShadow: 'none',
                  fontSize: 16
                },
            },
        },
        MuiLink:{
            styleOverrides: {
                root: {
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  margin: 'auto 0'
                },
            },
        },
        MuiFormLabel:{
            styleOverrides: {
                root: {
                  fontSize: 'inherit',
                  fontWeight: 500,
                  color:'GrayText'
                },
            },
        },
        MuiTableCell:{
            styleOverrides: {
                root: {
                    fontSize:'inherit',
                    variants: [
                        {
                            props: { variant: 'th' },
                            style: {
                                color:  "rgba(154, 154, 154, 1)",
                                fontWeight: 500,
                                textTransform:'capitalize'
                            }
                        }
                    ]
                }
            }
        }
    }
});

export const AppDarkTheme: Theme = createTheme({
    palette: {
        background: {
            default: "rgba(20, 20, 20, 1)",
        }
    }
})