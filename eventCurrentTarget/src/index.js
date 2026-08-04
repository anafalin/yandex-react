import React from "react";
import ReactDOM from "react-dom/client";

import DissatisfiedButton from "./components/app/app";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <DissatisfiedButton />
  </React.StrictMode>,
);
