import React from 'react'
import image1 from '/public/future/kids.png';
import image2 from '/public/future/office.png';
import image3 from '/public/future/house.png';
import image4 from '/public/future/bachelor.png';
import image5 from '/public/future/bed-room.png';
import image6 from '/public/future/leather.png';
import image7 from '/public/future/kids.png';
import image8 from '/public/future/glass1.png';
import image9 from '/public/future/wood.png';
import Image from 'next/image';
import CardDescription from '@/components/atoms/CardDescription';
import Link from 'next/link';
import CardTitle from '@/components/atoms/CardTitle';


type CardData = {
    id:number;
    image:string;
    title:string;
}
const cardData : CardData [] =[
    {
        id:1,
        image:image1.src,
        title:"Kid's Furniture",
    },
    {
        id:2,
        image:image2.src,
        title:"Office Furniture",
    },    
    {
        id:3,
        image:image3.src,
        title:"Home Furniture",
    },    
    {
        id:4,
        image:image4.src,
        title:"Bachelor Furniture",
    },    
    {
        id:5,
        image:image5.src,
        title:"Bed Room Furniture",
    },    
    {
        id:6,
        image:image6.src,
        title:"Leather Furniture",
    },    
    {
        id:7,
        image:image7.src,
        title:"Glass Furniture",
    },    
    {
        id:8,
        image:image8.src,
        title:"Wood Furniture",
    },    
    {
        id:9,
        image:image9.src,
        title:"Fabric Furniture",
    },    
   
     
    
]

const RecentView = () => {
  return (
   <div>
     <CardTitle className='text-center font-semibold lg:text-xl'>Recent View Category</CardTitle>
    <div className='mt-5 grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
        {cardData.map((card)=>(
            <div key={card.id} className='p-2 border rounded-md shadow-md group hover:scale-[101%] transition-all duration-300'>
                <Link href="#">
                <div className='flex justify-center items-center'>
                <Image src={card.image} width={250} height={200} alt={card.title} className='h-[100px] w-full object-contain'/>
                </div>
                <CardDescription className='text-sm font-normal mt-2 group-hover:text-sky-700 transition-colors duration-150'>{card.title}</CardDescription>
                </Link>
            </div>
        ))}
    </div>
   </div>
  )
}

export default RecentView