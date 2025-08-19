import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, subtitle, description, onClick, technologies }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
      <p className="text-md text-gray-400 mb-4">{subtitle}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      {technologies && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
