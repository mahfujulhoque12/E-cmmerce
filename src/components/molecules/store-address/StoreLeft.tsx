import CardDescription from '@/components/atoms/CardDescription';
import CardTitle from '@/components/atoms/CardTitle';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const StoreLeft = () => {
  return (
    <div className='flex items-center justify-start gap-4'>
        <div>
        <FaLocationDot className='text-white' size={40}/>

        </div>
        <div>
            <CardTitle className='text-lg md:text-3xl font-bold text-white'>20+ Physical Stores</CardTitle>
            <CardDescription className="text-sm lg:text-base font-semibold text-white">Visit Our Store & Get Your Desired Furniture Product!</CardDescription>
        </div>
    </div>
  )
}

export default StoreLeft