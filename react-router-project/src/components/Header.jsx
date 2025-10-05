import React from "react";
import { Link, NavLink } from "react-router";
import Tech_logo from "../assets/Tech_logo.png";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Tech_logo} alt="Logo" className="h-10 w-auto" />
          <span className="font-semibold text-gray-900 text-lg tracking-tight">
            TechBrand
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          {["Home", "About", "Contact", "Github"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 hover:text-orange-700 ${
                    isActive ? "text-orange-700 font-semibold" : ""
                  }`
                }
              >
                {item}
                <span
                  className={({ isActive }) =>
                    `absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`
                  }
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="#"
            className="text-gray-700 hover:text-orange-700 transition-colors font-medium"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="px-5 py-2.5 rounded-full bg-orange-700 text-white hover:bg-orange-800 font-medium transition-transform duration-300 hover:scale-105 shadow-sm"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
