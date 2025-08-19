import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { projects } from "../data/portfolio-data";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectsPage = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <Layout>
      <Seo title="Projects" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <Card
              key={proj.id}
              title={proj.name}
              subtitle=""
              description={proj.description}
              technologies={proj.technologies}
              onClick={() => openModal(proj)}
            />
          ))}
        </div>
      </motion.div>

      <Modal isOpen={!!modalData} onClose={closeModal} title={modalData?.name}>
        {modalData && (
          <div>
            <p className="text-gray-300 mb-4">{modalData.description}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              {modalData.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {modalData.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {modalData.url && (
              <a
                href={modalData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                View Project <FiExternalLink className="ml-2" />
              </a>
            )}
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default ProjectsPage;
