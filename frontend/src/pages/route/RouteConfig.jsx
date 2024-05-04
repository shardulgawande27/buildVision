import React from "react";
import { Route, Routes } from "react-router";
import {  BrowserRouter as Router, Navigate } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import Home from "../Home";
import AddProject from "../AddProject";
import Validate from "../Validate";
import Task from "../Task";
import Labour from "../Labour";
import Loader from "../../components/Loader";

const RouteConfig = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={localStorage.getItem("token")  ? <Navigate to="/home" /> :  <Login />}/>

        {/* <Route index element={<Login />} /> */}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/validateUser" exact element={<Validate />} />
        <Route path="/addproject" exact element={<AddProject />} />
        <Route path="/task" exact element={<Task />} />
        <Route path="/labourdetails" exact element={<Labour />} />
        <Route path="/loader" exact element={<Loader />} />
      </Routes>
    </>
  );
};

export default RouteConfig;
