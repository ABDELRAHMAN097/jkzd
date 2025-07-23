import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ScrollVelocity = ({
  texts = [],
  className = "",
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
}) => {
  return (
    <section>
      {texts.map((text, index) => (
        <ScrollText
          key={index}
          text={text}
          className={className}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        />
      ))}
    </section>
  );
};

function ScrollText({
  text,
  className,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // من قبل ما تدخل لحد ما تخرج
  });

  // نحرّك النص على محور X بناءً على الاسكرول
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div
      ref={ref}
      className={`${parallaxClassName} relative overflow-hidden`}
      style={parallaxStyle}
    >
      <motion.div
        className={`${scrollerClassName} ${className} whitespace-nowrap text-4xl md:text-7xl font-bold`}
        style={{ x, ...scrollerStyle }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default ScrollVelocity;
