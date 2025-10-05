import React from "react";
import { useRef } from "react";

function UseRefHookNew() {
  const inputElementRef = useRef();

  return (
    <>
      <input type="text" ref={inputElementRef} />
      <br />
      <br />
      <button
        onClick={() => {
          console.log(inputElementRef.current);
          // Manipulating the input element directly using useRef
          inputElementRef.current.value = "Hello, Nishant!";
          inputElementRef.current.style.color = "black";
          inputElementRef.current.style.backgroundColor = "lightblue";
          inputElementRef.current.style.padding = "10px";
          inputElementRef.current.style.borderRadius = "8px";
          inputElementRef.current.focus();
        }}
      >
        Click here to focus
      </button>
    </>
  );
}

export default UseRefHookNew;
