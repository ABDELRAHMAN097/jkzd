import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const ScrollVelocity = ({
  texts = [],
  className = "",
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
  reverse, // ممكن تحددها يدوي أو تسيبها أوتوماتيك حسب اللغة
}) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // لو reverse مش متحددة، هنخليها أوتوماتيك حسب اللغة
  const direction = reverse !== undefined ? reverse : isArabic;

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
          reverse={direction}
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
  reverse = false,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // لو reverse = true يبقى من الشمال لليمين
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["-100%", "100%"] : ["100%", "-100%"]
  );

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
