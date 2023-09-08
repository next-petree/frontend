import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   body {
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
