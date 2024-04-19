import React from "react";
import { Routes, Route } from "react-router-dom";
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
