'use client';
import { ApiResponseProduct, ProductProps } from '@/type';
import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import ReactPaginate from 'react-paginate';
import { config } from '@/config';
import { getData } from '@/lib';

interface ItemsProps {
  currentItems: ProductProps[];
}

const Items = ({ currentItems }: ItemsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {currentItems &&
        currentItems.map((item: ProductProps) => (
          <CardProduct key={item._id} item={item} />
        ))}
    </div>
  );
};

export default function Pagination() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // الصفحة الحالية (الصفرية)
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (page: number) => {
    const endpoint = `${config?.baseUrl}/products?page=${page}&limit=20`; // جرّب limit مختلف هنا
    try {
      setLoading(true);
      const response: ApiResponseProduct = await getData(endpoint);
      if (response && response.data) {
        setProducts(response.data);

        setPageCount(response.paginationResult.numberOfPages); // عدد الصفحات من الـ API
        console.log('Products:', response.data);
        console.log('Number of Pages:', response.paginationResult.numberOfPages);
      }
    } catch (error) {
      console.error('Error fetching products data', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage + 1); // تحويل من صفرية إلى عادية
  }, [currentPage]);

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected); // التحديث مباشرةً بناءً على `selected`
    console.log('Selected Page:', event.selected);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Items currentItems={products} />
          <ReactPaginate
            nextLabel="Next"
            previousLabel="Previous"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            forcePage={currentPage} // مزامنة الصفحة الحالية مع `currentPage`
            containerClassName="flex rounded-lg text-base font-semibold py-10 items-center justify-center gap-1"
            pageLinkClassName="w-9 h-9 text-white rounded-lg flex justify-center items-center"
            pageClassName="bg-black rounded-lg hover:bg-primary"
            activeClassName="text-white rounded-lg bg-primary"
            nextClassName="bg-black h-9 px-2 flex items-center rounded-lg text-white hover:bg-primary" 
            previousClassName="bg-black h-9 px-2 flex items-center rounded-lg text-white hover:bg-primary"
          />
        </>
      )}
    </div>
  );
}
