import { BrowserRouter } from "react-router-dom";

import RenderRouter from "./routes";
import { IntlProvider } from "react-intl";
import {
  flattenMessages,
  getIntlLocale,
  getPrefixLocale,
  local_KR,
} from "locales";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
