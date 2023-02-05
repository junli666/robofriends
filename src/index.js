import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./container/App";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(searchRobots);
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
