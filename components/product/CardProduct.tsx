import { ProductProps } from '@/type';
import Image from 'next/image';
import React from 'react'

interface Props {
  item: ProductProps;

}
export default function CardProduct({ item,  }: Props) {
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
