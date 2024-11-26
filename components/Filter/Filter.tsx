'use client'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const brands = [
    "INTEL",
    "AMD",
    "SAMSUNG",
    "NVIDIA",
];


export default function Filter() {
    const [openItems, setOpenItems] = useState(["item-1", "item-2", "item-3"]); // افتراضيًا جميع العناصر مفتوحة
    const [value, setValue] = useState<number[]>([500, 22000]);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        if (event.target instanceof HTMLInputElement) {
            const newValue = [...value];
            newValue[index] = Number(event.target.value);
            setValue(newValue);
        }
    };
    return (
        <Accordion
            type="multiple"
            value={openItems}
            onValueChange={(values) => setOpenItems(values)} // تحديث العناصر المفتوحة
        >
            <AccordionItem value="item-1" >
                <AccordionTrigger className='font-bold text-md'>Price</AccordionTrigger>
                <AccordionContent>
                    <Box display="flex" flexDirection="column" alignItems="center" width="170px" mx="auto" mt={4}>
                        <Slider
                            value={value}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            min={500}
                            max={22000}
                            sx={{
                                color: 'var(--slider-color)',// لتغيير اللون الأساسي
                                height: 2, // لتغيير السُمك
                                '& .MuiSlider-thumb': {
                                    width: 15, // لتكبير الدائرة
                                    height: 15,
                                    backgroundColor: 'primary', // تغيير لون المقبض
                                },
                                '& .MuiSlider-track': {
                                    border: 'none',
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 0.5,
                                    backgroundColor: 'gray', // لون المسار السفلي
                                },
                            }}
                        />
                        <Box display="flex" gap={1} justifyContent="space-between" alignItems='center' mt={2} zIndex={0}>
                            <input
                                type="text"
                                value={value[0]}
                                onChange={(e) => handleInputChange(e, 0)}
                                className="bg-white w-[70px] outline-none dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-sm p-2"
                                placeholder="Enter value"
                            />
                            <input
                                type="text"
                                value={value[1]}
                                onChange={(e) => handleInputChange(e, 1)}
                                className="bg-white w-[70px] outline-none dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-sm p-2"
                                placeholder="Enter value"
                            />
                            <div className='font-medium text-md'>L.E</div>
                        </Box>
                    </Box>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='font-bold text-md'>Availability</AccordionTrigger>
                <AccordionContent className='space-y-2'>
                    <div className="flex items-center space-x-2 ">
                        <Checkbox id="terms1" />
                        <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            In Stock
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                        >
                            Out OF Stock
                        </label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='font-bold text-md'>Brand</AccordionTrigger>
                <AccordionContent>
                    {brands.map((item,index) => {
                        return <div 
                        key={index}
                        className='text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 pb-1 cursor-pointer'>
                            {item}
                        </div>
                    })}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
