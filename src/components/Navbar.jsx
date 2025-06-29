import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className={`w-full top-0 left-0 z-50 p-4 flex justify-between items-center bg-transparent ${
        isOpen ? "fixed bg-[#2c2c2c]" : "static"
    }`} >
      {/* Logo */}
      <Link to="/" className=" font-bold text-xl z-50">
        <img className="w-15 sm:w-20" src="/image/logo.png" alt="bg-nav" />
      </Link>

      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className=" text-3xl text-white z-50">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            className={`fixed inset-0 bg-[#181922] flex justify-center items-center flex-col gap-6 text-white text-2xl z-40`}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img className="fixed z-0" src="/image/logo.png" alt="bg-nav" />

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-6 z-40"
            >
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              {/* <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
