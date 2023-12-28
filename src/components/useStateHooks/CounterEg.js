// devsnest lecs.
// revised- 1,

import React, { useState, useEffect } from "react";

function CounterEg() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  console.log("counter rendered", count);

  useEffect(() => {
    console.log("updating doc title");
    document.title = `you clicked ${count} times.`;
    // inside the dependency array, we can specify either props or state that we need to watch for.
    // if those props or states were to change, the effect would be executed.
  }, [count]);
  
  const handleClick = () => {
    // each render is associated with a particular state.
    // the state remains the same throughout the lifecycle of the render.
    setCount(count + 1);
    setCount(count + 1); // here also, the initial state value remains the same, (i.e, 0)
    // the updates made to the state are only reflected in the next render cycle.
  };

  // updater fn. it uses callback fn as parameter.
  // (prevCount is callback fn here.)
  // here, the state is continuously changed.
  // this helps in performance optimization.

  // const handleClick1 = () => {
  //   setCount((prevCount) => prevCount + 1); // 0+1=1
  //   setCount((prevCount) => prevCount + 1); // 1+1=2
  //   setCount((prevCount) => prevCount + 1); // 2+1=3
  //   console.log("after click", count);
  // };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <button onClick={handleClick1}>count : {count} </button> */}
      <button onClick={handleClick}>count : {count} </button>
    </div>
  );
}

export default CounterEg;
