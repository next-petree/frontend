import { ThemeProvider } from 'styled-components';
import Router from './pages/Router';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import ModalProvider from './components/common/modal/ModalProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyle />
        <Router />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
