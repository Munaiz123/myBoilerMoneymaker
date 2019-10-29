console.log("hello from src/index.js");

import React from "react";
import ReactDom from "react-dom";

import {Provider} from "react-redux";
import store from "./store";
import Root from "./components/root";



ReactDom.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);
