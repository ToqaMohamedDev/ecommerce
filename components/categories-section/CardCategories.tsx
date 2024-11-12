'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { CategoryProps } from '@/type'
import Link from 'next/link'
import React from 'react'

interface CardCategoriesProps {
    category: CategoryProps;
  }
  
export default function CardCategories({ category}: CardCategoriesProps) {
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
        ref={ref}
        key={category._id}
        initial="initial"
        animate={ctrls}
        variants={{
          initial: {
            y: 30,
          },
          animate: {
            y: 0,
            transition: {
              duration: 1,
              ease: [0.2, 0.65, 0.3, 0.9],
              
              
            }
          }
        }}
        >
            <Link
            href={`/category/${category._base}`}
           
            className="w-full h-auto relative group overflow-hidden"
        >
            <img
                src={category.image}
                alt="categoryImage"
                className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
            />
            <div className="absolute bottom-3 w-full text-center">
                <p className="text-sm md:text-base font-bold">{category.name}</p>
            </div>
        </Link>
        </motion.div>
    )
}
