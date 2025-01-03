import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Ensure this matches your file structure
import "./index.css"; // Ensure this matches your file structure

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
