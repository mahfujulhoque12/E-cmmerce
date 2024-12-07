import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import Paragraph from '@/components/atoms/Paragraph'
import React from 'react'

const Availability = () => {
  return (
    <div className="shadow-md border rounded-md p-4 relative mt-5">
    <Paragraph className="text-sm lg:text-lg font-semibold">
    Availability
    </Paragraph>
    <p className="bg-gray-200 left-0 w-full h-[2px] mt-2 absolute"></p>

    <div className='mt-10'>
        <div className='flex items-center gap-5'>
        <Input type='checkbox' className='bg-none border-none shadow-none w-5 h-5'/>
        <Label htmlFor='' className='text-sm lg:text-base font-medium'> In Stock</Label>
        </div>
        
        <div className='flex items-center gap-5 mt-3'>
        <Input type='checkbox' className='bg-none border-none shadow-none w-5 h-5'/>
        <Label htmlFor='' className='text-sm lg:text-base font-medium'> Pre Order</Label>
        </div>

        <div className='flex items-center gap-5 mt-3'>
        <Input type='checkbox' className='bg-none border-none shadow-none w-5 h-5'/>
        <Label htmlFor='' className='text-sm lg:text-base font-medium'> Up Coming</Label>
        </div>
    </div>
    
    </div>
  )
}

export default Availability