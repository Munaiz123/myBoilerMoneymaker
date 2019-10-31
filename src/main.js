console.log("hello from src/index.js");


import React from "react";
import ReactDom from "react-dom";

import {Provider} from "react-redux";
import store from "../app/store";
import Root from "../app/components/root";



ReactDom.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);
