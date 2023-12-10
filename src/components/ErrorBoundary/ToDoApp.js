import React, { useState } from "react";
import AddToDo from "./AddToDo";
import TodoList from "./TodoList";

let nextId = 4;
const initialTodos = [
  { id: 1, text: "learn javascript", done: true },
  { id: 2, text: "build spotify clone", done: false },
  { id: 3, text: "learn react", done: false },
];

function ToDoApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        // this is the list of new todos that we are passing to the list of existing todos.
        id: nextId++,
        text,
        done: false,
      },
    ]);
  }

  function handleTodoChange(updatedTodo) {
    setTodos(
      todos.map((existingTodo) => {
        if (existingTodo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return existingTodo;
        }
      })
    );
  }

  function handleTodoDelete(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }
  return (
    <div>
      <h2>todos</h2>
      <AddToDo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos /* this "todos" is coming from the above state. */}
        onTodoChange={handleTodoChange}
        onTodoDelete={handleTodoDelete}
      />
    </div>
  );
}

export default ToDoApp;
