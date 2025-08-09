import React from "react";
import { Route, Routes } from "react-router";
import { ROUTER_PATH } from "./routers";
import { Login } from "../layout/LoginAndReset/Login/login";
import { SuspenseWrapper } from "../suspenseWrapper";
import { Home } from "../layout/Home/home";

export const WebRouter = () => (
  <Routes>
    {/* Login */}
    <Route
      path={ROUTER_PATH.LOGIN}
      element={<SuspenseWrapper component={<Login />} />}
    ></Route>

    {/* Home */}
    <Route
      path={ROUTER_PATH.HOME}
      element={<SuspenseWrapper component={<Home />} />}
    ></Route>
  </Routes>
);
