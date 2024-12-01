import { Button } from '@/components/atoms/Button'
import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Paragraph from '@/components/atoms/Paragraph'
import payment from '/public/subscribe/payment1.png'
import React from 'react'
import Image from 'next/image'

const Subscribe = () => {
  return (
    <div> 
        <CardTitle className='font-semibold text-white'>Newsletter</CardTitle>
    <p className="bg-gray-200 w-full h-[2px] mt-2 relative">
    <span className="bg-sky-700 w-[30%] h-[2px] absolute top-0 left-0"></span>
    </p>
    
    <div className='mt-5'>
        <Input placeholder='Your Email' className='bg-white'/>
        <Button variant="subscribeBtn" className='mt-3'>Subscribe</Button>
    </div>
    <Paragraph className='text-gray-400 lg:text-sm mt-4'>Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</Paragraph>
    <Image src={payment} width={500} height={100} alt='img' className='mt-5'/>
    </div>
    
  )
}

export default Subscribe