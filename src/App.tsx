import { ThemeProvider } from 'styled-components';
import Router from './pages/Router';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import ModalProvider from './components/common/modal/ModalProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <Router />
        </ModalProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
