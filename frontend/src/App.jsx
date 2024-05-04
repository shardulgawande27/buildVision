import React, { useEffect } from "react";
import {  BrowserRouter as Router } from "react-router-dom";

import RouteConfig from "./pages/route/RouteConfig";
import { BrowserRouter } from 'react-router-dom';

import store from "./store/index";
import { Provider } from "react-redux";



import "./App.css";
const App = () => {




  return (
    <Provider store={store}>
      <div>
        <Router>
          <RouteConfig />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
