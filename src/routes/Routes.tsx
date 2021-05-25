import React from "react";
import { Router, Route, Switch, RouteComponentProps } from "react-router-dom";

import { RouteType } from "../types/routes";
import { homepageLayoutRoute } from "./index";
import history from "./history";

const childRoutes = (routes: Array<RouteType>) =>
  routes.map(({ component: Component, children, path }, index: number) => {
    return children ? (
      children.map((element, index: number) => {
        const ElementComponent = element.component || React.Fragment;

        return (
          <Route
            key={index}
            path={element.path}
            exact
            render={(props: RouteComponentProps) => (
              <ElementComponent {...props} />
            )}
          />
        );
      })
    ) : Component ? (
      <Route
        key={index}
        path={path}
        exact
        render={(props: any) => <Component {...props} />}
      />
    ) : null;
  });

const Routes = () => (
  <Router history={history}>
    <Switch>
      {childRoutes(homepageLayoutRoute)}
      {/* <Route render={() => <Page404 />} /> */}
    </Switch>
  </Router>
);

export default Routes;
