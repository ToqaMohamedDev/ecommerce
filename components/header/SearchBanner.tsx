import React, { useEffect, useState } from 'react';
import useUserStore from '@/lib/counterStore';
import { config } from '@/config';
import { getData } from '@/lib';
import { ApiResponseProduct, ProductProps } from '@/type';
import CardProduct from '../product/CardProduct';

export default function SearchBanner() {
  const { search } = useUserStore();
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    const endpoint = `${config?.baseUrl}/products?keyword=${search}&limit=15`;
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
    if (search) {
      fetchProducts();
    }
  }, [search]);

  return (
    <div>
      {search && (
        <div className="absolute bg-background top-[100%] max-h-[500px] w-full py-5  z-50 overflow-y-scroll  shadow-sm shadow-primary scrollbar-hide">
          {isLoading ? (
            <div className="py-10 w-full flex items-center justify-center">
              <p className="text-xl font-normal">Loading products...</p>
            </div>
          ) : error ? (
            <div className="py-10 bg-gray-50 w-full flex items-center justify-center">
              <p className="text-xl font-normal text-red-500">{error}</p>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 container mx-auto sm:px-0 px-4">
              {products.map((item: ProductProps) => (
                <CardProduct key={item?._id} item={item} />
              ))}
            </div>
          ) : (
            <div className="py-10  w-full flex items-center justify-center">
              <p className="text-xl font-normal">
                {/^[a-zA-Z]+$/.test(search) ? (
                  <div>
                    Product "<span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{search}</span>" not found. Search for your product.
                  </div>
                ) : (
                  <div>
                    غير موجود{' '}
                    <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{search}</span>
                    {' '}ابحث عن منتجك
                  </div>
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
