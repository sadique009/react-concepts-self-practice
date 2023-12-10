import React, { useState, createContext, useContext } from "react";

//we can create multiple contexts in our application.
// whenever the value of the context changes, the component which is using that context is re-rendered.
const UserContext = createContext(null);
const ThemeContext = createContext("dark");

function ContextHook() {
  const username = "msn";
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div>parent app says hello, {username}</div>
      <UserContext.Provider value={username}>
        <ThemeContext.Provider value={theme}>
          <Foo username={username} />
        </ThemeContext.Provider>
      </UserContext.Provider>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        toggle
      </button>
    </>
  );
}

// "Foo" is the child of "ContextHook" component.
function Foo({ username }) {
  return (
    <>
      <h1>this is Foo {username}</h1>
      <Bar username={username} />
    </>
  );
}

// Bar is the child of "Foo" component.
function Bar({ username }) {
  return (
    <>
      <UserContext.Provider value={"joe"}>
        <h2>this is bar {username}</h2>
        <Baz username={username} />
      </UserContext.Provider>
    </>
  );
}
// any no of independent components can be written inside the main component.
// "Baz" is the child of "Bar" component.
function Baz() {
  const username = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <>
      <h3
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        this is baz and you are, {username}
      </h3>
    </>
  );
}

export default ContextHook;
