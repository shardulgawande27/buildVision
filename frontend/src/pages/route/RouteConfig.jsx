import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Login";
import Signup from "../Signup";
import Home from "../Home";
const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </>
  );
};

export default RouteConfig;
