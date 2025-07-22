import { useEffect, useRef } from "react";
import { ImCloudDownload } from "react-icons/im";
import BlurText from "../components/ReactBits/BlurText";
import TextPressure from "../components/ReactBits/TextPressure";
import Beams from "../components/ReactBits/Beams";
import DecryptedText from "../components/ReactBits/DecryptedText";
import ScrollVelocity from "../components/ReactBits/ScrollVelocity ";
import { Link } from "react-router-dom";
import Headers from "../components/Headers";
import GlassIcons from "../components/ReactBits/GlassIcons ";
import Tools from "../components/ReactBits/Tools";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiSass, SiTypescript, SiVite } from "react-icons/si";
import { FaDribbble, FaGitAlt, FaGithubAlt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Projects from "./Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


const Home = () => {
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
      label: "Javascript",
    },
    { icon: <SiTypescript />, color: "blue", label: "Typescript" },
    { icon: <FaReact />, color: "indigo", label: "React.js" },
    { icon: <SiNextdotjs />, color: "#303030", label: "Next.js" },
    { icon: <RiTailwindCssFill />, color: "#004574", label: "Tailwind" },
    { icon: <SiSass />, color: "#9449be", label: "Sass" },
    { icon: <TbBrandRedux />, color: "purple", label: "Redux" }, 
    { icon: <FaShopify />, color: "#3da84b", label: "Shopify" },
  ];

  // Tools
  // update with your own icons and colors
  const toolsItems = [
    { icon: <FaGitAlt />, color: "red", label: "Git" },
    { icon: <img src="/image/gsap.png" alt=" Logo" width={40} /> , color: "white", label: "GSAP" },
    { icon: <img src="/image/favicon.svg" alt="Windsurf" width={40} /> , color: "white", label: "Windsurf" },
    { icon: <img src="/image/Framer Motion.png" alt="Windsurf" width={40} /> , color: "white", label: "Framer Motion" },
    { icon: <VscVscode />, color: "indigo", label: "Vscode" },
    { icon: <FaGithubAlt />, color: "#303030", label: "Github" },
    { icon: <FaDribbble />, color: "#9449be", label: "Dribbble" },
    { icon: <SiVite />, color: "#9449be", label: "Vite" },
  ];

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className="w-full h-screen relative text-white overflow-hidden"
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
                text="Hello! I Am"
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
            className="text-3xl md:text-5xl text-secondary font-roboto font-bold mb-4" style={{ fontStretch: '125%' }}
            >
              Abdelrahman Magdy
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
              style={{ fontFamily: "var(--font-family-text)" }}
              className="text-lg md:text-xl mb-6 max-w-2xl"
            >
              I'm a frontend developer turning designs into living, breathing
              interfaces
              <br />
              Smooth Fast Responsive Just like your users expect
            </motion.p>
            {/* button cv */}
            <Link   
            
            target="_blank" href="https://drive.google.com/file/d/1M4NFtt8ou7qvoeo64fUTv-UeMMqwdjuX/view?usp=drive_link">
              <button className="flex items-center gap-2 bg-white text-secondary px-6 py-2 rounded-full">
              <ImCloudDownload /> CV
              </button>
            </Link> 
          </div>
          {/* 4taps */}
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center space-y-6 relative py-8">
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
        <div className="max-w-[90%]">
          {/* header */}
          <div className="relative z-10 flex justify-start items-start w-full border-b border-secondary">
            <Headers text="About Me" />
          </div>

          {/* Paragraph */}
          <div className="relative z-10 flex justify-center items-center w-full">
            <div className="w-full text-center md:text-start text-white p-4 rounded">
              <DecryptedText
                className="text-xl md:text-2xl justify-center leading-relaxed"
                text="I'm a creative and detail-oriented Frontend Developer with a strong passion for crafting exceptional user experiences. I specialize in building high-performance, visually appealing, and fully responsive websites using modern technologies like React, Next.js, and Tailwind CSS.
I have a sharp eye for design and a deep understanding of UI/UX principles, which allows me to transform ideas into smooth, engaging digital experiences. I love turning complex problems into simple, elegant solutions — and I'm always eager to learn and stay up-to-date with the latest trends in frontend development.
Beyond writing code, I enjoy collaborating with teams and designers to bring ideas to life and deliver real value to users"
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                animateOn="view"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </div>
          </div>
        </div>
      </div>

      {/* skils & Tools section */}

      <div className="">
        <div className="-skew-x-44">
          <ScrollVelocity
            texts={["Boody Magdy", "Skills & Tools"]}
            velocity={150}
            className="custom-scroll-text text-secondary skew-x-16"
          />
        </div>
        <div className="max-w-[90%] mx-auto">
          <div className="h-screen grid grid-cols-1 md:grid-cols-2">
            {/* header */}
            <div className="flex justify-center md:justify-start items-center col-span-1 ">
              <Headers text="Skills" />
            </div>
            {/* Tools */}
            <div className="flex justify-center items-center col-span-1">
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
          <div className="h-screen grid grid-cols-1 md:grid-cols-2">
            {/* header */}
            <div className="flex justify-center md:justify-start items-center col-span-1 ">
              <Headers text="Tools" />
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
      <Experience />
      {/* Projects */}
      <Projects />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
