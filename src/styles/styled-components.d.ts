import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: '#4EC1BF';
      accent: '#4ec1bf';
      background: '#FFFFFF';
      text: '#000000';
      black: '#000000';
      white: '#FFFFFF';
      red: '#FF5757';
      blue: '#158FFF';
    };
    fonts: {
      SUIT: 'SUIT Variable, sans-serif';
    };
  }
}
