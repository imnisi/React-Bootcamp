import React from "react";

function Products() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6"
      style={{ minHeight: "92vh" }}
    >
      <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-3xl !p-10 max-w-2xl text-center border border-white/30">
        <h1 className="text-5xl font-extrabold text-black drop-shadow-md !mb-6">
          Products Page
        </h1>{" "}
        <p className="text-lg text-gray-100 leading-relaxed tracking-wide">
          Explore our wide range of innovative products designed to meet your
          needs. From modern tools to user-friendly applications, we’ve got you
          covered.
        </p>
      </div>
    </div>
  );
}

export default Products;
