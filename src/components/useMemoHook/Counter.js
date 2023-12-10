// the basic difference b/w useCallback and useMemo is that useCallback caches the provided fn instance itself whereas useMemo invokes the provided fn and caches its result.
// cache a fn-  useCallback
// cache the result of an invoked fn- useMemo

import React, { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // useMemo takes in 2 params. returns a cached value.
  const isEven = useMemo(() => {
    // to slow down the rate of execution of our program, we're doing this.
    // this will make execution of counterTwo also slow. This is because every time the state updates, the component re-renders.
    // to prevent this, we use useMemo hook.
    // useMemo is a hook that will only recompute the cached value when one of the dependencies has changed.
    // this optimizes the app and prevents expensive calculations on every render.
    // very similar to useCallback hook.
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>count one {counterOne}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>

      <button onClick={incrementTwo}>count two {counterTwo}</button>
    </div>
  );
};

export default Counter;
