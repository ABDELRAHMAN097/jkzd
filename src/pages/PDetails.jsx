import React from 'react'
import { selected_projects } from '../db/db';
import { useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const PDetails = () => {
  const { id } = useParams();

  // نجيب المشروع اللي ليه نفس الـ id
  const project = selected_projects.find((project) => project.id === id);

  if (!project) {
    return <p className="text-white text-center mt-10">المشروع غير موجود</p>;
  }

  return (
    <div className='grid grid-cols-1 gap-4 max-w-[90%] mx-auto text-white mt-4'>
      <div className='flex flex-col gap-4 text-white'>
        <Link to="/projects" className='flex gap-2 items-center text-2xl md:text-xl text-white mb-10'>
        <FaArrowLeftLong /> back
        </Link>
        {project.details.map((details, index) => (
          <div key={index}>
            <p className='text-2xl md:text-3xl uppercase tracking-wider text-white font-bold'>{details.title}</p>
            <p className='text-2xl md:text-3xl uppercase tracking-wider text-white font-bold'>{details.link}</p>
            <p className='text-2xl md:text-3xl uppercase tracking-wider text-white font-bold'>{details.year}</p>
            <p className='text-2xl md:text-3xl uppercase tracking-wider text-white font-bold'>{details.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PDetails
