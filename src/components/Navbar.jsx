import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaBluetooth, FaPlay, FaLock, FaMoon, FaCalculator, FaVolumeUp, FaEye } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { MdScreenShare, MdFlashlightOn, MdAccessibilityNew } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { BsFillEarFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white text-3xl"
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#1e1e1e] text-white shadow-lg z-50 p-4 overflow-y-auto"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <Tile><FaBluetooth /></Tile>
                <Tile><AiOutlineWifi /></Tile>

                <div className="bg-[#2c2c2e] col-span-2 row-span-2 rounded-xl p-2 flex flex-col items-center justify-center">
                  <p className="text-xs">Not Playing</p>
                  <div className="flex gap-2 mt-2 text-white text-sm">
                    <button>{"<<"}</button>
                    <button><FaPlay size={18} /></button>
                    <button>{">>"}</button>
                  </div>
                </div>

                <Tile><FaLock className="text-red-500" /></Tile>
                <Tile><MdScreenShare /></Tile>
                <Tile><FaMoon /></Tile>
                <Tile><span className="text-xs">Focus</span></Tile>

                <ControlSlider icon={<IoMdSunny />} />
                <ControlSlider icon={<FaVolumeUp />} />

                <Tile><MdFlashlightOn /></Tile>
                <Tile><FaCalculator /></Tile>
                <Tile><BsFillEarFill /></Tile>
                <Tile><MdAccessibilityNew /></Tile>

                <Tile><FaEye /></Tile>
                <Tile><span className="text-xs">AA</span></Tile>
                <Tile><span className="text-xs">🔒</span></Tile>
                <Tile><span className="text-xs">🧭</span></Tile>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const Tile = ({ children }) => (
  <div className="bg-[#2c2c2e] rounded-xl p-3 flex justify-center items-center text-white text-sm">
    {children}
  </div>
);

const ControlSlider = ({ icon }) => (
  <div className="bg-[#2c2c2e] rounded-xl row-span-2 flex flex-col items-center justify-center p-2">
    {icon}
    <div className="w-2 h-24 bg-gray-600 mt-2 rounded-full overflow-hidden">
      <div className="bg-white w-full h-1/2" />
    </div>
  </div>
);

export default Navbar;
