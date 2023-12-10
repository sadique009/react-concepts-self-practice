// React.memo is a hoc that prevents a functional component from being re-rendered if its props or states do not change.
// it has nothing to do with hooks.

// useCallback is a hook that returns a memoized version of the callback fn that only changes if one of the dependencies has changed.
// useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary re-renders.

import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  // dealing with fns, we need to consider reference equality. even though 2 fns have the exact same behavior, it doesn't mean they are equal to each other.
  // so, it will be re-rendered because it's considered as a prop.

  // useCallback takes in 2 params.
  // below is an example of cached fn.
  const incrementAge = useCallback(() => {
    setAge(age + 1);
    // the fn depends on age here.
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>increment age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>increment salary</Button>
    </div>
  );
};

export default ParentComponent;
