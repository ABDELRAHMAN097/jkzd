import { useEffect, useRef } from "react";
import ModelViewer from "../components/ModelViewer";

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
  return (
    <>
   
    <div 
    onMouseMove={handleMouseMove}
    className="w-full h-screen relative text-white overflow-hidden">
      {/* Background Video */}
      <video
        src="/image/homeVideo.mp4"
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute top-0 left-0 right-0 w-full h-full object-cover z-0"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen px-4 bg-black/50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Frontend Developer Portfolio</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          This is a demo section layered over a looping video background. Make your site dynamic and engaging.
        </p>
        <button className="px-6 py-2 bg-primary text-white rounded-full">Get Started</button>
      </div>
    </div>

     {/* Section Below */}
     <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
{/* modall */}
        <div className="relative z-30 grid-colspan-1 text-white text-center border border-amber-400 min-h-36">
            <div className="absolute left-0 top-2 -z-10 size-62 bg-green-500 blur-lg  rounded-full"></div>
        </div>
        <div className="grid-colspan-1 flex justify-center items-center text-white text-center border border-red-500 min-h-36">
         <div className="w-full h-full border flex justify-center items-end">

          <ModelViewer />
         </div>
         
          </div>  

      </div>
      

    </>
  );
};

export default Home;




