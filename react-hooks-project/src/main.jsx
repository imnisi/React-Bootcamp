import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseStateHook from "./Hooks/UseStateHook.jsx";
import UseStateHookNew from "./Hooks/UseStateHookNew.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <UseStateHook />
    <UseStateHookNew />
  </StrictMode>
);
