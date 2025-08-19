import React from "react";
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
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-lg text-gray-300">{personalInfo.bio}</p>
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
              <ul className="list-disc list-inside text-gray-300">
                {technicalSkills.languages.map((lang, index) => <li key={index}>{lang}</li>)}
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Frameworks & Libraries</h3>
              <ul className="list-disc list-inside text-gray-300">
                {technicalSkills.frameworks.map((fw, index) => <li key={index}>{fw}</li>)}
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Tools & Platforms</h3>
              <ul className="list-disc list-inside text-gray-300">
                {technicalSkills.tools.map((tool, index) => <li key={index}>{tool}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default BioPage;
