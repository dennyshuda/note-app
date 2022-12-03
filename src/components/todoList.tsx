import React from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoList({ todos, setTodos }: Props) {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>
  );
}
