import React from "react";
import { Link } from "react-router";
import Tech_logo from "../assets/Tech_logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={Tech_logo} alt="Logo" className="h-10 w-auto" />
              <span className="font-semibold text-gray-800 text-lg">
                TechBrand
              </span>
            </Link>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Simplifying technology through modern design and clean UI.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Resources
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-700 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Follow us
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a
                  href="https://github.com/imnisi"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-700 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-700 transition-colors"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-700 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-700 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
          <span>
            © 2025{" "}
            <a
              href="https://nishantkumar.com/"
              className="hover:text-orange-700 transition-colors"
            >
              nishantkumar
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 sm:mt-0">
            {["github", "discord", "twitter"].map((icon) => (
              <Link
                key={icon}
                to="#"
                className="hover:text-orange-700 transition-transform hover:scale-110"
              >
                <i className={`fa-brands fa-${icon} text-lg`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
