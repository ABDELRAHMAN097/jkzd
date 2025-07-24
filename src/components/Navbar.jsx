import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiGoogletranslate } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaPlay,
  FaMoon,
  FaCalculator,
  FaVolumeUp,
  FaEye,
} from "react-icons/fa";
import { MdFlashlightOn, MdAccessibilityNew } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { BsFillEarFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  // Handle scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

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
            {/* Click outside to close */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#1e1e1e] text-white shadow-lg z-50 p-4 overflow-y-auto grid grid-rows-[auto_1fr] gap-4"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-4 gap-2">
                <Tile>
                  <a
                    href="#about"
                    className="w-full h-full flex justify-center items-center transition"
                  >
                    About
                  </a>
                </Tile>

                <Tile>
                  <a
                    href="#skills"
                    className="w-full h-full flex justify-center items-center transition"
                  >
                    Skills
                  </a>
                </Tile>

                <div className="bg-[#2c2c2e] col-span-2 row-span-2 rounded-xl p-2 grid place-items-center text-center">
                  <p className="text-xs">Not Playing</p>
                  <div className="flex gap-2 mt-2 text-white text-sm">
                    <button>{"<<"}</button>
                    <button>
                      <FaPlay size={18} />
                    </button>
                    <button>{">>"}</button>
                  </div>
                </div>

                <Tile>
                  <a
                    href="#tools"
                    className="w-full h-full flex justify-center items-center transition"
                  >
                    Tools
                  </a>
                </Tile>
                <Tile>
                  <a
                    href="#experience"
                    className="w-full h-full flex justify-center items-center transition"
                  >
                    Experience
                  </a>
                </Tile>
                <Tile>
                  <a
                    href="#projects"
                    className="w-full h-full flex justify-center items-center transition"
                  >
                    Projects
                  </a>
                </Tile>

                <Tile>
                  <FaMoon />
                </Tile>
                <ControlSlider icon={<IoMdSunny />} />
                <ControlSlider icon={<FaVolumeUp />} />

                <Tile className="cursor-pointer">
                  <button
                    onClick={() => {
                      const newLang = i18n.language === "en" ? "ar" : "en";
                      i18n.changeLanguage(newLang);
                      localStorage.setItem('i18nextLng', newLang);
                    }}
                    className="w-full h-full flex justify-center items-center transition"
                  >
                    <SiGoogletranslate className="text-xl"/>
                  </button>
                </Tile>

                <Tile>
                  <MdFlashlightOn />
                </Tile>

                <Tile>
                  <FaCalculator />
                </Tile>

                <Tile>
                  <BsFillEarFill />
                </Tile>
                <Tile>
                  <MdAccessibilityNew />
                </Tile>

                <Tile>
                  <FaEye />
                </Tile>
                <Tile>
                  <span className="text-xs">AA</span>
                </Tile>
                <Tile>
                  <span className="text-xs">🔒</span>
                </Tile>
                <Tile>
                  <span className="text-xs">🧭</span>
                </Tile>
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
