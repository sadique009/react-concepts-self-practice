// lec-22- useReducer with useContext.
// revised 1,

import React, { useReducer } from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import DataFetchingOne from "./DataFetchingOne";
import DataFetchingTwo from "./DataFetchingTwo";
import ComponentD from "./ComponentD";
import ComponentF from "./ComponentF";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function Hero() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* {count} */}
        {/* <ComponentA />
        <ComponentD />
        <ComponentF /> */}
        {/* <DataFetchingOne /> */}
        <DataFetchingTwo />
      </div>
    </CountContext.Provider>
  );
}

export default Hero;
