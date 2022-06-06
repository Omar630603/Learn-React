import React from "react";
import Join from "./Join";
import Login from "./Login";
const Routes = [
  { name: "Join", path: "/", exact: true, main: <Join /> },
  { name: "Login", path: "/login", exact: true, main: <Login /> },
];
export default Routes;
