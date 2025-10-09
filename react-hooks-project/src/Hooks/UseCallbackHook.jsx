import React, { useCallback, useState } from "react";
import Header from "../components/Header";

function UseCallbackHook() {
  const [count, setCount] = useState(0);
  
    // The useCallback() hook will not create another function, it will use the cached function,
    // Whenever it will create the function for the first time , it will cache the function in the memory,
    // and whenever the re-renders happens, it will used the cached function, and when the function will be same,
    // the header prop will be same , and the prop is not changing, thus the header will not re-render again.

  const customFunction = useCallback(() => {}, []);

  return (
    <div>
      <h1>Let's learn useCallback Hook!</h1>
      <Header customFunction={customFunction} />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseCallbackHook;
