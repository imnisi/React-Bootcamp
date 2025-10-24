import React from "react";

function FirstComponent({ val, fn }) {
  console.log("child Component rendered");
  return (
    <>
      <div>FirstComponent</div>
      <h2>Props Data in child Component: {val}</h2>
      <button onClick={() =>fn(10)}>Click here for set 10</button>
    </>
  );
}

export default FirstComponent;
