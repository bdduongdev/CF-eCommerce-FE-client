// export * from "./main.route";
// src/routes/index.ts
import { createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./main.route";

export const router = createBrowserRouter(mainRoutes);
