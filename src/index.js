import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import QuestionProvider from "./store/question-Context";

ReactDOM.render(
  <QuestionProvider>
    <App />
  </QuestionProvider>,
  document.getElementById("root")
);
