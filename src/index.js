import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./App";
import { CardContextProvider } from "./components/CardContext/CardContext";

ReactDOM.render(
  <React.StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
