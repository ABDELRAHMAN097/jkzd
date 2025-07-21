import React, { useState } from "react";

const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const Tools = ({ Tools, className }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const handleInteraction = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className={`grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible ${className || ""}`}
    >
      {Tools.map((Tool, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
            key={index}
            type="button"
            aria-label={Tool.label}
            onClick={() => handleInteraction(index)}
            className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${Tool.customClass || ""
              }`}
          >
            {/* front */}
            <span
              className={`absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg]
                ${isActive ? "rotate-[25deg] translate-x-[-0.5em] translate-y-[-0.5em] translate-z-[0.5em]" : ""}
                md:group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]`}
              style={{
                ...getBackgroundStyle(Tool.color),
                boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
              }}
            ></span>

            {/* background */}
            <span
              className={`absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)]
                ${isActive ? "translate-z-[2em]" : ""}
                md:group-hover:[transform:translateZ(2em)]`}
              style={{
                boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
              }}
            >
              <span className="m-auto text-2xl w-[2em] h-[2em] text-[#acacac] flex items-center justify-center" aria-hidden="true">
                {Tool.icon}
              </span>
            </span>

            {/* name */}
            <span
              className={`absolute top-full left-0 right-0 text-[#dadada] text-center whitespace-nowrap leading-[2] text-base transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]
                ${isActive ? "opacity-100 translate-y-[20%]" : "opacity-0 translate-y-0"}
                md:group-hover:opacity-100 md:group-hover:[transform:translateY(20%)]`}
            >
              {Tool.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default Tools;
