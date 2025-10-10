import React from "react";
import { Outlet } from "react-router";
import Contact from "./Contact";

function ContactLayout() {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
}

export default ContactLayout;
