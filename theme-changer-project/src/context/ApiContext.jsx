import React, { createContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const contactDetailsHeader = "Contact Details";
  const [theme, setTheme] = useState("white");

  return (
    <AppContext Provider value={{ contactDetailsHeader, theme, setTheme }}>
      {children}
    </AppContext>
  );
};

export { AppContext, ContextProvider };
