import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Pages } from "core/utils/lazy-imports";

import ProtectedRoute from "./protected-route";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/admin" />} />
      <Route
        path="admin"
        element={
          <ProtectedRoute>
            <Pages.LazyAdmin />
          </ProtectedRoute>
        }
      />
      <Route path="auth" element={<Pages.LazyAuth />} />
    </Routes>
  );
};

export default MainRouter;
