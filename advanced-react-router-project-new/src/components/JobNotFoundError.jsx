import React from "react";
import { useNavigate } from "react-router";

function JobNotFoundError() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 !mb-4">
          Job Not Found!
        </h2>
        <button
          onClick={() => navigate("/jobs")}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white !px-6 !py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
}

export default JobNotFoundError;
