import { Button } from '@/components/atoms/Button'
import CardDescription from '@/components/atoms/CardDescription'
import CardTitle from '@/components/atoms/CardTitle'
import React from 'react'

const CardOne = () => {
  return (
    <div className='p-3 bg-gray-100 rounded-sm shadow'>
        <CardTitle className='text-xl font-bold'>Chose your Furnitue </CardTitle>
        <CardDescription className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus sequi tempore error, nisi ipsa architecto tenetur voluptate</CardDescription>
        <Button variant="mediumRoundedBtn" className='mt-3 px-3 py-2'>Purchase</Button>
    </div>
  )
}

export default CardOne