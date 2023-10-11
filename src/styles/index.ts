import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
// import Fonts from '../assets/fonts';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    *{
        margin:0;
        padding:0;
    }
    html, body {
        height : 100%; 
    }
    button{
        display:inline-flex;
        justify-content: center;
        align-items: center;
    }
    a { text-decoration: none; color: black;}
`;

export default GlobalStyle;
