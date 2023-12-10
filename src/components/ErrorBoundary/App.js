import { Component, useState } from "react";
import ContextEx from "./ContextEx";
import CounterReducer from "./CounterReducer";
import ToDoApp from "./ToDoApp";

// in order to create error boundaries, we have to use class based components.
// since, it is yet not possible to achieve using functional components.

// each react component, whether functional or class-based, has a {prop} property called as "children".

// instead of writing our own error boundaries, we can also make use of "react error boundary" package from npm.
class ErrorBoundary extends Component {
  state = { err: null };
  static getDerivedStateFromError /* this is a spacial method available */(
    err
  ) {
    return { err };
  }
  render() {
    const { err } = this.state;
    if (err) {
      return <this.props.FallbackComponent err={err} />;
    }
    return this.props.children;
  }
}

// fallback component for our error boundary.
// this will handle the error.
function FallbackComponent({ err }) {
  return (
    <div>
      <p>something went wrong.</p>
      <pre>{err.message}</pre>
    </div>
  );
}

function AppLevelFallbackComponent({ err }) {
  return (
    <div>
      <p>something went wrong at app level.</p>
      <pre>{err.message}</pre>
    </div>
  );
}

function Breaker() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => {
      if (prev > 2) {
        throw new Error("boom 💕");
      }
      return prev + 1;
    });
  }
  return <button onClick={handleClick}>{count}</button>;
}

function AnotherComponent() {
  return <h1>component for displaying some other info</h1>;
}

function App() {
  return (
    // <ErrorBoundary FallbackComponent={AppLevelFallbackComponent}>
    <div className="App">
      {/* <ErrorBoundary FallbackComponent={FallbackComponent}> */}
        {/* we can have separate error boundaries for each component or for all the components comnbined.  */}
        {/* <Breaker /> */}
      {/* </ErrorBoundary> */}
      {/* <CounterReducer/> */}
      <ToDoApp />
      {/* <AnotherComponent /> */}
      {/* <ContextEx/> */}
    </div>
    //   </ErrorBoundary>
  );
}

export default App;
