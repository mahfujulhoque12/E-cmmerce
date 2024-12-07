import CardTitle from '@/components/atoms/CardTitle'
import Paragraph from '@/components/atoms/Paragraph'
import Image from 'next/image'
import React from 'react'
import customer from '/public/customer/customer.png'
import { FaStar } from 'react-icons/fa'

type CustomerData = {
    id:number;
    img:string;
    name:string;
    details:string;
}
const customerData : CustomerData[] =[
  {
    id:1,
    img:customer.src,
    name:"Md Alif",
    details:"One of the best Poduct I ever seen"
  },
  {
    id:2,
    img:customer.src,
    name:"Md Badon",
    details:"One of the best Poduct I ever seen"
  },
  {
    id:3,
    img:customer.src,
    name:"Md Nirob",
    details:"One of the best Poduct I ever seen"
  },
  {
    id:4,
    img:customer.src,
    name:"Md Joy",
    details:"One of the best Poduct I ever seen"
  },
]
const CustomerReview = () => {
  return (
    <div>
        <CardTitle className='text-center text-sm md:text-base  lg:text-lg font-semibold'>Some Customer Review</CardTitle>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 mt-4'>
            {customerData.map((data)=>(
                 <div className='p-3 border rounded-md shadow-sm' key={data.id}>
                 <div className='flex gap-3 items-center'>
                 <Image src={data.img} alt='img' width={100} height={100} className='w-[30px] h-[30px] rounded-full object-cover'/>
                 <Paragraph className='bg-gray-200 px-3 py-1 font-bold rounded-full text-xs md:text-xs lg:text-xs inline-block'>{data.name}</Paragraph>
                 </div>
                 <Paragraph className='text-sm lg:text-sm font-semibold mt-2'>{data.details}</Paragraph>
                 <div className='flex text-yellow-400 mt-2 items-center gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                 </div>
             </div>
            ))}
       
        </div>
        
    </div>
  )
}

export default CustomerReview