import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('global');
  return (
    <div className='grid grid-cols-1 w-full p-5'>
      
          <div
          className='flex flex-col items-center justify-end gap-3 text-white'
         >
              

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-white'
          >
            {t("last.areYou")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-secondary text-xl md:text-5xl'
            style={{ fontFamily: 'var(--font-family-Anton)' }}
          >
           bodymagdy097@gmail.com
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-white'
          >
            0201023671214
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-white'
          >
            {t("last.pra")}
          </motion.p>
          </div>

        
    </div>
  )
}

export default Footer