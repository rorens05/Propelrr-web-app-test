import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/index.css";
import "./assets/styles/navigations.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { ToastContainer } from "react-toastify";
import { Routes } from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Provider>,
  document.getElementById("root")
);
