import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import Paragraph from '@/components/atoms/Paragraph'
import Span from '@/components/atoms/Span'
import Image from 'next/image'
import React from 'react'

import payment from '/public/payment/payment.png'

const PaymentMethod = () => {
  return (
    <div className='p-4 shadow-sm border rounded-md h-full'>

  <CardTitle className='font-medium lg:text-xl flex gap-2 items-center'>
    <Span className='bg-red-100 h-8 w-8 rounded-full flex items-center justify-center text-pink-600'>2</Span>
    Payment Method
  </CardTitle>
  <hr className='mt-2'/>

  <Paragraph className='mt-4 font-medium text-sm'>Select a payment method</Paragraph>

  <div className="mt-5 flex gap-4">
    <Input type='radio' name="paymentMethod" id="cod" className='h-5 w-5'/>
    <Label htmlFor='cod' className='text-sm font-medium'>Cash On Delivery</Label>
  </div>
  <div className="mt-2 flex gap-4">
    <Input type='radio' name="paymentMethod" id="online" className='h-5 w-5'/>
    <Label htmlFor='online' className='text-sm font-medium'>Online Payment</Label>
  </div>

<Paragraph className='text-sm lg:text-sm font-semibold text-black mt-5'>We Accept:</Paragraph>

<Image src={payment} alt="payment" width={600} height={200} className="mt-5" />
</div>

  )
}

export default PaymentMethod