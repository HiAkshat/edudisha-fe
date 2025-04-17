import App from "./App";
import { Route } from "./typings/routes";
import React from "react";
import testTabRoutes from "./pages/TestTab/routes";
import { createBrowserRouter } from "react-router";
const getChildren = () => {
  return [
    ...testTabRoutes,
  ];
};

export const getRoutes = () => {
  const routes: Route[] = [
    {
      path: "/",
      element: React.createElement(App),
      children: getChildren(),
      key: "root",
    },
  ];
  return routes;
};

export default createBrowserRouter(getRoutes());
console.log(getRoutes());
