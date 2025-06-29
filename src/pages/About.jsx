import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 p-2 md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-[70px]">
        <div className="flex justify-center items-center col-span-1 text-white bg-amber-500 min-h-36 rounded-0 md:rounded-br-2xl">1</div>
        <div className="flex justify-center items-center col-span-1 text-white bg-red-500 min-h-36 rounded-0 md:rounded-bl-2xl rounded-0 md:rounded-tr-2xl">2</div>
        <div className="flex justify-center items-center col-span-1 md:col-span-2 text-white bg-blue-500 min-h-36 rounded-0 md:rounded-tl-2xl">3</div>
        <div className="flex justify-center items-center col-span-1 text-white bg-green-500 min-h-36 rounded-0 md:rounded-tr-2xl">4</div>
        <div className="flex justify-center items-center col-span-1 text-white bg-black min-h-36 rounded-0 md:rounded-tl-2xl">5</div>
        <div className="flex justify-center items-center col-span-1 text-white bg-fuchsia-500 min-h-36">6</div>
        <div className="flex justify-center items-center col-span-1 text-white bg-indigo-500 min-h-36">7</div>
      </div>
    </div>
  );
};

export default About;
