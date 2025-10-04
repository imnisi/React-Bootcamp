import React from "react";
import { useLoaderData, useNavigate } from "react-router";

function Jobs() {
  const jobs = useLoaderData();
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 !p-8"
      style={{ minHeight: "92vh" }}
    >
      <div className="max-w-7xl !mx-auto">
        {/* Header Section */}
        <div className="text-center !mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent !mb-4">
            Available Jobs
          </h1>
          <p className="text-gray-600 text-lg">
            Explore exciting career opportunities
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 !p-6 border border-gray-100 hover:scale-105 hover:border-purple-200"
            >
              {/* Job Title */}
              <h2 className="text-2xl font-bold text-gray-800 !mb-3">
                {job.title}
              </h2>

              {/* Salary */}
              <div className="flex items-center gap-2 !mb-2">
                <span className="text-green-600 font-semibold text-lg">
                  💰 {job.salary}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 !mb-4">
                <span className="text-indigo-600 font-medium">
                  📍 {job.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed !mb-6">
                {job.description}
              </p>

              {/* Apply Button */}
              <button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold !py-3 rounded-full shadow-md hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition duration-300 cursor-pointer"
                onClick={() => {
                  navigate(`jobDetails/${job.id}`);
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
