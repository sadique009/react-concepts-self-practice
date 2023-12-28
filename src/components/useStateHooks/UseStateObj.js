// hooks lec-4- useState with object.
// revised 1,

import React, { useState } from "react";

const UseStateObj = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        {/* here we encounter one problem, when we try to enter 2nd input value, the 1st input value is removed from the state,
              this is because useState hook does not automatically merge and update the object, whereas setState of class component does that.
              we need to do it manually using spread operator.*/}
        <h2>your first name is : {name.firstName}</h2>
        <h2>your last name is : {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
};

export default UseStateObj;
