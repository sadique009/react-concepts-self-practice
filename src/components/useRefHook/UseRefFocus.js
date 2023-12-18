// web dev simplified lecs
// revised 1,

import React, { useEffect, useState, useRef } from "react";
// useRef is most commonly used to reference input elements.
// it can also be used to get the previous value of the state.
/// useRef is used along with useEffect.

const UseRefFocus = () => {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const inputRef = useRef(0);

  // function focus() {
  //   inputRef.current.focus();
  // }

  useEffect(() => {
    inputRef.current = inputRef.current + 1;
  });

  return (
    <div>
      <>
        <p>* web dev simplified lecs. *</p>
        <input
          // ref={inputRef}
          /* each element inside of our html doc has a ref attribute. */
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <div>my name is "{name}"</div>
        <div>i rendered {inputRef.current} times.</div>
        {/* <button onClick={focus}>focus</button> */}
      </>
    </div>
  );
};

export default UseRefFocus;
