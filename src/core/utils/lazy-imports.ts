import { lazy } from "react";

const LazyAdmin = lazy(() => import("pages/admin/admin"));
const LazyAuth = lazy(() => import("pages/auth/auth"));
const LazyApp = lazy(() => import("App"));

export const Pages = {
  LazyAdmin,
  LazyAuth,
  LazyApp,
};
