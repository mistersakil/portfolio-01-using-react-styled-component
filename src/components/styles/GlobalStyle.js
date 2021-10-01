import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --bgPrimary : rgba(30,30,30,1);
        --bgSecondary: rgba(240,240,240,1);
        --bgGreyDark : rgba(75,75,75,1);
        --bgGrey: rgba(120,120,120,1); 
        --bgBrand: palevioletred;
        --colorPrimary : rgba(30,30,30,1);
        --colorSecondary: rgba(240,240,240,1);
        --colorGrey: rgba(120,120,120,1); 
        --colorGreyLight: rgba(200,200,200,1); 
        --colorBrand: palevioletred;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration:none;
        list-style: none;
        
    }
    html{
        font-size: 10px;
    }
    body{
        font-size: 1.6rem;
        background-color: var(--bgPrimary);
        font-family: 'Roboto','Poppins','Oswald', sans-serif;
    }

    

`;

export default GlobalStyle;
