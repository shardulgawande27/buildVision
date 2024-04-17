import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RouteConfig from "./pages/route/RouteConfig";
const App = () => {
  return (
    <Router>
      <RouteConfig />
    </Router>

    // <Signup />
  );
};

export default App;
