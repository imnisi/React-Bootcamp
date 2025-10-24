import React from "react";
import Navbar from "./components/Navbar";

function App() {
  let value = "Let's learn React";
  let array = ["user1", "user2", "user3", "user4", "user5"];
  let data = "Boy";

  let val = 0;

  const btnClickedMethod = () => {
    console.log("Button Clicked");
    val += 1;
    console.log(val);
  };
  return (
    <>
      <div>App</div>
      <Navbar />
      <h2> Variable Value: {value}</h2>
      <div>
        <h3>Array Values:</h3>
        <div className="array-items">
          {array.map((user, key) => {
            return <p key={key}>{user}</p>;
          })}
        </div>
      </div>
      <h2>Conditional Rendering Using Ternary Operator</h2>
      {data === "Boy" ? <h3>Boy</h3> : <h3>Girl</h3>}
      <h2>Using Short-Circuiting method</h2>
      {data === "Boy" && <h3>Boy</h3>}
      {data === "Girl" && <h3>Girl</h3>}
      <br />
      <div>
        <button onClick={btnClickedMethod}>Click Here</button>
      </div>
    </>
  );
}

export default App;
