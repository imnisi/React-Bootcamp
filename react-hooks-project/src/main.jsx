import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  // Now we can access the context values in any component wrapped inside the ContextProvider
  <ContextProvider>
    <App />
  </ContextProvider>
);
