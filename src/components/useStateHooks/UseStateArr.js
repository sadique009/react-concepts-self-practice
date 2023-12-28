// hooks lec-5- useState with array.
// revised 1,

// in class components, the state is always an object.

import React, { useState } from "react";

const UseStateArr = () => {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([
      // makes a copy of all the items in the array.
      ...items,
      // appending the object to that copied array.
      // this way, we're not overriding the original array.
      { id: items.length, value: Math.floor(Math.random() * 10 + 1) },
    ]);
  };
  return (
    <div>
      <button onClick={handleClick}>add a number</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseStateArr;
