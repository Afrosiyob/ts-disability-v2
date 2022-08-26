import { lazy } from "react";

const LazyAdmin = lazy(() => import("pages/admin"));
const LazyAuth = lazy(() => import("pages/auth"));
const LazyApp = lazy(() => import("App"));

export const Pages = {
  LazyAdmin,
  LazyAuth,
  LazyApp,
};
