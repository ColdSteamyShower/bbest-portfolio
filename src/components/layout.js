import React from "react";
import Sidebar from "./Sidebar";
import "../styles/dark-theme.css";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
