import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { INPUT_REACT_ELEMENT } from "core/interfaces/interfaces";

const ProtectedRoute = ({ children }: INPUT_REACT_ELEMENT): ReactElement => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default ProtectedRoute;
