"use client"
import React from "react";
import Image from "next/image";
import CardTitle from "@/components/atoms/CardTitle";
import Paragraph from "@/components/atoms/Paragraph";
import Span from "@/components/atoms/Span";
import { useRouter } from "next/navigation";
import { cardData } from "@/data/featureProduct";


const FeatureProductCard = () => {
  const router = useRouter()
  const handleDetails = (slug:string) =>{
    router.push(`/feature-products/${slug}`)
  }
  return (
    <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {cardData.map((card) => (
        <div
        onClick={()=> handleDetails(card.slug)}
          key={card.id}
          className="border shadow-md hover:shadow-lg rounded-md relative cursor-pointer group flex flex-col h-full "
        >
          <div className="px-4 flex justify-center items-center">
            <Image
              src={card.image}
              width={300}
              height={250}
              alt={card.title}
              className=" h-[200px] object-contain mt-5"
            />
          </div>
          <p className="w-full h-[2px] bg-gray-200"></p>
          <div className="p-4 flex flex-col flex-grow justify-between">
            <CardTitle className="font-normal text-base group-hover:font-semibold group-hover:text-sky-700 transition-all duration-200 ">
              {card.title}
            </CardTitle>

            <div className="mt-4 flex items-center justify-start gap-3 ">
                <Paragraph className="text-base lg:text-lg font-semibold text-sky-700 mt-auto">
                {card.price}৳
                </Paragraph>
                <Span className="text-xs text-gray-500"><del>{card.oldPrice}৳</del></Span>
            </div>
            <Span className="absolute top-2 left-0 bg-purple-500 px-3 py-1 rounded-r-full text-sm font-medium text-white">save:{card.discount}৳</Span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureProductCard;
