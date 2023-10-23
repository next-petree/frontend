import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    font-family: 'SUITE-Regular', AppleSDGothicNeo, sans-serif;
  }

  html {
    font-size: 62.5%;
    letter-spacing: -0.05px;
 
    @media all and (max-width: 1400px) {
      font-size: 44%;
    }
  
    @media all and (min-width: 1400px) and (max-width: 1550px) {
      font-size: 46.5%;
    }
  
    @media all and (min-width: 1550px) and (max-width: 1700px) {
      font-size: 51.5%;
    }
  
    @media all and (min-width: 1700px) and (max-width: 1900px) {
      font-size: 56.5%;
    }
    
    @media all and (min-width: 2070px) and (max-width: 2350px) {
      font-size: 68.5%;
    }
  
    @media all and (min-width: 2350px) and (max-width: 2600px) {
      font-size: 78%;
    }
  
    @media all and (min-width: 2600px) and (max-width: 2900px) {
      font-size: 86%;
    }
  
    @media all and (min-width: 2900px) and (max-width: 3200px) {
      font-size: 96.5%;
    }
  
    @media all and (min-width: 3200px) and (max-width: 3500px) {
      font-size: 106%;
    }
  
    @media all and (min-width: 3500px) and (max-width: 3850px) {
      font-size: 117%;
    }
    
    @media all and (min-width: 3850px) {
      font-size: 128.5%;
    }
  }

  body {
    display: block;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;
