// import React, {useReducer} from 'react'

// // we capitalize the below variable because it is a global non-changing variable.
// // and it is a convention to capitalize it.
// const ACTIONS={
// INCREMENT:"increment",
// DECREMENT:"decrement"
// }
// function reducer(currState, action){
//     if(action.type===ACTIONS.INCREMENT){
//         return {count:currState.count+1};
//     }
//     if(action.type===ACTIONS.DECREMENT){
//         return {count:currState.count-1};
//     }
// }
// const AltUseReducer = () => {
//     const [state, dispatch]=useReducer(reducer, {count:0})
//   return (
//     <div>
//       <button onClick={()=>dispatch({type:ACTIONS.INCREMENT})}>+</button>
//       {state.count}
//       <button onClick={()=>dispatch({type:ACTIONS.DECREMENT})}>-</button>
//     </div>
//   )
// }

// export default AltUseReducer

// understanding useReducer using todo app.
import React, { useState, useReducer } from "react";
import AltTodo from "./AltTodo";

// we capitalize the below variable because it is a global non-changing variable.
// and it is a convention to capitalize it.
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.names)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((indTodo) => {
        if (indTodo.id === action.payload.id) {
          return { ...indTodo, complete: !indTodo.complete };
        }
        return indTodo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((indTodo) => {
        return indTodo.id !== action.payload.id;
      });
    default:
      return todos;
  }
}

function newTodo(names) {
  return { id: Date.now(), names: names, complete: false };
}

const AltUseReducer = () => {
  const [names, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { names: names } });
    setName("");
  }

  console.log(todos);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        // onSubmit={
        //   ((e) => e.preventDefault(),
        //   //   separate multiple functions using comma
        //   dispatch({ type: ACTIONS.ADD_TODO, payload: { names: names } }),
        //   //   "payload" is an object which contains all the variable values...
        //   //    that we need in order to perform that "action".
        //   setName(""))
        // }
      >
        <input
          type="text"
          value={names}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      {todos.map((indTodo) => {
        return (
          <AltTodo key={indTodo.id} indTodo={indTodo} dispatch={dispatch} />
        );
      })}
    </>
  );
};

export default AltUseReducer;
