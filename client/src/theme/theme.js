import { createGlobalStyle, css } from "styled-components"


export const theme = {
    white: "#FFFFFF",
    white_2: "#FEFBF6",
    orange: "#F89A40",
    gray: "#33363A",
    black: "#000000",
    red: "#ce0202",
}

export const GlobalStyles = createGlobalStyle`
    .container-lg{
        max-width: 1180px;
        width: 100%;
        margin: auto;
    }

    .scollbar{
        &::-webkit-scrollbar {
            width: 5px;              
        }

        &::-webkit-scrollbar-track {
            background-color: #FEFBF6;        
        }

        &::-webkit-scrollbar-thumb {
            background-color: #f89940b4;    
            border-radius: 20px;     
        }
    }
`

export const Text = ({ size, color, weight }) => css`
    color: ${color};
    font-size: ${size};
    font-weight: ${weight};

`