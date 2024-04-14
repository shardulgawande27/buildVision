import React from "react";
import { Route, Routes } from "react-router";
import Login from "../login";
import Signup from "../signup";
const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </>
  );
};

export default RouteConfig;
