'use client'
import React, { useEffect, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '../ui/button'
import ViewModel from '../3dModel/ViewModel'
import TextSplit from '../TextSplit'
const databanner = [
    {
        image: '/banner/banner3.avif',
        name: 'Learn More',
    },
    {
        image: '/banner/banner2.avif',
        name: 'Learn More',
    },

    {
        image: '/banner/banner4.webp',
        name: 'Learn More',
    },
]
export default function Hero() {
    const [error, setError] = useState<string | null>(null); // Declare the error state with string | null type
    const [user, setUser] = useState<any>(null); // Or a specific type for user data if you know the structure
    const [loading, setLoading] = useState<boolean>(false);
  
    const fetchUserData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch('http://localhost:8000/api/v1/auth/getMeNext', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',  // Include cookies with request
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
  
        const data = await response.json();
        console.log("EEeeeeeeeeeeeeeeeeeeee");
        console.log(data);
        setUser(data.data); // Set user data
      } catch (err: unknown) {
        // Narrow the error type to 'Error' for TypeScript
        if (err instanceof Error) {
          setError(err.message); // Set the error message when caught
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false); // Stop loading when data is fetched or an error occurs
      }
    };
  
    useEffect(() => {
      fetchUserData(); // Call the function when the component mounts
    }, []);
  
    return (
        <section className='container mx-auto py-4  overflow-hidden px-4 sm:px-0'>
    
          <p>AlaaTaha</p>
           <Carousel>
                <CarouselContent>
                    {databanner.map((items,index) => {
                        return <CarouselItem
                         key={index}
                         className="h-[450px] bg-cover bg-center rounded-2xl overflow-x-hidden" style={{
                            backgroundImage: `url('${items.image}')`,
                            backgroundAttachment: 'fixed',
                        }}>
                            <div className="relative flex items-center justify-center h-full w-full text-white ">
                                <h1 className="absolute bottom-20 left-5 text-4xl font-bold">
                                   <Button variant={'ghost'} className='font-semibold'>
                                    {items.name}
                                    </Button> 
                                </h1>
                            </div>
                        </CarouselItem>
                    })}
                </CarouselContent>
            </Carousel> 
        </section>
    )
}
