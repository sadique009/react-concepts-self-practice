import React from "react";
import { ACTIONS } from "./AltUseReducer";

const AltTodo = ({ indTodo, dispatch }) => {
  return (
    <div>
      <span style={{ color: indTodo.complete ? "#AAA" : "#000" }}>
        {indTodo.names}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: indTodo.id } })
        }
      >
        TOGGLE
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: indTodo.id } })
        }
      >
        DELETE
      </button>
    </div>
  );
};

export default AltTodo;
