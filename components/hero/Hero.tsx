// Hero.tsx
'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Button } from '../ui/button'

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
    return (
        <section className='container mx-auto py-4 overflow-hidden px-4 sm:px-0'>
            <Carousel>
                <CarouselContent>
                    {databanner.map((items, index) => (
                        <CarouselItem
                            key={index}
                            className="h-[450px] relative bg-cover bg-center rounded-2xl overflow-hidden"
                            style={{
                                backgroundImage: `url(${items.image})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                <div className="text-center">
                                    <Button variant="ghost" className="text-white bg-black border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
