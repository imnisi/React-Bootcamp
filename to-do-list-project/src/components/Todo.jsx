import React, { useRef, useState } from "react";
import "../CSS/Todo.css";
import removePng from "../assets/remove.png";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputItem, setInputItem] = useState("");
  // const inputRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState({});

  const addTodos = () => {
    if (!inputItem.trim()) return;
    // setTodos([...todos, inputRef.current.value]);
    const newTodo = {
      id: Date.now(),
      text: inputItem,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputItem("");
  };

  const handleChecked = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const removeItems = (id) => {
    setTodos((prevItem) => prevItem.filter((item) => item.id !== id));
    setCheckedItems((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          type="text"
          value={inputItem}
          placeholder="Add Your Task"
          className="todo-input"
          // ref={inputRef}
          onChange={(e) => {
            setInputItem(e.target.value);
          }}
        />
        <div className="todo-add-btn" onClick={addTodos}>
          Add
        </div>
      </div>
      <div>
        {todos.map((item) => {
          {
            /* console.log("Item", item);
          console.log("Index", index); */
          }
          return (
            item && (
              <div className="todo-list" key={item.id}>
                <div>
                  <input
                    className="todos-items"
                    id={`todo-${item.id}`}
                    type="checkbox"
                    checked={!!checkedItems[item.id]}
                    onChange={() => handleChecked(item.id)}
                  />
                  <span
                    style={{
                      textDecoration: checkedItems[item.id]
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
                <div>
                  {checkedItems[item.id] && (
                    <img
                      className="remove-icon"
                      src={removePng}
                      alt="remove"
                      onClick={() => {
                        removeItems(item.id);
                      }}
                      style={{ cursor: "pointer", width: "70px" }}
                    />
                  )}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
