import { useState } from "react";

export function Form() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitNote(event: any) {
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          cols={20}
          rows={5}
          placeholder="add your notes here"
          value={note.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}
