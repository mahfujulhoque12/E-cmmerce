"use client"
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
  
import {useRouter} from 'next/navigation';
import { cardData } from "@/data/bestSelling";


const BestSallerProduct = () => {
  const router = useRouter()
  const handleDetaisl = (slug:string) =>{
    router.push(`best-selling/${slug}`)
  } 
  return (
<div className="relative mt-8">
      <Carousel>
        <CarouselContent>
          {cardData.map((card) => (
            <CarouselItem key={card.id} className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div onClick={()=>handleDetaisl(card.slug)} className="border shadow-md hover:shadow-lg rounded-md relative cursor-pointer group flex flex-col h-full">
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

export default BestSallerProduct