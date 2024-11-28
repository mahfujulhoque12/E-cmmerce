import CardDescription from '@/components/atoms/CardDescription'
import CardTitle from '@/components/atoms/CardTitle'
import React from 'react'
import { MdChair } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";

import { AiOutlineMessage } from "react-icons/ai";



const FeedbackCus = () => {
  return (

    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='flex justify-center items-center gap-4 p-4 shadow-md border rounded-md cursor-pointer'>

     <div className=''>
     <MdChair size={50} className='text-white bg-black p-2 rounded-full'/>

      </div>
      <div>
          <CardTitle className='text-lg font-semibold'>Furnitur Finder</CardTitle>
          <CardDescription className='text-sm font-medium'>Find Your Funniture Easily</CardDescription>
      </div>
        </div>
        <div className='flex justify-center items-center gap-4 p-4 shadow-md border rounded-md cursor-pointer'>

<div className=''>
<AiOutlineMessage   size={50} className='text-white bg-black p-2 rounded-full'/>

 </div>
 <div>
     <CardTitle className='text-lg font-semibold'>
     Raise a Complain</CardTitle>
     <CardDescription className='text-sm font-medium'>Share your experience</CardDescription>
 </div>
   </div>
   <div className='flex justify-center items-center gap-4 p-4 shadow-md border rounded-md cursor-pointer'>

<div className=''>
<CiCircleQuestion size={50} className='text-white bg-black p-2 rounded-full'/>

 </div>
 <div>
     <CardTitle className='text-lg font-semibold'>Online Support</CardTitle>
     <CardDescription className='text-sm font-medium'>Get Online Support

</CardDescription>
 </div>
   </div>
   <div className='flex justify-center items-center gap-4 p-4 shadow-md border rounded-md cursor-pointer'>

<div className=''>
<IoSettings  size={50} className='text-white bg-black p-2 rounded-full'/>

 </div>
 <div>
     <CardTitle className='text-lg font-semibold'>Servicing Center</CardTitle>
     <CardDescription className='text-sm font-medium'>Repair Your Furniture</CardDescription>
 </div>
   </div>
    </div>
   
  )
}

export default FeedbackCus