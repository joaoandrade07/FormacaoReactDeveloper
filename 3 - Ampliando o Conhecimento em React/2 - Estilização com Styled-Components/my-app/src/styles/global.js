import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;

    }

    :root{
        font-size: 6.25%;
      
        --color-primary: #FFF;
        --color-secundary: #000;
        --fz-primary: 30rem;
        --fz-secondary: 40rem;
    }    

    body{
        background-color: #1E192C;
        color: #FFF;
        
    }

`