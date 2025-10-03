import React from "react";
import { Outlet } from "react-router";

function JobsLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default JobsLayout;
