// Components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useMyContext } from "./Mycontext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useMyContext();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
