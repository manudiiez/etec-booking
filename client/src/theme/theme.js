import { createGlobalStyle } from "styled-components"


export const lightTheme = {
    bg_1: '#fff',
    bg_2: '#4CE0D2',
    bg_3: '#ffffff4d',
    color_1: '#000',
    color_2: '#33363A',
    color_3: '#4CE0D2',
    color_4: '#000',
}
export const darkTheme = {
    bg_1: '#000',
    bg_2: '#000',
    bg_3: '#ffffff1a',
    color_1: '#fff',
    color_2 : '#136F63',
    color_3 : '#4CE0D2',
    color_4 : '#4CE0D2',
}

export const GlobalStyles = createGlobalStyle`
    .container-lg{
        max-width: 1180px;
        width: 100%;
        margin: auto;
        line-height: 1.6;
    }
`