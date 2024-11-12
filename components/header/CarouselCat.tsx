'use client'
import Autoplay from "embla-carousel-autoplay"
import { config } from '@/config';
import { getData } from '@/lib';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CategoryProps } from "@/type";
import Image from "next/image";

export default function CarouselCat() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/categories`;
            try {
                const data = await getData(endpoint);
                setCategories(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);
  return (
    <div className="hidden xl:flex items-center justify-center w-full mt-2">
              <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              opts={{
                align: "start",
                active:true,
                loop: true,

              }}
          
              className='flex items-center justify-center'>
                <CarouselContent>
                    {categories.map((items:CategoryProps)=>{
                        return <CarouselItem className="basis-1/5 text-white flex items-center gap-2">
                         <Image
                         src={items.image}
                         width={30}
                         height={30}
                         className="rounded-lg"
                         alt={items.name} 
                         />
                         {items.name}   
                        </CarouselItem>
                    })}
                </CarouselContent>
                <CarouselPrevious  className="-left-2"/>
                <CarouselNext className="-right-2"/>
            </Carousel> 
    </div>
  )
}
