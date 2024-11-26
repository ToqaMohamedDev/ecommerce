'use client'
import React from 'react'
import { IoClose, IoSearch } from 'react-icons/io5';
import useAppStore from '@/lib/counterStore'
interface SearchProps{
    className:string,
    inputclassName:string,
    searchclassName:string
}

export default function Search({className,inputclassName,searchclassName}:SearchProps) {
   const {search,setSearech}=  useAppStore();
  return (
    <div className={className}>
    <input
      onChange={(e) => setSearech(e.target.value)}
      type="text"
      className={inputclassName}
      placeholder='البحث عن المنتج'
      name='asdas'
      value={search?.toString()}
    />
    {search ? (<IoClose
      onClick={() => setSearech('')}
      className={searchclassName}
    />) : (<IoSearch
      className={searchclassName}
    />)}
  </div>
  )
}
