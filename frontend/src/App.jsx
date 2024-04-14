import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
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
