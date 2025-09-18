import React from "react";
import { useState } from "react";

function InterviewCounterApp() {
  const [counter, setCounter] = useState(0);

  //?   const addCounter = () => {
  //?     setCounter(counter + 1);

  //# What if we write like this, what will be the output:
  //?    setCounter(counter + 1); // counter is 0, so this becomes setCounter(1)
  //?    setCounter(counter + 1); // counter is still 0, so this becomes setCounter(1)
  //?    setCounter(counter + 1); // counter is still 0, so this becomes setCounter(1)
  //?    setCounter(counter + 1); // counter is still 0, so this becomes setCounter(1)
  //?    setCounter(counter + 1); // counter is still 0, so this becomes setCounter(1)
  //?  };

  //# Why it only increments by 1:
  // When you click the addCounter button, the counter only increases by 1 instead of 5 because of how React batches state updates and handles closures, Because:

  //  1. State updates are asynchronous - React doesn't update immediately
  //  2. Closures capture current values - Multiple calls use the same initial state, that is, setCounter(counter + 1)
  //  3. React batches updates - Multiple setState calls in the same event get batched

  //# The Solution: Functional Updates
  // To increment by 5, you should use the functional form of setState:
  // With functional updates, each call receives the most recent state value as the prev parameter.

  const addCounter = () => {
    // 1st call: prev = 0 (current state), returns 0 + 1 = 1
    setCounter((prev) => prev + 1);

    // 2nd call: prev = 1 (updated from above), returns 1 + 1 = 2
    setCounter((prev) => prev + 1);

    // 3rd call: prev = 2, returns 2 + 1 = 3
    setCounter((prev) => prev + 1);

    // 4th call: prev = 3, returns 3 + 1 = 4
    setCounter((prev) => prev + 1);

    // 5th call: prev = 4, returns 4 + 1 = 5
    setCounter((prev) => prev + 1);
  };

  //# prev = React ka current state value deta hai
  //# Normal setState = Purana value use karta rahega (stale)
  //# Functional setState = Har baar latest value leke calculate karta hai
  //# Yaad rakh: Jab bhi previous state pe depend karna ho, tab functional update use kar!

  const removeCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h1>Interview Question on Counter Application</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addCounter}>Increment</button>
        <br />
        <br />
        <button onClick={removeCounter}>Decrement</button>
      </div>
    </>
  );
}

export default InterviewCounterApp;
