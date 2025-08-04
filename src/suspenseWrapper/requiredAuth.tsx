import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../webRouter/routers";

import React from "react";

const RequireAuth = ({ children }: { children: React.ReactElement }) => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  if (!token) {
    navigate(ROUTER_PATH.LOGIN);
  }

  return children;
};

export default RequireAuth;
