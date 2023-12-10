import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter rendered", count)

  const handleClick = () => {
    // each render is associated with a particular state.
    // the state remains the same throughout the lifecycle of the render.
    setCount(count + 1);
    setCount(count + 1); // here also, the initial state value remains the same, (i.e, 0)
    // the updates made to the state are only reflected in the next render cycle.
  };

  // updater fn. it uses callback fn as parameter.
  // here, the state is continuously changed.
  // this helps in performance optimization.
  const handleClick1 = () => {
    setCount((prevCount) => prevCount + 1); // 0+1=1
    setCount((prevCount) => prevCount + 1); // 1+1=2
    setCount((prevCount) => prevCount + 1); // 2+1=3
    console.log("after click", count)
  };
  return (
    <div>
      <button onClick={handleClick1}>count : {count} </button>
    </div>
  );
}

export default Counter;
