import Heading from '@/components/atoms/Heading'
import React from 'react'
import brand1 from '/public/brand/brand1.png';
import brand2 from '/public/brand/brand2.png';
import brand3 from '/public/brand/brand3.png';
import brand4 from '/public/brand/brand4.png';
import brand5 from '/public/brand/brand5.png';
import brand6 from '/public/brand/brand6.png';
import brand7 from '/public/brand/brand7.png';
import Image from 'next/image';

type BrandData = {
  id:number;
  img:string;
}

const brandData : BrandData [] =[
  {
    id:1,
    img:brand1.src,
  },
  {
    id:2,
    img:brand2.src,
  },
  {
    id:3,
    img:brand3.src,
  },
  {
    id:4,
    img:brand4.src,
  },
  {
    id:5,
    img:brand5.src,
  },
  {
    id:6,
    img:brand6.src,
  },
  {
    id:7,
    img:brand7.src,
  },

]


const BrandCart = () => {
  return (
    <div>
      <Heading className='text-center'>Our Partner</Heading>
    
      <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
      {brandData.map((brand) => (
        <div key={brand.id} >
          <Image src={brand.img} width={300} height={150} alt="img" className='w-[150px] sm:w-full  h-[80px] sm:h-full mt-4'/>
        </div>
      ))} 
    </div>    
    </div>
  )
}

export default BrandCart