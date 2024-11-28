import Paragraph from '@/components/atoms/Paragraph'
import Span from '@/components/atoms/Span';
import Link from 'next/link'
import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { VscGitCompare } from "react-icons/vsc";




const Account = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
       <Link href="#">
        
        <Paragraph className='text-white flex justify-center items-center gap-2'>Wishlist <IoMdHeart size={20} className='text-white'/>
        </Paragraph>
        </Link>

        <Link href="#">
        
        <Paragraph className='text-white flex justify-center items-center gap-2'>Compare <VscGitCompare  size={20} className='text-white'/>
        </Paragraph>
        </Link>

        <Link href="#">
        
        <Paragraph className='text-white flex justify-center items-center gap-2'>Account <FaUserCheck size={20} className='text-white'/>
        </Paragraph>
        </Link>

        <Link href="#">
        <Paragraph  className='text-white flex justify-center relative items-center gap-2'>
            Cart <FaShoppingCart size={20} className='text-white'/>

            <Span className='absolute top-[-18px] right-[-12px]'>(0)</Span>
        </Paragraph>
        </Link>
    </div>
  )
}

export default Account