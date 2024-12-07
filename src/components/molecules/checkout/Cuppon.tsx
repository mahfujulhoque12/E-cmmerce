import React from 'react'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
const Cuppon = () => {
  return (
    <div className='flex gap-3 justify-center items-center'>
    <Input placeholder='Gift / Cuppon code' type='text'/>
    <Button variant="giftBtn">Apply Cuppon</Button>
  </div>
  )
}

export default Cuppon