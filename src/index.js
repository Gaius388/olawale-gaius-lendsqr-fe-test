import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { UsersProvider } from "./context/user_context";
import { FilterProvider } from "./context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </UsersProvider>
);
