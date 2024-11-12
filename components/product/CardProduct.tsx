import { ProductProps } from '@/type';
import Image from 'next/image';
import React from 'react'
import ReactPaginate from "react-paginate";


interface Props {
  item: ProductProps;
  setSearchText?: any;
}
export default function CardProduct({ item, setSearchText }: Props) {
  return (
    <div>
      <Image
      src={item.images[0]}
       alt='La'
       width={250}
       height={250}
      />
      
    </div>
  )
}
