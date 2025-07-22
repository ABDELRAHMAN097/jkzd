import React from 'react'
import { footer } from "../db/db.json"
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className='grid grid-cols-1 w-full'>
      {
        footer.map((item, i) => (
          <div
          className='min-h-84 max-h-screen flex flex-col items-center justify-end gap-3 text-white'
          key={i}
          >
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='flex flex-col items-center justify-center gap-3 text-white'
          >
            {item.qu}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='flex flex-col items-center justify-center gap-3 text-white text-xl md:text-5xl'
            style={{ fontFamily: 'var(--font-family-Anton)' }}
          >
           
            {item.gmaill}
           
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='flex flex-col items-center justify-center gap-3 text-white'
          >
           
            {item.tel}
           
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='flex flex-col items-center justify-center gap-3 text-secondary'
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