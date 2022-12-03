import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

export function InputField({ todo, setTodo, handleAdd }: Props) {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
