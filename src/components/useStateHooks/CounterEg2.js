// lec-3- useState with previous state.
// revised 1,

import React, { useState } from "react";

const CounterEg2 = () => {
  const initialCount = 0;
  // a state variable can be a string, number, boolean, object, array, null. 
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // this will increment the state value by 1 only.
      // setCount(count + 1);

      // when we have to update the state base don the previous state value,
      // we pass ina  fn to the state setter.
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      count:{count}
      <button onClick={() => setCount(count + 1)}>incr</button>
      <button onClick={() => setCount(count + 1)}>decr</button>
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={incrementFive}>incr by 5</button>
    </div>
  );
};

export default CounterEg2;
