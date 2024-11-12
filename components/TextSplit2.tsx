'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TextSplit2Props {
  name: string;
  className?: string;
  classNameAll?: string;
  classNameCharc?: string;
}

export default function TextSplit2({ name, className,classNameAll, classNameCharc }: TextSplit2Props) {
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



  return (
    <motion.div
      className={className}
    >
      {name.split(" ").map((text, index) => (
        <div className={classNameAll} key={index}>
          {text.split("").map((charac, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial="initial"
              animate={ctrls}
              variants={{
                initial: {
                  opacity: 0,
                  y: `0.25em`,
                  x: `0.25em`,
                },
                animate: {
                  opacity: 0.5,
                  y: `0em`,
                  x: `0em`,
                  transition: {
                    duration: 1,
                    ease: [0.2, 0.65, 0.3, 0.9],
                    delay: index * 0.1 
                  }
                }
              }}
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
