import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${reset}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
    }

    img{
        width: 100%;
        display: block;
    }

    a{
        text-decoration: none;
    }   
`;
