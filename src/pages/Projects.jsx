import React, { useState } from 'react';
import Headers from '../components/Headers';
import { selected_projects } from '../db/db';
import { HiLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className='max-w-[90%] min-h-screen mx-auto py-8'>
      <Headers text="Projects" />
      <div className="w-full">
        {
          selected_projects.map((project, idx) => (
            <div
              onClick={() => setSelectedIndex(idx)}
              className={`group cursor-pointer border-b border-secondary flex gap-4 items-start py-4 ${
                selectedIndex === idx ? 'text-white' : 'text-[#adadad]'
              }`}
              key={idx}
            >
              <p className='text-[#adadad] text-sm md:text-xl'>{project.id}</p>
              <div className='flex flex-col gap-2 items-start'>
                {/* name & icon */}
                <div className='flex gap-2 items-center'>
                  <p className='text-2xl md:text-7xl uppercase tracking-wider'>{project.p_name}</p>
                  {/* icon */}
                  <Link to={`projects/${project.id}`}>
                    <HiLink className={`
                      text-green-400 text-xl md:text-3xl
                      transition-opacity duration-300
                      ${selectedIndex === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `} />
                  </Link>
                </div>
                {/* stack */}
                <p className='flex gap-2'>
                  {project.stack.map((stack, idx) => (
                    <p key={idx}>{stack}</p>
                  ))}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
