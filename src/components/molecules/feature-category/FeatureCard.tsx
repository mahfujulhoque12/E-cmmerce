import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardDescription from '@/components/atoms/CardDescription';

import image1 from '/public/future/kids.png';
import image2 from '/public/future/office.png';
import image3 from '/public/future/house.png';
import image4 from '/public/future/bachelor.png';
import image5 from '/public/future/bed-room.png';
import image6 from '/public/future/leather.png';
import image7 from '/public/future/kids.png';
import image8 from '/public/future/glass1.png';
import image9 from '/public/future/wood.png';
import image10 from '/public/future/fabric.png';
import image11 from '/public/future/metal.png';
import image12 from '/public/future/outdoor.png';
import image13 from '/public/future/mordan.png';
import image14 from '/public/future/normal1.png';
import image15 from '/public/future/luxzary.png';
import image16 from '/public/future/light.png';

type CardData = {
  id: number;
  image: string; // Use StaticImageData for imported images
  title: string;
  href: string;
};

const cardData: CardData[] = [
  { id: 1, image: image1.src,
     title: "Kid's Furniture",
     href: '/shop?category=kids-furniture' },

  { id: 2, image: image2.src,
     title: 'Office Furniture',
     href: '/shop?category=office-furniture' },

  { id: 3, image: image3.src, 
    title: 'Home Furniture', 
    href: '/shop?category=home-furniture' },

  { id: 4, image: image4.src,
     title: 'Bachelor Furniture',
     href: '/shop?category=bachelor-furniture' },

  { id: 5, image: image5.src,
     title: 'Bed Room Furniture',
     href: '/shop?category=bed-room-furniture' },

  { id: 6, image: image6.src, 
    title: 'Leather Furniture',
     href: '/shop?category=leather-furniture' },

  { id: 7, image: image7.src,
     title: 'Wood Furniture',
     href: '/shop?category=wood-furniture' },

  { id: 8, image: image8.src,
     title: 'Glass Furniture',
     href: '/shop?category=glass-furniture' },

  { id: 9, image: image9.src,
     title: 'Fabric Furniture',
     href: '' },

  { id: 10, image: image10.src,
     title: 'Wall Art & Mirrors',
     href: '' },

  { id: 11, image: image11.src, 
    title: 'Metal Furniture', 
    href: '' },

  { id: 12, image: image12.src,
     title: 'Outdoor Furniture', 
    href: '' },

  { id: 13, image: image13.src,
     title: 'Modern Furniture', 
    href: '' },

  { id: 14, image: image14.src, 
    title: 'Normal Furniture',
     href: '' },

  { id: 15, image: image15.src, 
    title: 'Luxury Furniture',
     href: '' },

  { id: 16, image: image16.src,
     title: 'Light Furniture', 
    href: '' },
];

const FeatureCard = () => {
  return (
    <div className="mt-5 grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="p-2 border rounded-md shadow-md group hover:scale-[101%] transition-all duration-300"
        >
          <Link href={card.href}>
            <div className="flex justify-center items-center">
              <Image
                src={card.image}
                width={250}
                height={200}
                alt={card.title}
                className="h-[100px] w-full object-contain"
              />
            </div>
            <CardDescription className="text-sm font-normal mt-2 group-hover:text-sky-700 transition-colors duration-150">
              {card.title}
            </CardDescription>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
