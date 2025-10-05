import React from "react";
import { useState } from "react";

function UseStateHook() {
  //   const [brand, setBrand] = useState("Ferrari");
  //   const [model, setModel] = useState("Roma");
  //   const [year, setYear] = useState("2023");
  //   const [color, setColor] = useState("Red");

  // In the above case, we have declared multiple state variables, so instead of creating multiple state variables
  // we can create a state object

  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "Red",
  });

  return (
    <>
      <h1>Understanding useState Hook!</h1>
      <h2>My {car.brand}</h2>
      <p>
        <b>
          It is a {car.color} {car.model} from {car.year}
        </b>
      </p>
      <button
        // onClick={() => {
        //   setCar((prevCar) => ({
        //     ...prevCar,
        //     color: "Blue",
        //   }));
        // }}

        // More Simpler version:

        onClick={() => setCar({ ...car, color: "Blue" })}
      >
        Change Color
      </button>
    </>
  );
}

export default UseStateHook;
