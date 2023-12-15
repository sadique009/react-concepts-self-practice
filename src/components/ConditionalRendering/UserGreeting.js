// lec-16- conditional rendering.

// it can be of 4 varieties,
// if/else
// element variables
// ternary conditional operator
// short circuit operator

import React, { useState } from "react";

const UserGreeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // if else approach.
  // if else statements DON'T work inside the jsx.
  // this is because jsx is just a syntactic sugar for fn calls and object construction.

  //   if (isLoggedIn) {
  //     return <div>welcome msn</div>;
  //   } else {
  //     return <div>welcome guest</div>;
  //   }

  // element variable approach.
  // here msg is the variable which stores the element to be rendered.

  //   let message;
  //   if (isLoggedIn) {
  //     message = <div>welcome msn</div>;
  //   } else {
  //     message = <div>welcome guest</div>;
  //   }
  //   return <div>{message}</div>;

  // ternary operator approach.

  //   return isLoggedIn ? <div>welcome msn</div> : <div>welcome guest</div>;

  // short circuit operator approach.
  // it is just a specific case of ternary operator approach.

  // if lhs (isLoggedIn) condition is true, expr after && is evaluated.
  isLoggedIn && <div>welcome msn</div>;
};

export default UserGreeting;
