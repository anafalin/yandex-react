import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app";

/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
*/
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)