import { ProductProps } from '@/type';
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
                currentItems?.map((item: ProductProps) => (
                    <CardProduct key={item?._id} item={item} />
                ))}
        </div>
    );
};

export default function Pagination() {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const endpoint = `${config?.baseUrl}/products`;
        try {
          const data = await getData(endpoint);
          setProducts(data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      fetchData();
    }, []);

    const itemsPerPage = 15;
    const [itemOffset, setItemOffset] = useState(0);
    const [itemStart, setItemStart] = useState(1);
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      const newStart = newOffset + 1;
      setItemOffset(newOffset);
      setItemStart(newStart);
    };

    return (
        <div>
            <Items currentItems={currentItems} />
            <ReactPaginate
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel=""
                pageLinkClassName="w-9 h-9 border[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
                pageClassName="mr-6"
                containerClassName="flex text-base font-semibold py-10"
                activeClassName="bg-black text-white active"
            />
            <p>
                Products from {itemStart} to {Math.min(endOffset, products?.length)}{" "}
                of {products?.length}
            </p>
        </div>
    );
}
