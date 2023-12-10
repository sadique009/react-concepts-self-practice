import React from "react";
import withCounter from "./withCounter";
const HoverCounter = (props) => {
  return (
    <div>
      <h2 onMouseOver={props.incrementCount}>hovered {props.count} times.</h2>
    </div>
  );
};
// here we are exporting the hoc itself.
export default withCounter(HoverCounter, 3);
