import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    addTodo(description);

    setDescription("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="What's the job for today..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="todo-btn">Add Task</button>
    </form>
  );
};

export default TodoForm;
