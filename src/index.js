import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import { Provider } from "react-redux";
import rootReducer from "./service/Reducers/index";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer : rootReducer,
});

console.log("store",store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
