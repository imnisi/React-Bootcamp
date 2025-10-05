import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);

  // When we use useEffect() hook without any dependency, then it will execute the callback function,
  // whenever any state change in the component, and also after the initial render.

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((prev) => prev + 1);
  //     }, 2000);
  //   });

  // useEffect(() => {
  // setTimeout(() => {
  //   setCount((prev) => prev + 1);
  // }, 2000);
  // }, []); // empty dependency array means it will run only once after the initial render and count value is 1.

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, [count]); // it will run after every count value change, so count value will increase by 1 after every 2 seconds.
  // If we pass a dependency array with some state variables, then the useEffect() hook will execute the callback function, whenever any of the state variable mentioned in the dependency array changes.

  return (
    <>
      <h1> Let's Learn useEffect Hook!</h1>
      <h2>UI have been rendered {count} times.</h2>
    </>
  );
}

export default UseEffectHook;
