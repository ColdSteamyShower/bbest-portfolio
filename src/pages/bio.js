import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { personalInfo, education, technicalSkills } from "../data/portfolio-data";
import { motion } from "framer-motion";

const BioPage = () => {
  return (
    <Layout>
      <Seo title="BIO" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="mb-12 flex items-center">
          <div className="mr-8">
            <StaticImage src='../images/profile.jpg' alt="Profile" className="rounded-full w-32 h-32" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
            <p className="text-lg text-gray-300">{personalInfo.bio}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Education</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">{education.institution}</h3>
            <p className="text-md text-gray-400">{education.location}</p>
            <p className="text-lg text-gray-300 mt-2">{education.degree}</p>
            {education.minor && <p className="text-md text-gray-400">Minor in {education.minor}</p>}
            <p className="text-md text-gray-400">GPA: {education.gpa}</p>
            <p className="text-sm text-gray-500 mt-2">{education.duration}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((lang, index) => (
                  <span key={index} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((fw, index) => (
                  <span key={index} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {fw}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((tool, index) => (
                  <span key={index} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default BioPage;
