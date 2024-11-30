import React from "react";
import image1 from "/public/feature-products/bed1.png";
import image2 from "/public/feature-products/bed2.png";
import image3 from "/public/feature-products/bed3.png";
import image4 from "/public/feature-products/bed4.png";
import image5 from "/public/feature-products/bed5.png";
import image6 from "/public/feature-products/kid1.png";
import image7 from "/public/feature-products/kid3.png";
import image8 from "/public/feature-products/chair1.png";
import image9 from "/public/feature-products/chair2.png";
import image10 from "/public/feature-products/light1.png";
import image11 from "/public/feature-products/light2.png";
import image12 from "/public/feature-products/light3.png";
import image13 from "/public/feature-products/light4.png";
import image27 from "/public/feature-products/office1.png";
import image15 from "/public/feature-products/office2.png";
import image16 from "/public/feature-products/office3.png";
import image17 from "/public/feature-products/office4.png";
import image18 from "/public/feature-products/office5.png";
import image19 from "/public/feature-products/sofa1.png";
import image20 from "/public/feature-products/sofa2.png";
import image21 from "/public/feature-products/sofa3.png";
import image22 from "/public/feature-products/sofa4.png";
import image23 from "/public/feature-products/sofa5.png";
import image24 from "/public/feature-products/sofa6.png";
import image25 from "/public/feature-products/table1.png";
import image26 from "/public/feature-products/table2.png";
import image28 from "/public/feature-products/table3.png";
import image29 from "/public/feature-products/table4.png";
import image30 from "/public/feature-products/table5.png";
import { title } from "process";
import Image from "next/image";
import CardTitle from "@/components/atoms/CardTitle";
import Paragraph from "@/components/atoms/Paragraph";
import Span from "@/components/atoms/Span";

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
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Simpel bed for you and your family",
    slug: createSlug(title),
    image: image1.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 2,
    title: "Speacial bed for you",
    slug: createSlug(title),
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 3,
    title: "Normal bed for you",
    slug: createSlug(title),
    image: image3.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 4,
    title: "Luxzary bed for you",
    slug: createSlug(title),
    image: image4.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 5,
    title: "Classic bed for you",
    slug: createSlug(title),
    image: image5.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 6,
    title: "Kid's Furnitue for you",
    slug: createSlug(title),
    image: image6.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 7,
    title: "Classic Kid's Furnitue",
    slug: createSlug(title),
    image: image7.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 8,
    title: "Simple Chair For you",
    slug: createSlug(title),
    image: image8.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 9,
    title: "Normal Chair For you",
    slug: createSlug(title),
    image: image9.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 10,
    title: "Simple Light For you",
    slug: createSlug(title),
    image: image10.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 11,
    title: "Normal Light For you",
    slug: createSlug(title),
    image: image11.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 12,
    title: "Classic Light For you",
    slug: createSlug(title),
    image: image12.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 13,
    title: "Luxzary Light For you",
    slug: createSlug(title),
    image: image13.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 14,
    title: "Luxzary Office Chair",
    slug: createSlug(title),
    image: image15.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 15,
    title: "Simple Office Chair",
    slug: createSlug(title),
    image: image27.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 16,
    title: "Normal Office Chair",
    slug: createSlug(title),
    image: image16.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 17,
    title: "Clissic Office Chair",
    slug: createSlug(title),
    image: image17.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 18,
    title: "Luxzary Office Chair two",
    slug: createSlug(title),
    image: image18.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 19,
    title: "Luxzary Office Sofa",
    slug: createSlug(title),
    image: image19.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 20,
    title: "Luxzary Office Chair two",
    slug: createSlug(title),
    image: image20.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 21,
    title: "Luxzary Office Sofa Three",
    slug: createSlug(title),
    image: image21.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 22,
    title: "Simplle Office Sofa ",
    slug: createSlug(title),
    image: image22.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 23,
    title: "Noraml Office Sofa",
    slug: createSlug(title),
    image: image23.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 24,
    title: "Classic Office sofa",
    slug: createSlug(title),
    image: image24.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 25,
    title: "Classic Office Table",
    slug: createSlug(title),
    image: image25.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 26,
    title: "Noraml Office Table",
    slug: createSlug(title),
    image: image26.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 27,
    title: "Classic Office Table Two",
    slug: createSlug(title),
    image: image28.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 28,
    title: "Noraml Office Table",
    slug: createSlug(title),
    image: image30.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
  {
    id: 29,
    title: "Luxzary Office Table",
    slug: createSlug(title),
    image: image29.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
  },
];

const FeatureProductCard = () => {
  return (
    <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {cardData.map((card) => (
        <div
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
