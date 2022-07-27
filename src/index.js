import React from "react";
import ReactDOMClient from "react-dom/client";
import "./assets/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-datepicker/dist/react-datepicker.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Provider } from "react-redux";
import store from "./states/store";

import "./App.scss";
import "./custom.css";
import "./style.css";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
