import React, { useState } from 'react';
import Headers from '../components/Headers';
import { experience } from '../db/db';
import { HiLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
  
const Experience = () => {
      const [selectedIndex, setSelectedIndex] = useState(null);
    
  return (
     <div className='max-w-[90%] min-h-screen mx-auto flex flex-col items-center justify-center'>
          <Headers text="Experience" />
          <div className="w-full">
            {
              experience.map((item, idx) => (
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className={`group cursor-pointer ${idx !== experience.length - 1 ? 'border-b border-secondary' : ''} flex gap-4 items-start py-4 ${
                    selectedIndex === idx ? 'text-white' : 'text-[#adadad]'
                  }`}
                  key={idx}
                >
                  <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.1 }}
                  className='flex flex-col gap-2 items-start'
                  >
                  <p className='text-[#adadad] uppercase tracking-wider text-sm md:text-xl'>{item.company}</p>
                  <p className='text-white uppercase tracking-wider text-sm md:text-4xl origin-top scale-y-125'>{item.position}</p>
                    {/* date */}
                    <div className='flex gap-2 items-center'>
                      <p className='text-sm md:text-xl uppercase tracking-wider text-[#adadad]'>{item.start_date}</p>
                      <p className='text-sm md:text-xl uppercase tracking-wider text-[#adadad]'>{item.end_date}</p>
                    </div>
                  </motion.div>
                </div>
              ))
            }
          </div>
        </div>
  )
}

export default Experience