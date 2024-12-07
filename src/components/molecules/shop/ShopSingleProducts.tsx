import { Button } from "@/components/atoms/Button";
import CardTitle from "@/components/atoms/CardTitle";
import Paragraph from "@/components/atoms/Paragraph";
import Span from "@/components/atoms/Span";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  oldPrice: number;
  brand: string;
  discount: number;
  slug:string;
};

type ShopSingleProductsProps = {
  products: Product[];
};

const ShopSingleProducts: React.FC<ShopSingleProductsProps> = ({ products }) => {
  const router = useRouter()
  const handleDetails = (slug:string) =>{
    router.push(`/shop/${slug}`)
  } 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products.length > 0 ? (
        products.map((card) => (
          <div
            className="border shadow-md hover:shadow-lg rounded-md relative cursor-pointer group flex flex-col h-full"
            key={card.id}
            onClick={()=>handleDetails(card.slug)}
          >
            <div className="px-4 flex justify-center items-center overflow-hidden">
              <Image
                src={card.image}
                width={300}
                height={250}
                alt={card.title}
                className="h-[200px] object-cover mt-5 transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <p className="w-full h-[2px] bg-gray-200"></p>
            <div className="p-4 flex flex-col flex-grow justify-start">
              <Span className="text-xs text-gray-500 font-semibold uppercase">
                {card.brand}
              </Span>
              <CardTitle className="font-normal text-base group-hover:font-semibold group-hover:text-sky-700 transition-all duration-200 mt-2">
                {card.title}
              </CardTitle>

              <div className="mt-3 flex items-center justify-start gap-3">
                <Paragraph className="text-base lg:text-lg font-semibold text-sky-700 mt-auto">
                  {card.price}৳
                </Paragraph>
                <Span className="text-xs text-gray-500">
                  <del>{card.oldPrice}৳</del>
                </Span>
              </div>
              <Span className="absolute top-2 left-0 bg-purple-500 px-3 py-1 rounded-r-full text-sm font-medium text-white">
                Save: {card.discount}৳
              </Span>
              <div>
                <Button
                  variant="mediumRoundedBtn"
                  className="bg-white text-sky-700 hover:text-sky-800 hover:bg-white"
                >
                  See Details
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center mt-5">
          <Paragraph className="text-lg font-semibold text-gray-600">
            No products found
          </Paragraph>
        </div>
      )}
    </div>
  );
};

export default ShopSingleProducts;
