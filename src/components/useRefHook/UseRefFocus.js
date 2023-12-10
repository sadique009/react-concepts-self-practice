import React, { useEffect, useState, useRef } from "react";
// useRef is most commonly used to reference input elements.
// it can also be used to get the previous value of the state.

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {/* each element inside of our html doc has a ref attribute. */}

        <div>my name is "{name}"</div>
        <div>i rendered {inputRef.current} times.</div>
        {/* <button onClick={focus}>focus</button> */}
      </>
    </div>
  );
};

export default UseRefFocus;
