// Create a context with a default value of your phone number
import React, { useState } from "react";
import { createContext } from "react";

// Creating the context
const AppContext = createContext();

// Provider function to wrap around the components that need access to the context
// const ContextProvider = (props) => {
//   const phoneNumber = "123-456-7890";
//   return (
//     <AppContext.Provider value={{ phoneNumber }}>
//       {props.children}
//     </AppContext.Provider>
//   );
// };

// Another way to write the ContextProvider using destructuring
const ContextProvider = ({ children }) => {
  const headerMsg = "Let's learn React Context API";
  const phoneNumber = "123-456-7890";
  const email = "example@example.com";
  const [user, setUser] = useState({ name: "Nishant", age: 23 });
  return (
    <AppContext.Provider
      value={{ headerMsg, phoneNumber, email, user, setUser }}
    >
      {/* This represents the child components that will have access to the context */}
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
