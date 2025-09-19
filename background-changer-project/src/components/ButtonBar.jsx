import React, { useState } from "react";

function ButtonBar() {
  const [color, setColor] = useState("");

  return (
    <div
      className="min-h-screen flex items-end justify-center pb-8 bg-green-500"
      style={{ backgroundColor: color }}
    >
      <div
        id="main-parent"
        className="flex flex-wrap gap-3 p-4 bg-orange-500 rounded-3xl shadow-lg"
      >
        <button
          className="px-10 py-1.5 rounded-full font-medium text-white bg-red-500 hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="px-10 py-1.5 rounded-full font-medium text-white bg-green-500 hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-white bg-yellow-600 hover:bg-yellow-700 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("olive");
          }}
        >
          Olive
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-white bg-gray-500 hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("gray");
          }}
        >
          Gray
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-black bg-yellow-400 hover:bg-yellow-500 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-black bg-pink-400 hover:bg-pink-500 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("pink");
          }}
        >
          Pink
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-white bg-purple-500 hover:bg-purple-600 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("purple");
          }}
        >
          Purple
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-black bg-purple-200 hover:bg-purple-300 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("lavender");
          }}
        >
          Lavender
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-black bg-white hover:bg-gray-100 border-2 border-gray-300 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("white");
          }}
        >
          White
        </button>
        <button
          className="px-10 py-1.5 rounded-full font-medium text-white bg-black hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
          onClick={function () {
            setColor("black");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}
export default ButtonBar;
