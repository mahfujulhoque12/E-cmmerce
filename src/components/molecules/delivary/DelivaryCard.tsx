import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import delivary from '/public/delivary/delivary.png';

const DelivaryCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
            <Link href="#">
            <Image src={delivary} width={1000} height={400} alt='img'/>
            </Link>
        </div>
        
        <div>
            <Link href="#">
            <Image src={delivary} width={1000} height={400} alt='img'/>
            </Link>
        </div>

    </div>
  )
}

export default DelivaryCard