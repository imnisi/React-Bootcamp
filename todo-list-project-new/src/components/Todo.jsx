import React, { useRef, useState } from "react";
import "../CSS/Todo.css";
import TodoListIcon from "../assets/todo-list.svg?react";
import { useEffect } from "react";
import TodoItems from "./TodoItems";

function Todo() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos-item")) || []; // This way of writing is called lazy initialization
  });
  const inputRef = useRef(null);

  // Get the highest ID from existing todos
  const getNextId = () => {
    const existingTodos = JSON.parse(localStorage.getItem("todos-item")) || [];
    return (
      existingTodos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1
    );
  };

  const addTodos = () => {
    if (!inputRef.current.value.trim()) return;
    const newTodo = {
      id: getNextId(),
      text: inputRef.current.value,
      display: "",
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value = "";
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, display: todo.display === "" ? "checked" : "" }
          : todo
      )
    );
  };

  const removeTodos = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("todos-item", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">
        To-Do List
        <TodoListIcon className="todo-list-icon" />
      </div>
      <div className="todo-add">
        <input
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
          ref={inputRef}
        />
        <div
          className="todo-add-btn"
          onClick={() => {
            addTodos();
          }}
        >
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          {
            /* console.log(item.display, "item"); */
          }
          return (
            <span
              key={index}
              style={{
                textDecoration:
                  item.display === "checked"
                    ? "line-through solid black"
                    : "none",
              }}
            >
              <TodoItems
                id={item.id}
                display={item.display}
                text={item.text}
                onToggle={toggleTodo}
                removeTodos={removeTodos}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
