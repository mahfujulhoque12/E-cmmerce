"use client";
import { cardData } from "@/data/newArraival";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft} from "react-icons/fa6";


interface ProductImg {
  slug: string;
}

const ProductImg: React.FC<ProductImg> = ({ slug }) => {
  const allInfo = cardData.find((card) => card.slug == slug);
  const [mainImage, setMainImage] = useState<string | null>(allInfo?.image ?? null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle carousel effect
  useEffect(() => {
    if (allInfo?.moreImg?.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % allInfo.moreImg.length
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [allInfo?.moreImg]);

  // Update the main image when the index changes
  useEffect(() => {
    if (allInfo?.moreImg?.[currentIndex]) {
      setMainImage(allInfo.moreImg[currentIndex]);
    }
  }, [currentIndex, allInfo?.moreImg]);

  // Handle next and previous navigation
  const handleNext = () => {
    if (allInfo?.moreImg?.length) {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % allInfo.moreImg.length
      );
    }
  };

  const handlePrev = () => {
    if (allInfo?.moreImg?.length) {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + allInfo.moreImg.length) % allInfo.moreImg.length
      );
    }
  };

  return (
    <div>
         <div className="relative">
      {/* Main Image */}
      <Image
        src={mainImage as string}
        alt="img"
        width={1000}
        height={350}
        className="h-[350px] object-contain rounded-md shadow-md border p-3"
      />

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <FaAngleLeft  className="text-xl text-gray-700" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <FaAngleRight  className="text-xl text-gray-700" />
      </button>

     
    </div>
     {/* Thumbnails */}
     <div className="flex gap-3 justify-center shadow-md p-2 rounded-md border mt-5">
        {allInfo?.moreImg?.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setMainImage(img);
              setCurrentIndex(index); // Stop carousel on hover
            }}
          >
            <Image
              src={img}
              alt="img"
              width={1000}
              height={600}
              className="h-[80px] w-[80px] shadow-md object-cover rounded-md cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default ProductImg;
