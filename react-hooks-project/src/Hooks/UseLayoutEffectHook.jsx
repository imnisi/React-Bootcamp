import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffectHook() {
  useEffect(() => {
    console.log("Message from useEffect");
  });

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  });

  return (
    <div>
      <h1>Let's learn the useLayoutEffectHook!</h1>
      {Array(10)
        .fill("")
        .map((item, index) => {
          return <li key={index}>{Math.pow(Math.random(), 2)}</li>;
        })}
    </div>
  );
}

export default UseLayoutEffectHook;
