"use client";
import { useEffect, useState } from 'react';
import useUserStore from '@/lib/counterStore';
import { FaHome } from "react-icons/fa";
import TextSplit2 from '@/components/TextSplit2';
import Scrollable from '@/components/Scrollable';
import { Button } from '@/components/ui/button';
import { MdOutlineCancel } from "react-icons/md";

import Filter from '@/components/Filter/Filter';
import { config } from '@/config';
import { ApiResponseProduct, ProductProps } from '@/type';
import { getData } from '@/lib';
import CardProduct from '@/components/product/CardProduct';

interface PageProps {
  params: {
    category: string;
  };
}



const OneCategory = ({ params }: PageProps) => {
  const { uid } = useUserStore();
  const category = decodeURIComponent(params.category); // فك تشفير النص
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isClient, setIsClient] = useState(false);
  const fetchProducts = async () => {
    const endpoint = `${config?.baseUrl}/categories/${uid}/products`;
    setIsLoading(true);
    setError(null); // إعادة تعيين الأخطاء
    try {
      const response: ApiResponseProduct = await getData(endpoint);
      if (response && response.data) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error('Error fetching products data', err);
      setError('Failed to fetch products.');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsClient(true);
    fetchProducts();
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="container mx-auto sm:px-0 px-4">
       <Scrollable enableScroll/>
      <div className='flex gap-2 items-center justify-center py-3'>
        <FaHome className='text-gray-400' />
        <h1 className='font-semibold text-gray-400'><a href="/" className='hover:text-primary'>Home</a> / {category}</h1>
      </div>

      <TextSplit2
        className='md:flex gap-3 py-3 pb-6 hidden '
        classNameAll='flex flex-row text-xl text-black dark:text-white sm:text-3xl font-bold'
        classNameCharc='sm:-mr-2'
        name={category} />

      <div className='flex items-start '>
        <div className='hidden md:block  w-[300px] pr-4'>
          {/* reset */}
          <div className='flex items-center justify-between'>
            Filter
            <Button variant='outline'>
              reset
              <MdOutlineCancel />
            </Button>
          </div>
          <Filter/>
        </div>
        <div className='w-full '>
  {isLoading ? (
    <div className="flex items-center justify-center h-full">
      <p className="text-xl font-semibold">Loading...</p>
    </div>
  ) : error ? (
    <div className="flex items-center justify-center h-full">
      <p className="text-xl font-semibold text-red-500">{error}</p>
    </div>
  ) : products.length > 0 ? (
    <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product: ProductProps) => (
        <CardProduct key={product?._id} item={product} />
      ))}
    </div>
  ) : (
    <div className="flex items-center justify-center h-full">
      <p className="text-xl font-semibold">No products found for this category.</p>
    </div>
  )}
</div>
      </div>
  
    </section>
  );
};

export default OneCategory;
