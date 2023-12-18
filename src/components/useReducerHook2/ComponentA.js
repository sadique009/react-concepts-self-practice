import React, { useContext } from "react";
import { CountContext } from "./Hero";

function ComponentA() {
  const countContext = useContext(CountContext);
  // now we have the context value so we can access the dispatch method.
  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
