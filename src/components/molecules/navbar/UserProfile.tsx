import Paragraph from '@/components/atoms/Paragraph'
import Span from '@/components/atoms/Span';
import Link from 'next/link'
import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const UserProfile = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
      
      

        <Link href="#">
        
        <Paragraph className='text-black flex justify-center items-center gap-2'> <FaUserCheck size={20} className='text-black'/>
        </Paragraph>
        </Link>

        <Link href="#">
        <Paragraph  className='text-black flex justify-center relative items-center gap-2'>
             <FaShoppingCart size={20} className='text-black'/>

            <Span className='absolute top-[-18px] right-[-12px]'>(0)</Span>
        </Paragraph>
        </Link>
    </div>
  )
}

export default UserProfile