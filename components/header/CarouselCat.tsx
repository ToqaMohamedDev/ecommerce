'use client'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {CategoryProps } from "@/type";
import Image from "next/image";
import useUserStore from '@/lib/counterStore' 
import Link from "next/link";

export default function CarouselCat() {
  const {  categories, setUID } = useUserStore(); 
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
                        return <CarouselItem 
                        key={items._id} className="basis-1/5">
                          
                         <Link 
                         className=" text-white flex items-center gap-2"
                         href={`/${items.name}`}
                         onClick={()=>setUID(`${items._id}`)} 
                         >
                            <Image
                         src={items.image}
                         width={30}
                         height={30}
                         className="rounded-lg"
                         alt={items.name} 
                         />
                         {items.name} 
                         </Link>  
                        </CarouselItem>
                    })}
                </CarouselContent>
                <CarouselPrevious  className="-left-2"/>
                <CarouselNext className="-right-2"/>
            </Carousel> 
    </div>
  )
}
