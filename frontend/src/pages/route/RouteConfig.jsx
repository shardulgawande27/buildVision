import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Login";
import Signup from "../Signup";
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
