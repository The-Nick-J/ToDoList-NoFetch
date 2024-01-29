import { TodoItem } from "./TodoItem";
import React from "react"
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No hay Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
          {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
