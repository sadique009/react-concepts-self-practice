import React, { useContext, createContext, useState } from "react";
// context can be thought of as a data layer which allows us to share data across different components,
// ireespective of where they are positioned within the app.
const UserContext = createContext(null); // on UserContext object, we can access the "provider" component.
const ThemeContext = createContext("dark");
function Foo() {
  return (
    <>
      {" "}
      <h1>this is foo</h1>
      <Bar />
    </>
  );
}
// we can have multiple contexts within our app having different values.
// whichever context is the nearest ancestor for your component, it will read the context value from that provider only.
function Bar({ user }) {
  return (
    <>
      <UserContext.Provider value={"joe"}>
        <h2>this is bar</h2>
        <Baz user={user} />
      </UserContext.Provider>
    </>
  );
}
function Baz() {
  const username = useContext(UserContext);
  const theme = useContext(ThemeContext);
  // we use "useContext" to use the context. we pass it the context which we want to get the value from.
  return (
    <>
      <h3
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        this is baz, wassup {username}
      </h3>
    </>
  );
}
function ContextEx() {
  const [theme, setTheme] = useState("light");
  const username = "msn";
  return (
    <div>
        {/* whenever the value of the context changes, the component which is using that context is re-rendered. */}
      parent app says {username}
      <UserContext.Provider value={username}>
        <ThemeContext.Provider value={theme}>
          <Foo user={username} />
        </ThemeContext.Provider>
        {/* .Provider is available as a special component. */}
        {/* whichever component the "provider" is wrapping, all of those components will have access to the context which is available. */}
      </UserContext.Provider>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        toggle theme
      </button>
    </div>
  );
}

export default ContextEx;
