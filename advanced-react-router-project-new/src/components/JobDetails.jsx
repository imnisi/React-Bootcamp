import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router";

function JobDetails() {
  const { jobId } = useParams();
  const jobs = useLoaderData();
  const navigate = useNavigate();

  // Find the job that matches the jobId
  const job = jobs.find((job) => job.id === Number(jobId));

  // If job not found
  if (!job) {
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

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8"
      style={{ minHeight: "92vh" }}
    >
      <div className="!max-w-4xl !mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/jobs")}
          className="!mb-6 text-indigo-600 font-semibold hover:text-purple-600 transition flex items-center gap-2 cursor-pointer"
        >
          ← Back to Jobs
        </button>

        {/* Job Details Card */}
        <div className="bg-white rounded-3xl shadow-2xl !p-10 border border-gray-100">
          {/* Job Title */}
          <h1 className="text-4xl font-extrabold text-gray-800 !mb-6">
            {job.title}
          </h1>

          {/* Salary Section */}
          <div className="bg-green-50 border-l-4 border-green-500 !p-2 rounded-lg !mb-5">
            <p className="text-sm text-green-700 font-semibold !mb-1">Salary</p>
            <p className="text-md font-bold text-green-600">{job.salary}</p>
          </div>

          {/* Location Section */}
          <div className="bg-indigo-50 border-l-4 border-indigo-500 !p-2 rounded-lg !mb-5">
            <p className="text-sm text-indigo-700 font-semibold !mb-1">
              Location
            </p>
            <p className="text-md font-bold text-indigo-600">{job.location}</p>
          </div>

          {/* Details Section */}
          <div className="!mb-8">
            <h3 className="text-md font-bold text-gray-800 !mb-4">
              Job Details
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {job.jobDetails}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold !py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
