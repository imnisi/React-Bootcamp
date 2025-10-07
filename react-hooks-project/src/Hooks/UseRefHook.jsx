import React, { useEffect, useRef, useState } from "react";

function UseRefHook() {
  const [value, setValue] = useState(0);
  // const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   });

  // So, the above code will cause infinite loop because every time the component re-renders, the useEffect will run and update the state, causing another re-render. This cycle continues indefinitely.

  // Because at first when useState is called, it initializes count to 0. Then, when the component renders for the first time, useEffect runs and updates count to 1. This causes the component to re-render, and useEffect runs again, updating count to 2. This cycle continues indefinitely, causing an infinite loop of re-renders.

  // So, to avoid this infinite loop, we can use useRef hook, jo ki component ke re-render hone par apne value ko maintain krta hai bina component ko re-render kiye.

  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>Let's learn useRef Hook!</h1>
      <button onClick={() => setValue((prevValue) => prevValue + 1)}>
        Increase by 1
      </button>
      <h2>{value}</h2>
      <button
        onClick={() => {
          setValue((prevValue) => prevValue - 1);
        }}
      >
        Decrease by 1
      </button>
      <h3>Render Count: {count.current}</h3>
    </>
  );
}

export default UseRefHook;
