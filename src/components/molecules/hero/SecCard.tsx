import React from 'react'
import join from '/public/logo/join.png';
import Link from 'next/link';
import Image from 'next/image';

const SecCard = () => {
  return (
    <div>
        <Link href="">
        <Image src={join} width={400} height={300} alt='img' className='w-full h-[250px] object-cover'/>
        </Link>
    </div>
  )
}

export default SecCard