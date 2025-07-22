import React from 'react'
import { footer } from "../db/db.json"
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className='grid grid-cols-1 w-full p-5'>
      {
        footer.map((item, i) => (
          <div
          className='flex flex-col items-center justify-end gap-3 text-white'
          key={i}
          >
              

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-white'
          >
            {item.qu}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-secondary text-xl md:text-5xl'
            style={{ fontFamily: 'var(--font-family-Anton)' }}
          >
           
            {item.gmaill}
           
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-white'
          >
           
            {item.tel}
           
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-white'
          >
           
            {item.pra}
           
          </motion.p>

        

          </div>

        ))
      }
    </div>
  )
}

export default Footer