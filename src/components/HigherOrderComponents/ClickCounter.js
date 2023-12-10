// lec 33- hoc(higher order component)- 1.
// lec 34- hoc- 2.
// lec 35- hoc- 3.

// when there is a need to share the common functionalities b/w components without repeating code, hoc's are used.
// it's a pattern where a fn takes a component as an argument and return a new component.
// adds additional data or functionality to the original component.
// new component thus created is called as enhanced component.

import React from "react";
import withCounter from "./withCounter";
const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>
        {props.name} clicked {props.count} times.
      </button>
    </div>
  );
};

export default withCounter(ClickCounter, 5);
