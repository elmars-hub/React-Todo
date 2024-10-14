import React from "react";
import { FaPenSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todo, deleteTask, toggleComplete, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>

      <div>
        <FaPenSquare className="edit-icon" onClick={() => editTodo(todo.id)} />
        <FaTrash
          className="fa-trash delete-icon"
          onClick={() => deleteTask(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
