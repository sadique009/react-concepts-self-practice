import React, { useState } from "react";
import useCounter from "./useCounter";

const Counter1 = () => {
  const [count, incr, decr, reset] = useCounter(0, 2);
  return (
    <div>
      <h2>count={count}</h2>
      <button onClick={incr}>increment</button>
      <button onClick={decr}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter1;
