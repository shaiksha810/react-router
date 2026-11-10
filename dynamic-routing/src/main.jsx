import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ContextFunction } from "./context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextFunction>
      <App />
    </ContextFunction>
  </BrowserRouter>,
);
