import type { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];
