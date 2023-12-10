import React, { useState } from "react";

function AddToDo({ onAddTodo /* this is a callback fn which we are receiving as a prop.*/ }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(text);
          setText(""); // once the todo is added, we set "setText" to empty.
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddToDo;
