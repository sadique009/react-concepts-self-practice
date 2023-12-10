import React, { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decr = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

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
