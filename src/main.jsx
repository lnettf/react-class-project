import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter envuelve TODA la app: sin él, Link/useParams/... no funcionan */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
