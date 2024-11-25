'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import { AiFillFacebook, AiFillGithub, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
export const bodyAnimation = {
  initial: {
    y: `1em`,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: `0em`,
    transition: {
      delay: 5.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
}

export default function Footer() {
  
  return (
    <section
      className='bg-secondary flex flex-col items-center justify-center mx-auto py-12 overflow-x-hidden'
    >
      <div className='flex gap-2'>

        <Link href='/'>
          <motion.div
            variants={bodyAnimation}
            className='cursor-pointer text-white'><AiFillGithub size={25} /></motion.div>
        </Link>

        <Link href='/'>
          <motion.div
            variants={bodyAnimation}
            className='cursor-pointer text-white'><AiFillFacebook size={25} /></motion.div >
        </Link>

        <Link href='/'>
          <motion.div
            variants={bodyAnimation}
            className='cursor-pointer text-white'><AiFillYoutube size={25} /></motion.div>
        </Link>

        <Link href='/'>
          <motion.div
            variants={bodyAnimation}
            className='cursor-pointer text-white'><AiOutlineWhatsApp size={25} /></motion.div>
        </Link>
      </div>
      <div className="text-white mt-3">
        Copyright &copy; Alaa Taha. All rights reserved.
      </div>

    </section>
  )
}
