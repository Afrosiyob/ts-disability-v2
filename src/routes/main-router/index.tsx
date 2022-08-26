import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Admin from "../../pages/admin";
import Auth from "../../pages/auth";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/admin" />} />
      <Route path="admin" element={<Admin />} />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
};

export default MainRouter;
