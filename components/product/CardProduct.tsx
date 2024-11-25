import { MdOutlineStarOutline } from "react-icons/md";
import { ProductProps } from "../../type";
import ProductCardSideNav from "./ProductCardSideNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  item: ProductProps;
}

export default function CardProduct({ item }: Props) {
  const navigation = useRouter();


  const handleProduct = () => {
    navigation.push(`/product/${item?._id}`);

  };
  return (
    <div className="border border-gray-200
     dark:border-gray-600 rounded-lg p-1 overflow-hidden hover:border-gray-400 dark:hover:border-black
 duration-200 cursor-pointer">
      <div className="w-full h-60 relative p-2 group">
        <div className="relative w-full h-full">
          <Image
            onClick={handleProduct}
            src={item?.imageCover}
            alt="productImage"
            className="w-full h-full rounded-md group-hover:scale-110 duration-300 object-contain"
            layout="fill"
          />
        </div>
        <ProductCardSideNav product={item} />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className="text-xs uppercase font-semibold text-lightText line-clamp-2">
          {item?.title}
        </h3>
        <h2 className="text-lg font-bold line-clamp-2">{item?.description}</h2>
        <div className="text-base text-lightText flex items-center">
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
        </div>
        <h1 className="text-blue-600 font-bold">{`$${item.price}`}</h1>
        <Button variant={'outline'} className="bg-white hover:bg-secondary rounded-full hover:text-white dark:bg-secondary dark:hover:bg-white dark:hover:text-black">Add To Cart</Button>
      </div>
  
    </div>
  )
}
