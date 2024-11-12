'use client'
import { useEffect, useState } from "react";
import { CategoryProps } from "../../type";
import { getData } from "@/lib";
import { config } from "@/config";
import TextSplit2 from "../TextSplit2";
import CardCategories from "./CardCategories";

const Categories = () => {
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
    <section className="container mx-auto px-3 sm:px-0">
      <div className="mb-10 mt-10">
        <div className="flex items-center justify-between">
          <TextSplit2
                    name='Popular Categories'
                    className='flex gap-3'
                    classNameAll='flex flex-row text-xl text-black dark:text-white sm:text-3xl font-bold '
                    classNameCharc='-mr-2'
                                    />
        </div>
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-600 mt-3" />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((item: CategoryProps) => (
         <CardCategories
         key={item._id}
          category={item}
         />
        ))}
      </div>
    </section>
  );
};

export default Categories;
