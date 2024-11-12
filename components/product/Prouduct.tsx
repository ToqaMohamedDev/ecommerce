'use client'
import { config } from '@/config';
import { getData } from '@/lib';
import React, { useEffect, useState } from 'react'
import TextSplit2 from '../TextSplit2';
import CardProduct from './CardProduct';
import { ProductProps } from '@/type';
import Pagination from './Pagination';

export default function Prouduct() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const endpoint = `${config?.baseUrl}/products`;
        try {
          const data = await getData(endpoint);
          setProducts(data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      fetchData();
    }, []);   
return (
  <section className="container mx-auto px-3 sm:px-0">
    <div className="mb-10 mt-10">
      <div className="flex items-center justify-between">
        <TextSplit2
                  name='Top Sells Products'
                  className='flex gap-3'
                  classNameAll='flex flex-row text-xl text-black dark:text-white sm:text-3xl font-bold '
                  classNameCharc='-mr-2'
              />
      </div>
      <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-600 mt-3" />
    </div>
   <Pagination/>
  </section>
  )
}
