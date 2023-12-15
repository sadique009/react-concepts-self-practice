// lec-33- useInput custom hook.

// here our custom hook should encapsulate the controlled component behavior for an input element,
// i.e, binding the value and onChange attributes.

import React, { useState } from "react";
import useInput from "./useInput";

const UserForm = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form>
        <div>
          <label>first name</label>
          <input
            // when specifying as an attribute, we have to use spread operator.
            {...bindFirstName}
            // value={firstName}
            // onChange={(ev) => setFirstName(ev.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>last name</label>
          <input
            {...bindLastName}
            // value={lastName}
            // onChange={(ev) => setLastName(ev.target.value)}
            type="text"
          />
        </div>
        <button onClick={submitHandler}>submit</button>
      </form>
    </div>
  );
};

export default UserForm;
