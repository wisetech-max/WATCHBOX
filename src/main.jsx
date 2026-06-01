// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router";
// import App from "./app";

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MovieProvider } from "./Hooks/MovieContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MovieProvider>
      <App />
    </MovieProvider>
  </BrowserRouter>,
);
