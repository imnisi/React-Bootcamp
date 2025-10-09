import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseStateHook from "./Hooks/UseStateHook.jsx";
import UseStateHookNew from "./Hooks/UseStateHookNew.jsx";
import UseEffectHook from "./Hooks/UseEffectHook.jsx";
import UseRefHook from "./Hooks/UseRefHook.jsx";
import UseRefHookNew from "./Hooks/UseRefHookNew.jsx";
import UseMemoHook from "./Hooks/UseMemoHook.jsx";
import UseCallbackHook from "./Hooks/UseCallbackHook.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <UseStateHook />
    <UseStateHookNew />
    <UseEffectHook />
    <UseRefHook />
    <UseRefHookNew />
    <UseMemoHook />
    <UseCallbackHook />
  </>
);
