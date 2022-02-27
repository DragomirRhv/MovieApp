import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component }) => {
  return localStorage.getItem("access_token") ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
};
