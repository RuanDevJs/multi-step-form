import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/index.routes";

import themes from "./themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { FormContextProvider } from "./context/Form";

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <FormContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </FormContextProvider>
    </ThemeProvider>
  );
}
