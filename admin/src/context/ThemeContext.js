import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";

const themeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState('dark');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <themeContext.Provider value={{themeToggler}}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    );
}

export {themeContext, ThemeContextProvider}