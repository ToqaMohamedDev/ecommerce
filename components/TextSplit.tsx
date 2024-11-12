import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TextSplitProps {
  name: string;
  classNameCharc?: string;
}

export default function TextSplit({ name, classNameCharc }: TextSplitProps) {
  const ctrls = useAnimation();
  const { ref, inView } = useInView(
    {
      threshold: 0.1,
      triggerOnce: false
    }
  );

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    } else {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    initial: {
      opacity: 0,
      y: `0.25em`,
      x: `0.25em`,
      scale: 0.1,
      letterSpacing: "0.3em"
    },
    animate: {
      opacity: 0.5,
      y: `0em`,
      x: `0em`,
      scale: 1,
      letterSpacing: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <motion.div
      className="flex max-w-[500px] flex-col overflow-hidden text-center text-[96px] font-bold leading-[0.8em] text-[#000000] sm:text-[120px] sm:leading-[0.85em] md:max-w-[900px] mb-10 md:text-[155.5px] lg:text-[215px]"
    >
      {name.split(" ").map((text, index) => (
        <div className="flex items-center justify-center text-gray-800 dark:text-white overflow-hidden" key={index}>
          {text.split("").map((charac, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial="initial"
              animate={ctrls}
              variants={characterAnimation}
              className={classNameCharc}
            >
              {charac + "\u00A0"}
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
