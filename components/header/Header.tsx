'use client'
import React from 'react'
import { ModeToggle } from './ModeToggle'


import MenuBar from './MenuBar'
import NavBar from './NavBar';
import { FaCartArrowDown } from 'react-icons/fa';
import Search from './Search';
import Logo from './Logo'
import SelectCategory from './SelectCategory'
import CarouselCat from './CarouselCat'

export default function Header() {


  return (
    <section className=''>
      <div className='container mx-auto px-4 sm:px-0 py-6'>
        <div className='flex items-center justify-between gap-3 '>
          {/* 1 */}
          <Logo />
          {/* 2 */}
          <Search
            searchclassName="absolute top-2.5 left-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            inputclassName="w-full flex-1 bg-background rounded-lg dark:text-white text-blac text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2 text-right"
            className='hidden xl:inline-flex max-w-xl w-full relative' />
          {/* 3 */}
          <NavBar />
          {/* 4 */}
          <div className='flex gap-3 items-center'>
            <ModeToggle />
            <div className="hover:text-primary cursor-pointer">
              <FaCartArrowDown size={25} />
            </div>
            <div className='xl:hidden'><MenuBar /></div>
          </div>
        </div>

     

      </div>
      <div className='bg-secondary h-[80px]'>
        <div className='container mx-auto px-4 sm:px-0 flex items-center justify-between py-4'>
          <SelectCategory/>
          <CarouselCat/>
          <Search
            searchclassName="absolute top-2.5 text-gray-400 left-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            inputclassName="w-full flex-1 border-none focus:outline-none focus:border-none bg-secondary rounded-lg text-white  text-lg placeholder:text-base placeholder:tracking-wide shadow-sm    placeholder:text-gray-400 placeholder:font-normal sm:text-sm px-4 py-2 text-right"
            className='xl:hidden inline-flex lg:max-w-lg sm:max-w-sm max-w-[220px] w-full relative' />
        </div>
      </div>
    </section>
  )
}
