import React from "react";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";

import "./App.scss";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </React.Fragment>
  );
};

export default App;