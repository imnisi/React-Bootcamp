import React from "react";

function TodoInput({
  label,
  inputItem,
  setInputItem,
  description,
  setDescription,
}) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <input
          type="text"
          placeholder="Type your todo"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
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
          rows="3"
          placeholder="Enter your description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
        ></textarea>
      </div>
    </>
  );
}

export default TodoInput;
