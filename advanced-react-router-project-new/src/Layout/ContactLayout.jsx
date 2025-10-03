import React from "react";
import { Outlet } from "react-router";
import { Contact } from "../../public/index.js";

function ContactLayout() {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
}

export default ContactLayout;
