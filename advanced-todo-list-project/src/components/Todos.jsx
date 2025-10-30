import React, { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todo-items")) || [];
  });

  const [inputItem, setInputItem] = useState("");
  const [description, setDescription] = useState("");

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

  const toggleCheck = (id) => {};

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          My Todo List
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Todo Title
              </label>
              <input
                type="text"
                placeholder="Type your todo"
                value={inputItem}
                onChange={(e) => setInputItem(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="5"
                placeholder="Enter your description here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
              ></textarea>
            </div>

            <div className="flex gap-3">
              <button
                onClick={addItem}
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
              >
                Add
              </button>
            </div>
            <div className="space-y-4">
              {todos.map((item, index) => (
                <>
                  <input type="checkbox" onClick={toggleCheck(item.id)} />
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition border-l-4 border-indigo-500"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.text}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
