'use client'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Button } from '../ui/button'

// Define a type for the user data based on the expected API response
interface User {
    data: {
        name: string;
        email: string;
        // Add other fields as necessary based on your response structure
    }
}

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
    const [user, setUser] = useState<User | null>(null); // Specify user type
    const [loading, setLoading] = useState<boolean>(false);

    const fetchUserData = async () => {
        try {
            setLoading(true); // Start loading
            const response = await fetch('http://localhost:5000/api/v1/auth/getMeNext', {
                method: 'GET',
                credentials: 'include',  // Include cookies with request
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            console.log(data);
            setUser(data); // Set user data
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message); // Handle error
            }
        } finally {
            setLoading(false); // Stop loading when data is fetched or an error occurs
        }
    };

    useEffect(() => {
        fetchUserData(); // Call the function when the component mounts
    }, []);

    return (
        <section className='container mx-auto py-4 overflow-hidden px-4 sm:px-0'>
            {loading && <p>Loading...</p>} {/* Optional: Show loading text */}
            {user && <p>Welcome, {user.data.name}</p>} {/* Display user info */}
            
            <Carousel>
                <CarouselContent>
                    {databanner.map((items, index) => (
                        <CarouselItem
                            key={index}
                            className="h-[450px] bg-cover bg-center rounded-2xl overflow-x-hidden"
                            style={{
                                backgroundImage: `url('${items.image}')`,
                                backgroundAttachment: 'fixed',
                            }}
                        >
                            <div className="relative flex items-center justify-center h-full w-full text-white">
                                <h1 className="absolute bottom-20 left-5 text-4xl font-bold">
                                    <Button variant={'ghost'} className='font-semibold'>
                                        {items.name}
                                    </Button> 
                                </h1>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel> 
        </section>
    );
}
