import React from "react";
import image1 from "/public/new-arraival/cabinet1.png";
import image2 from "/public/new-arraival/cabinet2.png";
import image3 from "/public/new-arraival/cabinet3.png";
import image4 from "/public/new-arraival/cabinet4.png";
import image5 from "/public/new-arraival/cabinet5.png";
import image6 from "/public/new-arraival/cabinet6.png";
import image7 from "/public/new-arraival/cabinet7.png";
import image8 from "/public/new-arraival/cabinet8.png";
import image9 from "/public/new-arraival/cabinet9.png";
import image10 from "/public/new-arraival/cabinet10.png";
import { title } from "process";

import Image from "next/image";
import CardTitle from "@/components/atoms/CardTitle";
import Paragraph from "@/components/atoms/Paragraph";
import Span from "@/components/atoms/Span";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { Button } from "@/components/atoms/Button";
  

function createSlug(text: string): string {
  return text
    .toString() // Convert to string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/[\s\W-]+/g, "-") // Replace spaces and non-word characters with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading or trailing hyphens
}

type CardData = {
  id: number;
  slug: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  title: string;
  category:string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Simpel bed for you and your family",
    slug: createSlug(title),
    category:"new arraival",
    image: image1.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 2,
    title: "Speacial bed for you",
    slug: createSlug(title),
     category:"new arraival",
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 3,
    title: "Normal bed for you",
    slug: createSlug(title),
     category:"new arraival",
    image: image3.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 4,
    title: "Luxzary bed for you",
    slug: createSlug(title),
     category:"new arraival",
    image: image4.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 5,
    title: "Classic bed for you",
    slug: createSlug(title),
     category:"new arraival",
    image: image5.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 6,
    title: "Kid's Furnitue for you",
    slug: createSlug(title),
     category:"new arraival",
    image: image6.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 7,
    title: "Classic Kid's Furnitue",
    slug: createSlug(title),
     category:"new arraival",
    image: image7.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 8,
    title: "Simple Chair For you",
    slug: createSlug(title),
     category:"new arraival",
    image: image8.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 9,
    title: "Normal Chair For you",
    slug: createSlug(title),
     category:"new arraival",
    image: image9.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 10,
    title: "Simple Light For you",
    slug: createSlug(title),
     category:"new arraival",
    image: image10.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
]

const NewArraivalProduct = () => {
  return (
<div className="relative mt-8">
      <Carousel>
        <CarouselContent>
          {cardData.map((card) => (
            <CarouselItem key={card.id} className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="border shadow-md hover:shadow-lg rounded-md relative cursor-pointer group flex flex-col h-full">
                <div className="px-4 flex justify-center items-center overflow-hidden">
                  <Image
                    src={card.image}
                    width={300}
                    height={250}
                    alt={card.title}
                    className="h-[200px]  object-cover mt-5 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="w-full h-[2px] bg-gray-200"></p>
                <div className="p-4 flex flex-col flex-grow justify-start">
                   <Span className="text-xs text-gray-500 font-semibold uppercase">{card.category}</Span> 
                  <CardTitle className="font-normal text-base group-hover:font-semibold group-hover:text-sky-700 transition-all duration-200 mt-2">
                    {card.title}
                  </CardTitle>

                  <div className=" mt-3 flex items-center justify-start gap-3 ">
                    <Paragraph className="text-base lg:text-lg font-semibold text-sky-700 mt-auto">
                      {card.price}৳
                    </Paragraph>
                    <Span className="text-xs text-gray-500">
                      <del>{card.oldPrice}৳</del>
                    </Span>
                  </div>
                  <Span className="absolute top-2 left-0 bg-purple-500 px-3 py-1 rounded-r-full text-sm font-medium text-white">
                    save:{card.discount}৳
                  </Span>
                  <div>

                  <Button variant="mediumRoundedBtn" className="bg-white text-sky-700 hover:text-sky-800 hover:bg-white">See Details</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default NewArraivalProduct