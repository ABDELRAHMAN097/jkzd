import { useEffect, useRef, useState } from "react";
import BlurText from "../components/ReactBits/BlurText";
import TextPressure from "../components/ReactBits/TextPressure";

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

  const handleAnimationComplete = () => {};
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
          <div className="flex flex-col justify-end items-center text-center px-4">
            {/* dcvcecfewdwd */}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <TextPressure
                text="Abdelrahman Magdy"
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
            </h1>
            {/* I'm a frontend developer turning designs into living, breathing
              interfaces
              <br />
              Smooth Fast Responsive Just like your users expect */}
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              I'm a frontend developer turning designs into living, breathing
              interfaces
              <br />
              Smooth Fast Responsive Just like your users expect
            </p>
            {/* eye */}
            <div className="flex justify-center items-center gap-2">
              {/* Left Eye */}
              <div
                ref={leftEyeRef}
                className="w-20 h-20 bg-white rounded-full flex justify-center items-center relative"
              >
                <div
                  ref={leftPupilRef}
                  className="w-6 h-6 bg-black rounded-full absolute transition-all duration-100"
                ></div>
              </div>

              {/* Right Eye */}
              <div
                ref={rightEyeRef}
                className="w-20 h-20 bg-white rounded-full flex justify-center items-center relative"
              >
                <div
                  ref={rightPupilRef}
                  className="w-6 h-6 bg-black rounded-full absolute transition-all duration-100"
                ></div>
              </div>
            </div>
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
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* modall */}
        <div className="relative z-30 grid-colspan-1 text-white text-center  min-h-36">
          {/* <div className="absolute left-0 top-2 -z-10 size-62 bg-green-500 blur-lg  rounded-full"></div> */}
        </div>
        <div className="grid-colspan-1 flex justify-center items-center text-white text-center min-h-36">
          <div className="w-full h-full  flex justify-center items-end"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
