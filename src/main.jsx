import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles, Reset } from "./style/Global/global";

import ProvidersApp from "./providers/ProvidersApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvidersApp>
      <BrowserRouter>
        <Reset />
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ProvidersApp>
  </React.StrictMode>
);
