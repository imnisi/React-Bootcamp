import React from "react";
import { Link } from "react-router";
import App_center_icon from "../assets/App_center_icon.jpeg";
import App_header_icon from "../assets/App_header_icon.jpeg";

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl text-gray-900">
      {/* Hero Section */}
      <aside className="relative flex flex-col-reverse sm:flex-row items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 text-white shadow-2xl mx-4 sm:mx-10 mt-10">
        {/* Left Content */}
        <div className="relative z-10 p-10 sm:p-16 space-y-6 sm:w-1/2 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Download Now
            <span className="block text-3xl sm:text-4xl font-medium opacity-90">
              Get started with our app today!
            </span>
          </h2>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-700 font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg
              fill="currentColor"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Download Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative sm:w-1/2 flex justify-center items-center sm:p-10 p-6">
          <img
            src={App_header_icon}
            alt="App Icon"
            className="w-64 sm:w-80 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </aside>

      {/* Center Icon Section */}
      <div className="grid place-items-center mt-16 sm:mt-24">
        <img
          className="sm:w-80 w-48 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          src={App_center_icon}
          alt="App Icon"
        />
      </div>

      {/* Footer Text */}
      <h1 className="text-center text-2xl sm:text-5xl py-12 font-semibold text-gray-800">
        Your journey to excellence starts here!
      </h1>
    </div>
  );
}

export default Home;
