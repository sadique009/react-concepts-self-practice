import React, { useState, useEffect, useRef } from "react";
// unlike useState, useRef does not cause re-render when it changes.
// rest is same.
// here, we are using useRef to keep track of previous state values.
function UseRefBasic() {
  const [name, setName] = useState([]);

  const prevName = useRef(""); //it returns an object called "current".

  useEffect(() => {
    prevName.current= name;
    console.log("rendered");
  }, [name]);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>my current name is "{name}" whereas</div> 
      <div>
      my previous name used to be "{prevName.current}" 
      </div>
    </>
  );
}

export default UseRefBasic;
