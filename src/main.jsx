import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import 'boxicons'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
