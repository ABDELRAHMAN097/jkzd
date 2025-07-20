import React from "react";
import FlowingMenu from "../components/ReactBits/FlowingMenu";

const Projects = () => {
  const demoItems = [
    {
      link: "#",
      text: "Mojave",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Sonoma",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  return (
    
      <div className="grid grid-cols-1 max-w-[90%] mx-auto">
        <FlowingMenu items={demoItems} />
      </div>
    
  );
};

export default Projects;
