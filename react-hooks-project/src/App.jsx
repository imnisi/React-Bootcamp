import React from "react";
import { useState } from "react";
import "./App.css";
import UseStateHook from "./Hooks/UseStateHook.jsx";
import UseStateHookNew from "./Hooks/UseStateHookNew.jsx";
import UseEffectHook from "./Hooks/UseEffectHook.jsx";
import UseRefHook from "./Hooks/UseRefHook.jsx";
import UseRefHookNew from "./Hooks/UseRefHookNew.jsx";
import UseMemoHook from "./Hooks/UseMemoHook.jsx";
import UseCallbackHook from "./Hooks/UseCallbackHook.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import UseReducerHook from "./Hooks/UseReducerHook.jsx";
import UseLayoutEffectHook from "./Hooks/UseLayoutEffectHook.jsx";
import UseLayoutEffectHookEx from "./Hooks/UseLayoutEffectHookEx.jsx";
import DomMeasurement from "./components/DomMeasurement.jsx";

function App() {
  const [color, setColor] = useState("Red");

  // let color = "Red";

  // const changeColor = () => {
  //   color = "Blue";
  //   console.log(color); //  This will log "Blue" to the console
  // };

  const changeColor = () => {
    setColor("Blue");
    console.log(color); //  This will still log "Red" to the console on the first render because state updates are asynchronous in React. To see the updated color, you would need to check the color variable on the next render.
  };

  return (
    <>
      <h1> My Favorite color is {color}!</h1>
      {/* Why the color is not changing on the screen? 

      Because the component is not re-rendering when the color variable changes. 
      React components re-render when their state or props change. 
      Since color is just a regular variable, changing it does not trigger a re-render.      
      To make the color change reflect in the UI, we should use the useState hook to manage the color as state.
      */}
      <button onClick={changeColor}>Blue Button</button>
      <UseStateHook />
      <UseStateHookNew />
      <UseEffectHook />
      <UseRefHook />
      <UseRefHookNew />
      <UseMemoHook />
      <UseCallbackHook />
      <Profile />
      <Footer />
      <UseReducerHook />
      <UseLayoutEffectHook />
      <UseLayoutEffectHookEx />
      <DomMeasurement />
    </>
  );
}

export default App;
