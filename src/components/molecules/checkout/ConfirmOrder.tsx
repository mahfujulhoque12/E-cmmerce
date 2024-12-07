import { Input } from '@/components/atoms/Input'
import Span from '@/components/atoms/Span'
import React from 'react'
import Link from "next/link";
import { Button } from '@/components/atoms/Button';

const ConfirmOrder = () => {
  return (
    <div className='mt-5 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 pb-20 md:pb-0'>
  <div className="flex items-center gap-2">
    <Input type='checkbox' name="delevaryMethod" id="online" className='h-4 w-4'/>
    <Span className="text-sm">
      I have read and agree to the <Link href="#" className="text-red-500">Terms and Conditions</Link>, 
      <Link href="#" className="text-red-500">Privacy Policy</Link>, 
      <Link href="#" className="text-red-500">Refund</Link>, and 
      <Link href="#" className="text-red-500">Return Policy</Link>
    </Span>
  </div>
  <div className='flex md:px-10 justify-start items-start md:justify-end md:items-center'>
    <Button variant="addToCartBtn" className="rounded-md">Place Order</Button>
  </div>
</div>

  )
}

export default ConfirmOrder