import { Route, Routes } from "react-router";
import { Home } from "../layout/Home/home";
import { Login } from "../layout/LoginAndReset/Login/login";
import { SuspenseWrapper } from "../suspenseWrapper";
import { ROUTER_PATH } from "./routers";

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
    {/* <Route
      path={ROUTER_PATH.HOME}
      element={
        <SuspenseWrapper component={<HomeTicket tiketType={1 as any} />} />
      }
    ></Route> */}
  </Routes>
);
