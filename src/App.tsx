import React, { useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { InputField } from "./components/inputField";
import { TodoList } from "./components/todoList";
import { Todo } from "./model";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  function handleAdd(event: React.FormEvent) {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo }]);
      setTodo("");
    }
    console.log(todos);
  }
  return (
    <div className="App">
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;
