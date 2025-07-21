import React from 'react'
import { selected_projects } from '../db/db';
import { useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const PDetails = () => {
  const { id } = useParams();

  // نجيب المشروع اللي ليه نفس الـ id
  const project = selected_projects.find((project) => project.id === id);

  if (!project) {
    return <p className="text-white text-center mt-10">المشروع غير موجود</p>;
  }

  return (
    <div className='grid grid-cols-1 gap-4 max-w-[90%] mx-auto text-white mt-4 pb-8'>
      <div className='flex flex-col gap-4 text-white'>
        <Link 
        to="/" 
        onClick={() => console.log("clicked")}
        className='flex gap-2 items-center text-2xl md:text-xl text-white mb-10 relative z-50'>
        <FaArrowLeftLong /> back
        </Link>
        {project.details.map((details, index) => (
          <motion.div 
          className='grid grid-cols-1 gap-4'
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          >
            <div className='w-full flex gap-2 items-center'>
            <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-sm md:text-2xl text-white uppercase tracking-wider font-bold'>{details.title}</motion.p>
            <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-xs md:text-sm text-secondary font-bold w-24'>{details.link}</motion.p>
            </div>
            <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-sm md:text-xl uppercase tracking-wider text-[#d4d4d4] font-medium'>{details.year}</motion.p>
            <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-md md:text-xl  text-white font-bold'>{details.description}</motion.p>
            <div>
              <motion.img 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className='w-3/4 mx-auto'
              src={details.preview_images[0]} 
              alt={details.preview_images} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PDetails
