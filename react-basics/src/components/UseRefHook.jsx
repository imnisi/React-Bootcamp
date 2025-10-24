import React, { useRef, useState } from "react";

function UseRefHook() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  return (
    <>
      <div>UseRefHook</div>
      <input type="text" ref={inputRef} />
      <button onClick={() => setData([...data, inputRef.current.value])}>
        Submit
      </button>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default UseRefHook;
