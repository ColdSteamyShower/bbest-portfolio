import React from "react";
import { Link } from "gatsby";
import { personalInfo, navigationItems } from "../data/portfolio-data";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 h-screen p-8 flex flex-col justify-between border-r border-gray-800 fixed">
      <div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-400">{personalInfo.name}</h1>
          <p className="text-lg text-gray-400">{personalInfo.title}</p>
        </div>
        <nav>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id} className="mb-4">
                <Link
                  to={item.path}
                  className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  activeClassName="text-blue-400 font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
