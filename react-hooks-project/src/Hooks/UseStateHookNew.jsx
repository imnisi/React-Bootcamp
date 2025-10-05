import React from "react";
import { useState } from "react";

function UseStateHookNew() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          // using previous state variable, updating the values
          setCount((prevCount) => prevCount + 1); // 1
          setCount((prevCount) => prevCount + 1); // 1 + 1 = 2
          setCount((prevCount) => prevCount + 1); // 1 + 1 + 1 = 3
          setCount((prevCount) => prevCount + 1); // 1 + 1 + 1 + 1 = 4
          setCount((prevCount) => prevCount + 1); // 1 + 1 + 1 + 1 + 1 + 1 = 5
        }}
      >
        Count Increase by 5
      </button>
    </>
  );
}

export default UseStateHookNew;
