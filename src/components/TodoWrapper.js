import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const newTodos = [
      ...todos,
      { id: Date.now(), task: todo, completed: false, isEditing: false },
    ];

    setTodos(newTodos);

    console.log(newTodos);
  }

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <h1>EveryDay Todo</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
