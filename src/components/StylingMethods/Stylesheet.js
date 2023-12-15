// lec-20- styling and css basics.

// multiple ways can be used to style our react app, mainly:
// CSS Stylesheets
// Inline styling
// CSS Modules
// CSS in JS libraries e.g Styled components

// we can also conditionally apply className based on props or state of the component.

import React from "react";
import "./myStyles.css";

const Stylesheet = (props) => {
  let className = props.primary ? "primary" : "";
  // we can assign multiple classNames using template literals.
  return <div className={`${className} font-xl`}>stylesheet</div>;
};

export default Stylesheet;
