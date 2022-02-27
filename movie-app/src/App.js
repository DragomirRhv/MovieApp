import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme/theme";
import Routes from "./routes/Routes";
import CombinedContextProvider from "./context/CombinedContextProvider/CombinedContextProvider";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CombinedContextProvider>
          <Routes />
        </CombinedContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
