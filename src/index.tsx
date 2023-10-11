import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles";
import { IntlProvider } from "react-intl";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
