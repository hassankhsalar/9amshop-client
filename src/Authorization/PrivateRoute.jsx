import React, { Children, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import LoaderSpinner from "../globalComponents/LoaderSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
