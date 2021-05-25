import React from "react";

export type RouteType = {
  id: string;
  path: string;
  children: null | Array<RouteChildType>;
  component: React.FunctionComponent<any> | React.ComponentClass<any> | null;
};

export type RouteChildType = {
  path: string;
  name: string;
  component: React.FunctionComponent<any> | React.ComponentClass<any>;
};
