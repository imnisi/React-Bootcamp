import React from "react";
import { useReducer } from "react";

function UseReducerHook() {
  const initialState = { count: 0 };

  const reducerFunction = (state, action) => {
    console.log(action);
    if (action.type === "increase") return { count: state.count + 1 };
    if (action.type === "decrease") return { count: state.count - 1 };
    if (action.type === "input") return { count: action.payload };
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h1>Let's learn useReducer hook!</h1>
      <h2>Count: {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        Increase Count
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrease Count
      </button>
      <br />
      <input
        type="number"
        value={state.count}
        onChange={(e) => {
          dispatch({ type: "input", payload: Number(e.target.value) });
        }}
      />
    </div>
  );
}

export default UseReducerHook;
