import React from "react";
import { Route, Routes } from "react-router";
import { ROUTER_PATH } from "./routers";
import { Login } from "../layout/LoginAndReset/Login/login";
import { SuspenseWrapper } from "../suspenseWrapper";

export const WebRouter = () => (
  <Routes>
    {/* Login */}
    <Route
      path={ROUTER_PATH.LOGIN}
      element={<SuspenseWrapper component={<Login />} />}
    ></Route>
  </Routes>
);
