import React, { useReducer } from "react";
import reducer from "./reducer";

// we can make use of "useReducer" wherever we are using "useState" hook.
function CounterReducer() {
  const [count, dispatch] = useReducer(
    reducer /* this is the reference of the reducer fn */,
    0 /* this is the initial value of the state */
  ); // it accepts max 3 parameters.
  // "dispatch" is a fn.
  // whenever an action is dispatched, the reducer fn will get called and based on the action that is happening,
  // we can modify our state, and once it is modified, the component which is using this state, it will be re-rendered.
  function increaseCounter() {
    dispatch(
      /* this "dispatch" here calls the reducer fn */ "increase" /* this is the action */
    );
    // the state will be the current value of count.
  }

  function decreaseCounter() {
    dispatch("decrease");
  }

  return (
    <div>
      counter reducer
      <button onClick={increaseCounter}>+</button>
      {count}
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
}

export default CounterReducer;
