import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import React from 'react'

const Gitf = () => {
  return (
    <div className='flex gap-3 justify-center items-center'>
    <Input placeholder='Gift Voucher' type='text'/>
    <Button variant="giftBtn">Apply Voucher</Button>
  </div>

  )
}

export default Gitf