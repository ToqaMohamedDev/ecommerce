'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useUserStore from '@/lib/counterStore'

import { CategoryProps } from '@/type'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

interface CardCategoriesProps {
  category: CategoryProps;
}

export default function CardCategories({ category }: CardCategoriesProps) {
  const { setUID } = useUserStore();

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
        href={`/${category.name}`}
        onClick={() => setUID(`${category._id}`)}
        className="w-full h-auto flex flex-col items-center relative group overflow-hidden"
      >
        <div className="relative w-[100px] h-[100px] rounded-full ring-1 ring-black dark:ring-white overflow-hidden">
          <Image
            src={category.image}
            alt="categoryImage"
            className="p-1 rounded-full object-fill group-hover:scale-110 duration-300"
            layout="responsive"
            width={50}
            height={50}
          />
        </div>
        <div className=" bottom-3 w-full text-center">
          <p className="text-sm md:text-base font-bold">{category.name}</p>
        </div>
      </Link>
    </motion.div>
  )
}
