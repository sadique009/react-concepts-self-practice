import React from "react";

function PropDrilling() {
  const username = "msn";
  return (
    <>
      <div>parent app says hello {username}</div>
      <Foo username={username}/>
    </>
  );
}

// "Foo" is the child of "App" component.
function Foo({username}) {
  return (
    <>
      <h1>this is Foo {username}</h1>
      <Bar username={username}/>
    </>
  );
}

// Bar is the child of "Foo" component.
function Bar({username}) {
  return (
    <>
      <h2>this is bar</h2>
      <Baz username={username}/>
    </>
  );
}
// any no of independent components can be written inside the main component.
// "Baz" is the child of "Bar" component.
function Baz({username}) {
  return (
    <>
      <h3>this is baz and you are {username}</h3>
    </>
  );
}

export default PropDrilling;
