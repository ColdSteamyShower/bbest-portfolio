import React from "react";
import { Link } from "gatsby";
import { personalInfo, navigationItems } from "../data/portfolio-data";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-8 flex flex-col justify-between">
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
      <div className="text-center text-gray-400">
        <div className="flex justify-center space-x-4 mb-4">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400">
            <FiMail size={20} />
          </a>
          <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-400">
            <FiPhone size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FiLinkedin size={20} />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
