import React from "react";
import { HashRouter } from "react-router-dom";

import "./App.scss";

import { AppRoutes } from "./Routes";
import { DefaultLayout } from "./layout";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
