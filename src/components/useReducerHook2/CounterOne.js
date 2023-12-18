// lec-19- useReducer Hook.
// revised 1, 

import React, { useReducer } from "react";

const initialState = 0;
// below is the reducer fn.
// action acts like an instruction to the reducer fn.
// convention is to use switch statement.

// state is a numeric value here and action is an string rather than an object with a type property, unlike redux.
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  // useReducer returns a pair of values.[count, dispatch]
  // a call to useReducer returns a pair of values:
  // the current value of the state-(count),
  // and a dispatch method capable of accepting an action to execute the code specified in the render fn.
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count = {count}</div>
      {/* the argument to the dispatch method is the action that is specified in the reducer fn. */}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
