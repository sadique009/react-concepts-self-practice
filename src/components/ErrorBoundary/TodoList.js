import React from "react";
// import ToDoApp from "./ToDoApp";

function TodoList({ todos, onTodoChange, onTodoDelete }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} onChange={onTodoChange} onDelete={onTodoDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Todo({ todo, onChange, onDelete }) {
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.id}-done`}
        id={`$todo.id}-done`}
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>x</button>
    </>
  );
}

export default TodoList;
