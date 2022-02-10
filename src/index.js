import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ScrollToTop from "./hooks/scrollToTop"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
      <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
