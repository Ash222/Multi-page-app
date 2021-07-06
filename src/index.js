import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Container from "./Container";

ReactDOM.render(
  <BrowserRouter>
    <Container />
  </BrowserRouter>,
  document.getElementById("root")
);
