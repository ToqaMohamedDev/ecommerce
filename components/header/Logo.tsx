import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <a href="/">
    <Image
      src='/logo.png'
      className='text-white  p-1 rounded-lg'
      width={60}
      height={50}
      alt='Logo'
    />
  </a>
  )
}
