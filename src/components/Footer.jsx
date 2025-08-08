import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  return (
    <div className="grid grid-cols-1 min-h-[100vh] w-full pt-0 relative">
     
     <div className="">

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="relative top-0 left-0 right-0 h-full w-full"
        >
        <path
          fill="#00f050"
          fill-opacity="1"
          d="M0,128L13.3,112C26.7,96,53,64,80,80C106.7,96,133,160,160,165.3C186.7,171,213,117,240,112C266.7,107,293,149,320,144C346.7,139,373,85,400,64C426.7,43,453,53,480,101.3C506.7,149,533,235,560,229.3C586.7,224,613,128,640,101.3C666.7,75,693,117,720,122.7C746.7,128,773,96,800,69.3C826.7,43,853,21,880,16C906.7,11,933,21,960,42.7C986.7,64,1013,96,1040,90.7C1066.7,85,1093,43,1120,42.7C1146.7,43,1173,85,1200,112C1226.7,139,1253,149,1280,144C1306.7,139,1333,117,1360,101.3C1386.7,85,1413,75,1427,69.3L1440,64L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"
        ></path>
      </svg>

      </div>

      <div className="flex flex-col items-center justify-end gap-3 text-white">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-white"
        >
          {t("last.areYou")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-secondary text-xl md:text-5xl"
          style={{ fontFamily: "var(--font-family-Anton)" }}
        >
          bodymagdy097@gmail.com
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-white"
        >
          0201023671214
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-white"
        >
          {t("last.pra")}
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
