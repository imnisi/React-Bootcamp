import React, { useEffect, useState } from "react";
import EditIcon from "../assets/edit icon.png";
import CrossIcon from "../assets/cross icon.png";
import Modal from "./Modal";
import TodoInput from "./TodoInput";
import TodoListIcon from "../assets/todo-list.svg?react";

function Todos() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todo-items")) || [];
  });

  const [inputItem, setInputItem] = useState("");
  const [description, setDescription] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addItem = () => {
    if (!inputItem.trim() || !description.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputItem,
      desc: description,
      isChecked: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputItem("");
    setDescription("");
  };

  const toggleCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const updateTodos = (id) => {
    // console.log("update", todos);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: inputItem, desc: description } : todo
      )
    );
    setInputItem("");
    setDescription("");
    setEditingTodoId(null);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight flex items-center justify-center gap-2.5">
          Todo List
          <TodoListIcon style={{ height: "35px", width: "35px" }} />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="space-y-4">
            <TodoInput
              label="Todo Title"
              inputItem={inputItem}
              setInputItem={setInputItem}
              description={description}
              setDescription={setDescription}
            />
            <div className="flex gap-3">
              <button
                onClick={addItem}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Add Todo
              </button>
            </div>
            <div className="space-y-3 max-h-[190px] overflow-y-auto pr-2">
              {todos.map((item, index) => (
                <div key={index}>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-indigo-500 p-4 flex items-start gap-3">
                    <input
                      type="checkbox"
                      onChange={() => toggleCheck(item.id)}
                      checked={item.isChecked}
                      className="mt-1.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-all duration-200 cursor-pointer"
                    />
                    <div className="ml-1 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold mb-1 truncate text-gray-800">
                          {item.text}
                        </h3>
                        <div className="flex items-center gap-2">
                          {item.isChecked && (
                            <>
                              <button
                                className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
                                onClick={() => {
                                  setInputItem(item.text);
                                  setDescription(item.desc);
                                  setEditingTodoId(item.id);
                                }}
                                aria-label={`Edit ${item.text}`}
                              >
                                <img
                                  src={EditIcon}
                                  alt="edit"
                                  className="h-4 w-4"
                                />
                              </button>
                              {editingTodoId === item.id && (
                                <Modal
                                  id={item.id}
                                  inputItem={inputItem}
                                  setInputItem={setInputItem}
                                  description={description}
                                  setDescription={setDescription}
                                  setEditingTodoId={setEditingTodoId}
                                  updateTodos={updateTodos}
                                  onClose={() => setEditingTodoId(null)}
                                />
                              )}
                              <button
                                className="p-2 rounded-md hover:bg-red-50 transition-colors duration-150"
                                onClick={() => deleteTodo(item.id)}
                                aria-label={`Delete ${item.text}`}
                              >
                                <img
                                  src={CrossIcon}
                                  alt="delete"
                                  className="h-4 w-4"
                                />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
