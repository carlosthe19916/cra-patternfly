import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AppPlaceholder } from "./components";
import { Paths } from "./Paths";

const Page1 = lazy(() => import("./containers/page1"));
const Page2 = lazy(() => import("./containers/page2"));
const Page3 = lazy(() => import("./containers/page3"));

export const AppRoutes = () => {
  const routes = [
    { component: Page1, path: Paths.page1 },
    { component: Page2, path: Paths.page2 },
    { component: Page3, path: Paths.page3 },
  ];

  return (
    <Suspense fallback={<AppPlaceholder />}>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
          ></Route>
        ))}
        <Redirect from={Paths.base} to={Paths.page1} exact />
      </Switch>
    </Suspense>
  );
};
