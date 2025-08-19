import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { experiences } from "../data/portfolio-data";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (experience) => {
    setModalData(experience);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <Layout>
      <Seo title="Professional Experience" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              title={exp.company}
              subtitle={`${exp.position} (${exp.duration})`}
              description={exp.description[0]}
              technologies={exp.technologies}
              onClick={() => openModal(exp)}
            />
          ))}
        </div>
      </motion.div>

      <Modal isOpen={!!modalData} onClose={closeModal} title={modalData?.company}>
        {modalData && (
          <div>
            <h3 className="text-xl font-semibold text-white">{modalData.position}</h3>
            <p className="text-md text-gray-400 mb-4">{modalData.duration}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {modalData.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {modalData.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default ExperiencePage;
