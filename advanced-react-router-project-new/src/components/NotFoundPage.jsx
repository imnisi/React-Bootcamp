import React from "react";
import { useNavigate } from "react-router";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6"
      style={{ minHeight: "92vh" }}
    >
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl !p-12 max-w-2xl text-center border border-white/30">
        {/* 404 Number */}
        <h1 className="text-9xl font-extrabold text-black drop-shadow-lg !mb-4">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-black !mb-6 drop-shadow-md">
          Page Not Found!
        </h2>

        {/* Description */}
        <p className="text-lg text-black/90 leading-relaxed !mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white !px-8 !py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-600 hover:to-blue-700 transition duration-300 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
