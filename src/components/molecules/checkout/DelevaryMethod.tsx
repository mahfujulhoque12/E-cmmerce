import React from 'react'
import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import Paragraph from '@/components/atoms/Paragraph'
import Span from '@/components/atoms/Span'

const DelevaryMethod = () => {
  return (
    <div className='p-4 shadow-sm border rounded-md h-full'>

    <CardTitle className='font-medium lg:text-xl flex gap-2 items-center'>
      <Span className='bg-red-100 h-8 w-8 rounded-full flex items-center justify-center text-pink-600'>3</Span>
     Delevary Method
    </CardTitle>
    <hr className='mt-2'/>
  
    <Paragraph className='mt-4 font-medium text-sm'>Select a delevary method</Paragraph>
  
    <div className="mt-5 flex gap-4">
      <Input type='radio' name="delevaryMethod" id="cod" className='h-5 w-5'/>
      <Label htmlFor='cod' className='text-sm font-medium'> Home Delivery - 60৳ </Label>
    </div>

    <div className="mt-2 flex gap-4">
      <Input type='radio' name="delevaryMethod" id="online" className='h-5 w-5'/>
      <Label htmlFor='online' className='text-sm font-medium'> Store Pickup - 0৳ </Label>
    </div>

    <div className="mt-2 flex gap-4">
      <Input type='radio' name="delevaryMethod" id="online" className='h-5 w-5'/>
      <Label htmlFor='online' className='text-sm font-medium'> Request Express - Charge Applicable </Label>
    </div>
  

  </div>
  
  )
}

export default DelevaryMethod