import { Route, Routes } from "react-router";
import { HomeTicket } from "../layout/Home/HomeTicket/homeTicket";
import { Login } from "../layout/LoginAndReset/Login/login";
import { SuspenseWrapper } from "../suspenseWrapper";
import { ROUTER_PATH } from "./routers";
import { TicketType } from "./../properties/type";

export const WebRouter = () => (
  <Routes>
    {/* Login */}
    <Route
      path={ROUTER_PATH.LOGIN}
      element={<SuspenseWrapper component={<Login />} />}
    ></Route>

    {/* Home */}
    {/* <Route
      path={ROUTER_PATH.HOME}
      element={<SuspenseWrapper component={<Home />} />}
    ></Route> */}
    <Route
      path={ROUTER_PATH.HOME}
      element={
        <SuspenseWrapper component={<HomeTicket tiketType={1 as any} />} />
      }
    ></Route>
  </Routes>
);
