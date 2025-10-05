import React from "react";
import { useLoaderData } from "react-router";
// import { useEffect, useState } from "react";

function Github() {

  // Basic way: using useEffect and useState
  // Fetching data from GitHub API
  
  // https://api.github.com/users/imnisi
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/imnisi")
  //     .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  // A better optimized way: using Loader method in Routing for fetch data from API

  const data = useLoaderData();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-md w-full bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-8 text-center transition-all duration-300 hover:shadow-2xl">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={data.avatar_url}
            alt="Github profile"
            className="w-40 h-40 rounded-full border-4 border-orange-500 shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Github Info */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {data.name || "No Username Found"}
        </h1>
        <p className="text-orange-600 mb-6">@{data.login}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-50 rounded-xl py-3 shadow-sm">
            <p className="text-lg font-semibold text-orange-600">
              {data.followers}
            </p>
            <p className="text-gray-600 text-sm">Followers</p>
          </div>
          <div className="bg-orange-50 rounded-xl py-3 shadow-sm">
            <p className="text-lg font-semibold text-orange-600">
              {data.following}
            </p>
            <p className="text-gray-600 text-sm">Following</p>
          </div>
        </div>

        <div className="text-gray-700 mb-6">
          <p className="text-sm italic">
            {data.bio || "No bio available for this user."}
          </p>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-3 rounded-xl bg-orange-700 text-white font-semibold hover:bg-orange-700 transition-all duration-300 shadow-md"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Github;
