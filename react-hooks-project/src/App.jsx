import React from "react";
import { useState } from "react";
import "./App.css";

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
    </>
  );
}

export default App;
