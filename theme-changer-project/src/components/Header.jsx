import React from "react";
import { Link, NavLink } from "react-router";
import Contact from "./Contact";
import Github from "./Github";
import About from "./About";

function Header() {
  return (
    <div>
      <h1 style={{ background: "Yellow", color: "red" }}>Header</h1>
      <ul
        style={{
          display: "flex",
          flexGrow: 1,
          gap: 30,
          listStyleType: "none",
          justifyContent: "center",
        }}
      >
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "inherit",
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="github"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "inherit",
            })}
          >
            Github
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "inherit",
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
