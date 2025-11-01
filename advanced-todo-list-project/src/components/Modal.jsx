import React from "react";
import { X } from "lucide-react";

function Modal({
  id,
  inputItem,
  setInputItem,
  description,
  setDescription,
  updateTodos,
}) {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center">
      <div className="mt-10 flex-col gap-5 text-black">
        <button className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex-col gap-5 item-center mx-4">
          <h2 className="text-2xl font-bold">Please update your Todo!</h2>
          <input
            type="text"
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          />
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
            ></textarea>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => updateTodos(id)}
              className="flex-1 bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
