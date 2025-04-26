import React from "react";
import ReactDOM from "react-dom/client";
import AdvanceShoppingCart from "./AdvanceShoppingCart/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AdvanceShoppingCart />
    </React.StrictMode>
  </BrowserRouter>
);
