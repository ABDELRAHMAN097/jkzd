import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ImCloudDownload } from "react-icons/im";
import BlurText from "../components/ReactBits/BlurText";
import TextPressure from "../components/ReactBits/TextPressure";
import Beams from "../components/ReactBits/Beams";
import DecryptedText from "../components/ReactBits/DecryptedText";
import ScrollVelocity from "../components/ReactBits/ScrollVelocity ";
import { Link, Links } from "react-router-dom";
import Headers from "../components/Headers";
import GlassIcons from "../components/ReactBits/GlassIcons ";
import Tools from "../components/ReactBits/Tools";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNextdotjs,
  SiSass,
  SiTypescript,
  SiVite,
  SiReactquery,
} from "react-icons/si";
import {
  FaCheckCircle,
  FaClipboardCheck,
  FaClipboardList,
  FaCogs,
  FaDribbble,
  FaGitAlt,
  FaGithubAlt,
  FaHandshake,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Projects from "./Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import TiltedCard from "../components/ReactBits/TiltedCard ";
import ScrambledText from "../components/ReactBits/ScrambledText ";
import Magnet from "../components/ReactBits/Magnet ";
import Ballpit from "../components/ReactBits/Ballpit";
import Stepper, { Step } from "../components/ReactBits/Stepper";

const Home = () => {
  const { t } = useTranslation("global");
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseMove = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    video?.play();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // eye
  const leftEyeRef = useRef(null);
  const leftPupilRef = useRef(null);

  const rightEyeRef = useRef(null);
  const rightPupilRef = useRef(null);

  // تابع الماوس
  useEffect(() => {
    const handleMouseMove = (e) => {
      const updateEye = (eye, pupil) => {
        if (!eye || !pupil) return;

        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(
          e.clientY - eyeCenterY,
          e.clientX - eyeCenterX
        );
        const radius = 10;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      };

      updateEye(leftEyeRef.current, leftPupilRef.current);
      updateEye(rightEyeRef.current, rightPupilRef.current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 4taps
  // const [flippedIndex, setFlippedIndex] = useState(null);

  // const toggleFlip = (index) => {
  //   setFlippedIndex((prev) => (prev === index ? null : index));
  // };

  // const features = [
  //   {
  //     title: "UI Design",
  //     desc: "Clean, attractive design that reflects the brand identity.",
  //   },
  //   {
  //     title: "Responsive & Compatible",
  //     desc: "Seamless experience across all screen sizes and devices.",
  //   },
  //   {
  //     title: "Performance",
  //     desc: "Fast loading speeds and optimized assets.",
  //   },
  //   {
  //     title: "Interactivity & UX",
  //     desc: "Interactive, real-time interfaces with smooth animations.",
  //   },
  // ];

  // skills
  // update with your own icons and colors
  const items = [
    {
      icon: <IoLogoJavascript />,
      color: "hsl(53.36deg 93.13% 54.31%)",
      label: t("text.Javascript"),
    },
    { icon: <SiTypescript />, color: "blue", label: t("text.Typescript") },
    { icon: <FaReact />, color: "indigo", label: t("text.React") },
    { icon: <SiNextdotjs />, color: "#303030", label: t("text.Next") },
    {
      icon: <RiTailwindCssFill />,
      color: "#004574",
      label: t("text.Tailwind"),
    },
    { icon: <SiSass />, color: "#9449be", label: t("text.Sass") },
    { icon: <TbBrandRedux />, color: "purple", label: t("text.Redux") },
    { icon: <FaShopify />, color: "#3da84b", label: t("text.Shopify") },
  ];

  // Tools
  // update with your own icons and colors
  const toolsItems = [
    { icon: <FaGitAlt />, color: "red", label: t("text.Git") },
    {
      icon: <img src="/image/gsap.png" alt=" GSAP" width={40} />,
      color: "white",
      label: t("text.GSAP"),
    },
    {
      icon: <img src="/image/favicon.svg" alt="Windsurf" width={40} />,
      color: "white",
      label: t("text.Windsurf"),
    },
    {
      icon: (
        <img src="/image/Framer Motion.png" alt="Framer Motion" width={40} />
      ),
      color: "white",
      label: t("text.Framer Motion"),
    },
    { icon: <VscVscode />, color: "indigo", label: t("text.Vscode") },
    { icon: <FaGithubAlt />, color: "#303030", label: t("text.Github") },
    { icon: <FaDribbble />, color: "#9449be", label: t("text.Dribbble") },
    { icon: <SiVite />, color: "#9449be", label: t("text.Vite") },
    { icon: <SiReactquery />, color: "#ff4154", label: t("text.React Query") },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grid grid-cols-1 min-h-[100vh]">
      <div
        onMouseMove={handleMouseMove}
        className="w-full relative text-white overflow-hidden"
      >
        {/* Background Video */}
        <video
          src="/image/aa.mp4"
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 right-0 w-full h-full object-cover z-0"
        />

        {/* Content Layer */}
        <div className="grid grid-cols-1 gap-0 h-screen w-full relative z-10 bg-black/16">
          {/* eye */}
          <div className="flex flex-col space-y-10 justify-center items-center text-center px-4">
            {/* dcvcecfewdwd */}
            <div className="flex justify-center items-center gap-2 mb-4">
              {/* Left Eye */}
              <div
                ref={leftEyeRef}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center relative"
              >
                <div
                  ref={leftPupilRef}
                  className="w-4 h-4 bg-black rounded-full absolute transition-all duration-100"
                ></div>
              </div>
              {/* Right Eye */}
              <div
                ref={rightEyeRef}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center relative"
              >
                <div
                  ref={rightPupilRef}
                  className="w-4 h-4 bg-black rounded-full absolute transition-all duration-100"
                ></div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <TextPressure
                direction="auto"
                text={t("heroSection.hello")}
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
            {/* Abdelrahman Magdy */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-3xl md:text-5xl text-secondary font-roboto font-bold mb-4"
              style={{ fontStretch: "125%" }}
            >
              {t("heroSection.name")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              style={{ fontFamily: "var(--font-family-text)" }}
              className="text-lg md:text-xl mb-6 max-w-2xl"
            >
              {t("heroSection.pragraph")}
              <br />
              {t("heroSection.pragraph2")}
            </motion.p>
            {/* button cv */}
            <Magnet padding={100} disabled={false} magnetStrength={4}>
              <div className="flex items-center gap-2 bg-white text-secondary px-6 py-2 rounded-full">
                <a
                  // target="_blank"
                  // href="https://drive.google.com/file/d/1SmYWUr-fOsi6RcpeJjKrl1hgAeYPh3Hb/view?usp=drive_link"
                  className="flex items-center gap-2"
                >
                  <ImCloudDownload className="text-xl" /> CV
                </a>
              </div>
            </Magnet>
          </div>
          {/* 4taps */}
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2 relative">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={10}
            noiseIntensity={0.45}
            scale={0.2}
            rotation={17}
          />
        </div>

        {/* About */}
        <div id="about" className="grid grid-cols-1 max-w-[90%]">
          {/* header */}
          <div className="relative z-10 flex justify-start items-start w-full border-b border-secondary">
            <Headers text={t("section.about")} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Paragraph */}
            <div className="relative z-10 flex justify-center items-center w-full">
              <div className="w-full text-center md:text-start text-white p-4">
                <ScrambledText
                  dir="auto"
                  className="scrambled-text-demo"
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=": ."
                >
                  {t("text.about-pragraph")}
                </ScrambledText>
              </div>
            </div>
            {/* Tilted Card */}
            <div className="p-5">
              <TiltedCard
                imageSrc="/image/me.png"
                altText="Abdelrahman - Dev"
                captionText="Abdelrahman - Dev"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.01}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text text-secondary bg-gray-300/20 p-1 rounded">
                    Abdelrahman - Dev
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* skils & Tools section */}

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-5">
          <div className="-rotate-4 my-44">
            <ScrollVelocity
              texts={["Clean code, smooth design, outstanding results"]}
              className="custom-scroll-text text-secondary"
            />
          </div>
          <div className="rotate-4">
            <ScrollVelocity
              texts={["I'm not just a developer — I craft experiences"]}
              className="custom-scroll-text text-secondary "
              reverse={true}
            />
          </div>
          <div className=" -rotate-4 my-44">
            <ScrollVelocity
              texts={["I turn your idea into a stunning user experience"]}
              className="custom-scroll-text text-secondary "
            />
          </div>
        </div>
        <div className="max-w-[90%] mx-auto">
          <div className="h-screen grid grid-cols-1 md:grid-cols-2">
            {/* header */}
            <div className="flex justify-center md:justify-start items-center col-span-1 ">
              <Headers text={t("section.skills")} />
            </div>
            {/* Skills */}
            <div
              id="skills"
              className="flex justify-center items-center col-span-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <GlassIcons items={items} className="custom-class" />
              </motion.div>
            </div>
          </div>
          {/* tools */}
          <div id="tools" className="h-screen grid grid-cols-1 md:grid-cols-2">
            {/* header */}
            <div className="flex justify-center md:justify-start items-center col-span-1 ">
              <Headers text={t("section.tools")} />
            </div>
            {/* icons */}
            <div className="flex justify-center items-center col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <Tools Tools={toolsItems} className="custom-class" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div id="experience">
        <Experience />
      </div>
      {/* Projects */}
      <div id="projects">
        <Projects />
      </div>

      {/* Stepper */}
      <div id="stepper" className="h-screen relative px-2 md:px-0">
        <div className="w-full absolute bottom-0 z-0">
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
          />
          </div>
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
          }}
          backButtonText={t("steper.buttom_back")}
          nextButtonText={t("steper.buttom_next")}
          className="relative z-10"
        >
          {/* الترحيب */}
          <Step>
            <div className="flex flex-col items-center text-center text-white space-y-4">
              <FaHandshake className="text-[#00f050]" size={50} />
              <h2 className="font-bold text-xl">{t("steper.step1_title")}</h2>
              <p>
                {t("steper.step1_text")}
              </p>
            </div>
          </Step>

          {/* التواصل عبر الواتساب */}
          <Step>
            <div className="flex flex-col items-center text-center text-white space-y-4">
              <FaWhatsapp className="text-[#00f050]" size={50} />
              <h2 className="font-bold text-xl">
                 {t("steper.step2_title")}
              </h2>
              <p>
                {t("steper.step2_text")}
                <br />
                <a
                    href="https://wa.me/201023671214?text=مرحبا،%20أرغب%20في%20الاستفسار%20عن%20خدماتكم"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full underline text-secondary flex justify-center items-center transition"
                  >
                    {t("nav.whatsapp")}
                  </a>
                <br />
                {t("steper.step2_after_link")}
              </p>
            </div>
          </Step>

          {/* تحديد التفاصيل */}
          <Step>
            <div className="flex flex-col items-center text-center text-white space-y-4">
              <FaClipboardCheck className="text-[#00f050]" size={50} />
              <h2 className="font-bold text-xl">
                {t("steper.step3_title")}
              </h2>
              <p>
                {t("steper.step3_text")}
              </p>
            </div>
          </Step>

          {/* التسليم */}
          <Step>
            <div className="flex flex-col items-center text-center text-white space-y-4">
              <FaCheckCircle className="text-[#00f050]" size={50} />
              <h2 className="font-bold text-xl">{t("steper.step4_title")}</h2>
              <p>
                {t("steper.step4_text")}
              </p>
            </div>
          </Step>
        </Stepper>

      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
