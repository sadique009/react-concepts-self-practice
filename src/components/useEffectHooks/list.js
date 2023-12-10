import React, { useState } from "react";

function List() {
  const getItems = () => {
    console.log("%c getItems called", "color:royalblue"); // %c is used to change the color of logs.
    return Array(30).fill(0);
  };
  //   console.log(getItems());
  const [items, setItems] = useState(getItems /* this is the initializer fn syntax, i.e, we are passing fn reference here. */);
  // we can set the initial values of state as fn also.
  // we can also write the above state as follows:
//   const [items, setItems] = useState(()=>getItems());

//   const [items, setItems] = useState(getItems()); // this will trigger re-render whenever "setItems" value changes.
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{index + 1}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, 0])}>add item</button>
    </div>
  );
}

export default List;
