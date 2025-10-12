import React from "react";
import { useReducer } from "react";

function UseReducerHook() {
  const initialState = { count: 0 };

  const reducerFunction = (state, action) => {
    if (action.type === "increase") return { count: state.count + 1 };
    if (action.type === "decrease") return { count: state.count - 1 };
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h1>Let's learn useReducer hook!</h1>
      <h2>Count: {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ state, type: "increase" });
        }}
      >
        Increase Count
      </button>
      <button onClick={() => dispatch({ state, type: "decrease" })}>
        Decrease Count
      </button>
    </div>
  );
}

export default UseReducerHook;
