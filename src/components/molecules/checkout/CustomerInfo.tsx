import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import Span from '@/components/atoms/Span'
import Textarea from '@/components/atoms/Textaria'

import React from 'react'

const CustomerInfo = () => {
  return (
    <div className='p-4 shadow-sm border  rounded-md'>
        <CardTitle className='font-medium lg:text-xl flex gap-2 items-center'>
  <Span className='bg-red-100 h-8 w-8 rounded-full flex items-center justify-center text-pink-600'>1</Span> 
  Customer Information</CardTitle>
  <hr className='mt-2'/>

<div className='mt-4 flex items-center gap-2'>
<div className='flex flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>First Name</Label>
    <Input placeholder='First Name' type='text'/>
  </div>

  <div className='flex flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>Last Name</Label>
    <Input placeholder='Last Name' type='text'/>
  </div>
</div>

<div className='flex mt-2 flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>Address</Label>
    <Input placeholder='Address' type='text'/>
  </div>

  <div className='mt-2 flex flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>Mobile</Label>
    <Input placeholder='Mobile' type='text'/>
  </div>

  <div className='mt-2 flex flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>Email</Label>
    <Input placeholder='Email' type='email'/>
  </div>

  <div className='mt-2 flex items-center gap-2'>
<div className='flex flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>City</Label>
    <Input placeholder='City' type='text'/>
  </div>

  <div className=' flex flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>Zoon</Label>
    <Input placeholder='Zoon' type='text'/>
  </div>
</div>

<div className='mt-2 flex flex-col justify-start items-start gap-2'>
    <Label htmlFor='' className='font-medium text-sm'>Message</Label>
    <Textarea
        className="w-full"
        placeholder="Enter your text here"
        rows={4}
      />
  </div>

    </div>
  )
}

export default CustomerInfo