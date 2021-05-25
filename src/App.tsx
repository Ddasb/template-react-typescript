import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Routes from "./routes/Routes";
import WebappContext from "./context/WebappContext";

function App() {
  return (
    <React.Fragment>
      <WebappContext>
        <HelmetProvider>
          <Helmet titleTemplate="%s | WebApp" defaultTitle="Welcome" />
          <Routes />
        </HelmetProvider>
      </WebappContext>
    </React.Fragment>
  );
}

export default App;
