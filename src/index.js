import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MovieProvider from "./context/movie-provider";

ReactDOM.render(
  <MovieProvider>
    <Router>
      <App />
    </Router>
  </MovieProvider>,
  document.getElementById("root")
);
