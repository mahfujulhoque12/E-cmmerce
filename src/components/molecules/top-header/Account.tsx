import Paragraph from '@/components/atoms/Paragraph'
import Link from 'next/link'
import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { VscGitCompare } from "react-icons/vsc";
import AddToCart from './AddToCart';




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


        <AddToCart/>

        <Link href="#">
        
        <Paragraph className='text-white flex justify-center items-center gap-2'>Account <FaUserCheck size={20} className='text-white'/>
        </Paragraph>
        </Link>

    </div>
  )
}

export default Account