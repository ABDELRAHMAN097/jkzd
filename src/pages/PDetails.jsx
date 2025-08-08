import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { selected_projects } from '../db/db';
import { FaArrowLeftLong, FaGithub } from 'react-icons/fa6';
import { AiFillLike } from "react-icons/ai";
import { IoStarSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

const PDetails = () => {
  const { id } = useParams();
  const project = selected_projects.find(p => p.id === id);
  if (!project) return <p className="text-center text-white">Project not found.</p>;
 
 // eslint-disable-next-line react-hooks/rules-of-hooks
 useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="max-w-6xl mx-auto px-4 text-white">
      <Link to="/projects" className="text-secondary flex items-center gap-2 my-6 relative z-50">
        <FaArrowLeftLong /> Back
      </Link>

      {project.details.map((details, index) => (
        <div key={index} className="mb-16">
          <div className='flex items-start gap-2'>
          <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-xl md:text-2xl uppercase"
          style={{ fontFamily: 'var(--font-family-Anton)' }}
          >
            {details.title}
          </motion.h1>
          <Link to={details.githupLink} target="_blank" rel="noopener noreferrer" className="text-xl text-secondary flex items-center gap-2">
              <FaGithub />
          </Link>
          </div>
          <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-gray-400">{details.year}</motion.p>
          <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-4 text-xs md:text-xl">{details.description}</motion.p>

          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">🧰 Tech Stack:</h2>
            <ul className="flex flex-wrap gap-2">
              {details.tech_stack?.map((tech, i) => (
                <li key={i} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">🧩 Key Features:</h2>
            <ul className="">
              {details.key_features?.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">👨‍💻 Role: {details.role?.position}</h2>
            <ul className="">
              {details.role?.responsibilities?.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Footer Stats:</h2>
            <ul className="flex items-center gap-2">
              <li className="flex items-center gap-2"><IoStarSharp className='text-secondary' />{details.footer_stats?.stars}</li>
              <li className="flex items-center gap-2"><AiFillLike  className='text-secondary' />{details.footer_stats?.likes}</li>
            </ul>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {details.preview_images?.map((img, i) => (
              <img key={i} src={img} alt={`Preview ${i}`} className="rounded-lg shadow" />
            ))}
          </motion.div>

            {
              details.link === "json-server" ? (
                <Link to={details.githupLink} target="_blank" rel="noopener noreferrer" className="mt-8 text-secondary flex items-center gap-2">using json-server <FaGithub  /></Link>
              ) : (
                <Link
                to={details.link || project.link}
                target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-secondary underline"
          >
            🌐 Visit Live Project
          </Link>
              )
            }
        </div>
      ))}
    </div>
  );
};

export default PDetails;
