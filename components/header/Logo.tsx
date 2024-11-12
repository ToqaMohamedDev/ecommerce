import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <a href="/">
    <Image
      src='/logo.png'
      className='text-white bg-white p-1 rounded-lg'
      width={150}
      height={150}
      alt='Logo'
    />
  </a>
  )
}
