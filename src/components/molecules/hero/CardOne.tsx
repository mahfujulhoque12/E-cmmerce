
import CardDescription from '@/components/atoms/CardDescription'
import CardTitle from '@/components/atoms/CardTitle'
import React from 'react'
import Link from 'next/link';

const CardOne = () => {
  return (
    <div className='p-3 bg-gray-100 rounded-sm shadow'>
        <CardTitle className='text-xl font-bold'>Chose your Furnitue </CardTitle>
        <CardDescription className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus sequi tempore error, nisi ipsa architecto tenetur voluptate</CardDescription>
        <div className="mt-3">
        <Link href="/shop" className=' px-3 py-1.5 bg-black text-white font-medium text-sm shadow-sm rounded-md'>Purchase</Link>
        </div>
    </div>
  )
}

export default CardOne