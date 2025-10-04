import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";

function Layout() {
  const navigation = useNavigation(); // it gives us the current navigation state like loading, idle, etc.

  return (
    <>
      <Navbar />

      {/* Spinning Loader Overlay */}
      {navigation.state === "loading" && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative">
            {/* Spinning Circle */}
            <div className="w-20 h-20 border-8 border-gray-200 border-t-indigo-600 border-r-purple-600 rounded-full animate-spin"></div>

            {/* Loading Text */}
            <p className="text-white font-semibold mt-4 text-center animate-pulse">
              Loading...
            </p>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Layout;
