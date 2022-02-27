import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import SingleShowPage from "../pages/SingleShowPage/SingleShowPage";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<PrivateRoute component={DashboardPage} />} />
      <Route
        path="/singleshow/:id"
        element={<PrivateRoute component={SingleShowPage} />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </AppRoutes>
  );
};

export default Routes;
