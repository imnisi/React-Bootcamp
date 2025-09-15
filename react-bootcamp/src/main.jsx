import React from "react";
import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomReactElement from "./CustomReactElement.jsx";

export default function MyApp() {
  return <h3>Custom App!</h3>;
}

//? const reactElement = {
//?   type: "a",
//?   props: {
//?     href: "https://example.com",
//?     target: "_blank",
//?   },
//?   children: "Click here",
//?   key: null,
//?   ref: null,
//? };

//? createRoot(document.getElementById("root")).render(
//?   <StrictMode>
//?      reactElement
//?   </StrictMode>
//? );

//# Why the above code will not render:

// Issue with the code: we are trying to render reactElement (a plain Javascript object)
// directly in JSX, but React expects JSX elements, not plain objects.

//? createRoot(document.getElementById("root")).render(
//?   <StrictMode>
//?     reactElement  // ❌ This won't work - it's just a plain object
//?   </StrictMode>
//? );

//# Why this doesn't work:

// When we write JSX like <App />, Babel converts it to:
//? React.createElement(App, null)
// But when we write reactElement directly, we are just putting a plain JavaScript
// object there, which React doesn't know how to handle

//# How to fix : 1. Use React.createElement():

//? createRoot(document.getElementById("root")).render(
//?   <StrictMode>
//?     {React.createElement(
//?       reactElement.type,
//?       reactElement.props,
//?       reactElement.children
//?     )}
//?  </StrictMode>
//? );

//# 2. Convert to Proper JSX:

//? createRoot(document.getElementById("root")).render(
//?   <StrictMode>
//?     <a href="https:// example.com" target="_blank">
//?       Click here
//?     </a>
//?   </StrictMode>
//? );

//# 3. Create component that renders the object:

//? function RenderElement({ element }) {
//?   return React.createElement(element.type, element.props, element.children);
//? }

//? createRoot(document.getElementById("root")).render(
//?   <StrictMode>
//?     <RenderElement element={reactElement} />
//?   </StrictMode>
//? );

//# Key Understanding:

// Reacts converts JSX to objects, but there's a process:
// JSX -> Babel -> React.createElement() -> React Element Object -> DOM

//* Implementation:

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google",
  key: null,
  ref: null,
};

// Component that renders custom react element objects

function RenderCustomElement({ element }) {
  return React.createElement(element.type, element.props, element.children);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <h1>Method 1: Direct JSX</h1>
    <a href="https://www.microsoft.com" target="_blank">
      Microsoft
    </a>
    <h1>Method 2: Using React.createElement() method</h1>
    {React.createElement(
      reactElement.type,
      reactElement.props,
      reactElement.children
    )}
    <h1>Method 3: Using Custom Component</h1>
    <RenderCustomElement element={reactElement} />
    <div
      style={{
        marginTop: "30px",
        padding: "15px",
        backgroundColor: "#0054d2ff",
        borderRadius: "5px",
      }}
    >
      <h4>Key Points:</h4>
      <ul>
        <li>React needs React.createElement() or JSX</li>
        <li>Plain objects don't render directly</li>
        <li>JSX is converted to React.createElement() calls</li>
        <li>All three methods above produce the same result</li>
      </ul>
    </div>
    <MyApp />
    <CustomReactElement />
  </StrictMode>
);
