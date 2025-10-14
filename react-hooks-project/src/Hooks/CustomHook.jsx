import React, { useEffect, useState } from "react";
import UseLocalStorage from "../../public/UseLocalStorage";

function CustomHook() {
  // const [name, setName] = useState(localStorage.getItem("username") || ""); // Default empty string

  // useEffect(() => {
  //   localStorage.setItem("username", name);
  // }, [name]);

  const [name, setName] = UseLocalStorage("username", "");
  const [id, setId] = UseLocalStorage("id", "");

  return (
    <div>
      <h1>Let's learn Custom Hooks in React!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name} // Controlled input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {name && name.trim() !== "" && <h2>Hello! {name} </h2>}
      <input
        type="number"
        placeholder="Enter your id"
        value={id} // Controlled input
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      {id && <h3> User id: {id}</h3>}
    </div>
  );
}

export default CustomHook;
