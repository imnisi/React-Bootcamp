import React, { useRef } from "react";
import { X } from "lucide-react";
import TodoInput from "./TodoInput";

function Modal({
  id,
  inputItem,
  setInputItem,
  description,
  setDescription,
  updateTodos,
  onClose,
}) {
  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-2xl flex items-center justify-center"
      ref={modalRef}
      onClick={closeModal}
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-semibold">Update Todo</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
        <TodoInput
          inputItem={inputItem}
          setInputItem={setInputItem}
          description={description}
          setDescription={setDescription}
        />
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => updateTodos(id)}
            className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-sm"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-lg border border-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
