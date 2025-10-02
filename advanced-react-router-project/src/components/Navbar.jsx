import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md px-12 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        <span className="text-xl font-bold">Let's Learn</span>
      </div>

      {/* Menu Section */}

      {/* Menu Section */}
      <ul className="flex gap-10 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                : "text-white"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                : "text-white"
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                : "text-white"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "!text-yellow-300 font-bold border-b-2 border-yellow-300"
                : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Button Section */}
      <button className="!mr-10 w-30 h-10 bg-white text-orange-600 font-semibold rounded-lg shadow-lg flex items-center justify-center hover:bg-blue-100 hover:scale-105 transition duration-200 cursor-pointer">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
