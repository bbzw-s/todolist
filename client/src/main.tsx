import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodosDataProvider } from "./DataContext";
import "./style/app.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodosDataProvider>
      <App />
    </TodosDataProvider>
  </React.StrictMode>
);
