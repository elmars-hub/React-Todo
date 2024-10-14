import React, { useState } from "react";

const TodoEditForm = ({ editTodo, task }) => {
  const [description, setDescription] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();

    editTodo(description, task.id);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Update Task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="todo-btn">Update</button>
    </form>
  );
};

export default TodoEditForm;
