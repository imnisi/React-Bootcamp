import React from "react";
import { useRouteError, useNavigate } from "react-router";

function JobAPIError() {
  const error = useRouteError(); // Hook to access the error object
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 !p-6"
      style={{ minHeight: "92vh" }}
    >
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl !p-12 max-w-2xl text-center border border-white/30">
        {/* Error Icon */}
        <div className="text-6xl !mb-6">⚠️</div>

        {/* Error Title */}
        <h1 className="text-4xl font-extrabold text-red-600 drop-shadow-md !mb-4">
          An Error Occurred
        </h1>

        {/* Error Message */}
        <p className="text-lg text-gray-700 leading-relaxed !mb-8">
          {/* {error.message || "Something went wrong. Please try again later."} */}
          {"Could not fetch jobs data. Please try again later."}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white !px-8 !py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-600 hover:to-blue-700 transition duration-300 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>

          <button
            className="bg-white/30 backdrop-blur text-gray-700 !px-8 !py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/40 transition duration-300 border border-white/50 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobAPIError;
