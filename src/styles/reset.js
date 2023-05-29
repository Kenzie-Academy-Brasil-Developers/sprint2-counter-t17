import { createGlobalStyle } from "styled-components";

//createGlobalStyle parece muito com um arquivo .css
export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`