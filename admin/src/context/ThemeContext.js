import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";

const themeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const themeLight = () => {
        setTheme('light')
    }
    const themeDark = () => {
        setTheme('dark')
    }



    return (
        <themeContext.Provider value={{themeDark, themeLight}}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    );
}

export {themeContext, ThemeContextProvider}