import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CrptoCoins from "./pages/CrptoCoins";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CrptoCoins>
      <App />
    </CrptoCoins>
  </React.StrictMode>
);
