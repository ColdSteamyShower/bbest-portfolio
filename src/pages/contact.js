import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { useForm } from "react-hook-form";
import { personalInfo } from "../data/portfolio-data";
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., send to an API endpoint)
    alert("Thank you for your message! I will get back to you shortly.");
  };

  return (
    <Layout>
      <Seo title="Contact" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me using the form or through my contact information below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <FiMail className="text-blue-400 mr-4" size={20} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400">{personalInfo.email}</a>
              </div>
              <div className="flex items-center text-gray-300">
                <FiPhone className="text-blue-400 mr-4" size={20} />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-400">{personalInfo.phone}</a>
              </div>
              <div className="flex items-center text-gray-300">
                <FiLinkedin className="text-blue-400 mr-4" size={20} />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn Profile</a>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="text-blue-400 mr-4" size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:outline-none focus:border-blue-400"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                  className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:outline-none focus:border-blue-400"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:outline-none focus:border-blue-400"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ContactPage;
