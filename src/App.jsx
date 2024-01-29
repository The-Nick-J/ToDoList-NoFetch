import React, { useState } from "react";
import "./App.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";


const App = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Tareas:</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
