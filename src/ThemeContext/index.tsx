import React, { createContext, useEffect, useState } from "react";
import { IThemeContext, IThemeMode } from "./types";
import { Theme, ThemeProvider } from "@mui/material";
import { AppDarkTheme, AppLightTheme } from "./theme";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider:React.FunctionComponent<React.PropsWithChildren> = ({children}) => {
    const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
    const [theme, setTheme] = useState<Theme>(AppLightTheme);

    useEffect(()=>{
        switch(themeMode) {
            case IThemeMode.LIGHT:
                setTheme(AppLightTheme)
                break;
            case IThemeMode.DARK:
                setTheme(AppDarkTheme)
                break;
            default:
                setTheme(AppLightTheme)
            break;
        }
    }, [themeMode])

    const switchThemeMode = (mode: IThemeMode) => {
        setThemeMode(mode);
    }

    return (
        <ThemeContext.Provider value={{
            themeMode,
            switchThemeMode
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}