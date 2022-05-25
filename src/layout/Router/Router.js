import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Pages } from "src/constants";
import { WelcomePage } from "src/pages";

const Router = () => {
  return (
    <Routes>
      <Route path={Pages.WelcomePage} element={<WelcomePage />} />
      <Route
        path="*"
        element={<Navigate to={Pages.WelcomePage} replace={true} />}
      />
    </Routes>
  );
};

export default Router;
