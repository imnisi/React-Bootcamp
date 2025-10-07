import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const cubeNum = (num) => {
    console.log("Calculation Done!");
    return Math.pow(num, 3);
  };

  // const result = cubeNum(number);

  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div>
      <h1>Let's learn useMemo Hook</h1>
      <input
        placeholder="Type your number"
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h2>Cube of the number: {result}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
      <h3>Counter Value: {counter}</h3>
    </div>
  );
}

export default UseMemoHook;
