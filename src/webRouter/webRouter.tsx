import React from "react";
import { Route, Routes } from "react-router";
import { ROUTER_PATH } from "./routers";
import { Login } from "../layout/LoginAndRegister/Login/login";
import { SuspenseWrapper } from "../SuspenseWrapper";

export const WebRouter = () => {
  <Routes>
    {/* Login */}
    <Route
      path={ROUTER_PATH.LOGIN}
      element={<SuspenseWrapper component={<Login />} />}
    ></Route>
    {/* Register */}
    <Route
      path={ROUTER_PATH.REGISTER}
      element={<SuspenseWrapper component={<Login />} />}
    ></Route>
    {/* Add more routes as needed */}
  </Routes>;
};
