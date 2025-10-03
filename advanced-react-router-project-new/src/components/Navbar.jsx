import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Let's Learn
          </span>
        </div>

        {/* Centered Navigation Menu with Gradient Background */}
        <nav
          className="flex-1 max-w-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl rounded-full flex items-center justify-center"
          style={{ height: "33px" }}
        >
          <ul className="flex justify-around font-semibold text-base w-full px-8">
            <li className="flex items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200 transition duration-200"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="flex items-center">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200 transition duration-200"
                }
              >
                Products
              </NavLink>
            </li>

            <li className="flex items-center">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200 transition duration-200"
                }
              >
                About
              </NavLink>
            </li>

            <li className="flex items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200 transition duration-200"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Separate Button with Gradient */}
        <button
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition duration-300 whitespace-nowrap flex items-center justify-center"
          style={{ height: "33px", width: "135px" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
