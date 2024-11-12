'use client'
import React, { useState } from 'react'
import { IoClose, IoSearch } from 'react-icons/io5';

interface SearchProps{
    className:string,
    inputclassName:string,
    searchclassName:string
}

export default function Search({className,inputclassName,searchclassName}:SearchProps) {
  const [text, setText] = useState('');
  return (
    <div className={className}>
    <input
      onChange={(e) => setText(e.target.value)}
      type="text"
      className={inputclassName}
      placeholder='البحث عن المنتج'
      name='asdas'
      value={text}
    />
    {text ? (<IoClose
      onClick={() => setText('')}
      className={searchclassName}
    />) : (<IoSearch
      className={searchclassName}
    />)}
  </div>
  )
}
