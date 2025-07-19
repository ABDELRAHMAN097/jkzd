import React, { useState } from "react";

const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getBackgroundStyle = (color) => {
    return {
      background: gradientMapping[color] || color,
    };
  };

  const handleTouch = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className={`grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible ${className || ""}`}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={index}
            type="button"
            aria-label={item.label}
            onTouchStart={() => handleTouch(index)}
            onClick={() => handleTouch(index)}
            className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group transition-all duration-500 ease-in-out ${item.customClass || ""
              }`}
          >
            {/* front */}
            <span
              className={`absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-all duration-500 ease-in-out origin-[100%_100%] rotate-[15deg]
              ${isActive
                  ? "rotate-[25deg] translate-x-[-0.5em] translate-y-[-0.5em] translate-z-[0.5em]"
                  : "group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
                }`}
              style={{
                ...getBackgroundStyle(item.color),
                boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
              }}
            ></span>

            {/* background */}
            <span
              className={`absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-all duration-500 ease-in-out origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)]
              ${isActive
                  ? "translate-z-[2em]"
                  : "group-hover:translate-z-[2em]"
                }`}
              style={{
                boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
              }}
            >
              <span className="m-auto text-2xl w-[2em] h-[2em] text-[#acacac] flex items-center justify-center" aria-hidden="true">
                {item.icon}
              </span>
            </span>

            {/* name */}
            <span
              className={`absolute top-full left-0 right-0 text-[#dadada] text-center whitespace-nowrap leading-[2] text-base transition-all duration-500 ease-in-out
              ${isActive
                  ? "opacity-100 translate-y-[20%]"
                  : "opacity-0 group-hover:opacity-100 group-hover:translate-y-[20%]"
                }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default GlassIcons;
