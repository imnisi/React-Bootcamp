import React from "react";
import React_logo from "../assets/React_logo.png";

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={React_logo}
            alt="React Logo"
            className="w-64 sm:w-80 lg:w-96 hover:scale-105 transition-transform duration-500 drop-shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Building Modern UIs with{" "}
            <span className="text-orange-700">React</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            React development is powered by passionate engineers who focus on
            creating seamless, dynamic, and high-performing web experiences. It
            enables developers to craft modular, efficient, and scalable user
            interfaces for modern web applications.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Our mission is to make front-end development elegant and powerful —
            merging creativity, performance, and maintainability into every
            React project.
          </p>

          <div className="pt-4">
            <button className="px-6 py-3 bg-orange-700 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-md cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
