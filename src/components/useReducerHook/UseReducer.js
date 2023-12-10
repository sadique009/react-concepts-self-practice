import React, { useState, useReducer } from "react";
const initialState = 5; // we can pass multiple values in here.
// alternate way to write the above: const initialState={count:0};

const reducerr = (currState, action) => {
  // this is the reducer fn.
  // reducer returns the new updated state.
  console.log(currState, action);
  // it takes two parameters, current state and action method.
  // this "currState" will have the current value of "statee" defined below.

  // if (action.types === "increment") {
  //   return currState + 1;
  // }
  // if (action.types === "decrement") {
  //   return currState - 1;
  // }
  // if (action.types === "initial") {
  //   return initialState;
  // }

  switch (action.types) {
    case "increment":
      return currState + 1;
      // alternate way to write the above: return {count: currState.count+1};
    case "decrement":
      return currState - 1;

    case "initial":
      return initialState;
    default:
      return null;
  }
  // "reducer" always returns a state.
};

function UseReducer() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducerr, initialState);
  // the "state" in above line will have the value of the "initialState" object.
  // it takes 3 parameters, a reducer fn, an initial state...
  // and a fn that can be used to calculate the initial value.
  // 3rd parameter is completely optional.

  // dispatch triggers the "action" method.
  // we call dispatch() in our code when we want to change the state.
  // we already have a reducer set up to do the legwork of changing the state.
  // now, we just need to be able to trigger how to change it.

  // const incr = () => {
  //   setCount(count + 1);
  // };
  // const decr = () => {
  //   setCount(count - 1);
  // };
  return (
    <>
    <p>
    {initialState}
    </p>
     
      <button onClick={() => dispatch({ types: "increment" })}>+</button>
      {/* dispatch fn has one object with property name "type", or any other name. */}
      {state}
      {/* the value of the "currState" will be stored above. */}
      <button onClick={() => dispatch({ types: "decrement" })}>-</button>
      <p>
        <button onClick={() => dispatch({ types: "initial" })}>0</button>
      </p>
    </>
  );
}

export default UseReducer;

// alternate way of writing above code.

// import React, { useState, useReducer } from "react";

// const reducerr = (currState, action) => {
//   console.log(currState, action);

//   if (action=== "increase") {
//     return currState + 1;
//   }
//   if (action=== "decrease") {
//     return currState - 1;
//   }
//   return currState; // "reducer" always returns a state.
// };
// function App() {

//   const [statee, dispatch] = useReducer(reducerr, 0);
//   function incr(){
//     dispatch("increase");
//   }
//   function decr(){
//     dispatch("decrease");
//   }

//   return (
//     <>
//       <button onClick={incr}>+</button>

//       {statee}
//       <button onClick={decr}>-</button>
//     </>
//   );
// }

// export default UseReducer;
