import React, { useState } from "react";

// hoc filename convention. fileName && NOT FileName.

// const UpdatedComponent = (OriginalComponent) => {
// 1. passing props to the hoc fn.
// 2. passing parameters to the hoc fn.
const withCounter = (WrappedComponent, incrementNumber) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      // wrong way: setCount(count + {incrementNumber});
      setCount(count + incrementNumber);
    };
    console.log(props.name);
    // this new component returns the wrapped component.(original component).
    // NEVER write console statements inside return.
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        // this (using spread operator) passes down the name prop to the component where we need it.
        {...props}
      />
    );
  };
  // hoc returns a new component.
  // don't write it like this, return <NewComponent/>;
  return NewComponent;
};

export default withCounter;
