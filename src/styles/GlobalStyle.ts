import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset},
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   body {
      min-width: 1440px;
      font-family: ${({ theme }) => theme.fonts.SUIT};
      background-color: ${({ theme }) => theme.colors.background};
   }
   a {
      text-decoration: none;
      color: inherit
   }
   button {
      cursor: pointer;
      border: none;
   }
`;

export default GlobalStyle;
