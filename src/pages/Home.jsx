import { useEffect, useRef, useState } from "react";
import BlurText from "../components/ReactBits/BlurText";
import TextPressure from "../components/ReactBits/TextPressure";
import Beams from "../components/ReactBits/Beams";
import DecryptedText from "../components/ReactBits/DecryptedText";
import { Link } from "react-router-dom";

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
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  const features = [
    {
      title: "UI Design",
      desc: "Clean, attractive design that reflects the brand identity.",
    },
    {
      title: "Responsive & Compatible",
      desc: "Seamless experience across all screen sizes and devices.",
    },
    {
      title: "Performance",
      desc: "Fast loading speeds and optimized assets.",
    },
    {
      title: "Interactivity & UX",
      desc: "Interactive, real-time interfaces with smooth animations.",
    },
  ];

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className="w-full h-screen relative text-white overflow-hidden"
      >
        {/* Background Video */}
        <video
          src="/image/herovedio.mp4"
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 right-0 w-full h-full object-cover z-0"
        />

        {/* Content Layer */}
        <div className="grid grid-cols-1 gap-8 h-screen w-full relative z-10 bg-black/48">
          {/* eye */}
          <div className="flex flex-col justify-end items-center text-center px-4">
            {/* dcvcecfewdwd */}
            <div className="flex justify-center items-center gap-2 mb-2">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Abdelrahman Magdy
            </h1>

            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              I'm a frontend developer turning designs into living, breathing
              interfaces
              <br />
              Smooth Fast Responsive Just like your users expect
            </p>
            {/* button cv */}
            <Link to="https://drive.google.com/file/d/1M4NFtt8ou7qvoeo64fUTv-UeMMqwdjuX/view?usp=drive_link">
              <button className="bg-white text-black px-6 py-2 rounded-full">
                Download CV
              </button>
            </Link>
          </div>
          {/* 4taps */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-1 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-center items-center col-span-1 text-white"
              >
                <div
                  className={`relative w-full h-40 transition-transform duration-700 [transform-style:preserve-3d] rounded-xl cursor-pointer ${
                    flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
                  }`}
                  onClick={() => toggleFlip(index)}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center bg-black/60 rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-center">{feature.desc}</p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full flex justify-center items-center [transform:rotateY(180deg)] backface-hidden bg-black/70 rounded-lg overflow-hidden">
                    <img
                      src="/image/hd.png"
                      alt="Back"
                      className="w-1/4 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Below */}
      <div className="h-screen w-full flex flex-col justify-center items-center space-y-6 relative">
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

        {/* First Paragraph */}
        <div className="relative z-10 flex justify-center items-center w-full">
          <div className="w-full text-center text-white p-4 rounded">
            <DecryptedText
              className="text-5xl md:text-4xl font-bold justify-center"
              text="I'm a passionate Frontend Developer with a strong eye for design and user experience.
  I specialize in building modern, fast, and responsive websites using React, Next.js, and Tailwind CSS."
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
    </>
  );
};

export default Home;
