
'use client';
import { CategoryProps, ApiResponse } from "@/type"; 
import TextSplit2 from "../TextSplit2";
import CardCategories from "./CardCategories";
import useUserStore from '@/lib/counterStore' 

const Categories = () => {
  const {  categories } = useUserStore(); 

  return (
    <section className="container mx-auto px-3 sm:px-0">
      <div className="mb-10 mt-10">
        <div className="flex items-center justify-between">
          <TextSplit2
            name='Categories'
            className='flex gap-3'
            classNameAll='flex flex-row text-xl text-black dark:text-white sm:text-3xl font-bold'
            classNameCharc='-mr-1'
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
