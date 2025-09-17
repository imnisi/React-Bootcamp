import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    console.log("Value added", counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log("Value Removed: ", counter - 1);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={removeValue}> Remove Value</button>
    </>
  );
}

export default App;
