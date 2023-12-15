// lec-32- useCounter custom hook.

// a custom hook is basically a js fn whose name starts with "use".
// a custom hook can also call other hooks if required.
// it is used to share common logic b/w components, an alternative to hoc and render props.

// custom hooks provide great flexibility.

import React, { useState } from "react";

const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);

  const incr = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decr = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(initialCount);
  };
  // we return it in form of array.
  return [count, incr, decr, reset];
};

export default useCounter;
