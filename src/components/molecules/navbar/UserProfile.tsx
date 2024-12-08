import Paragraph from '@/components/atoms/Paragraph'
import Link from 'next/link'
import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import AddToCart from '../top-header/AddToCart';

import { useCart } from "@/context/CartContext";
import Span from '@/components/atoms/Span';
import { IoMdHeart } from 'react-icons/io';

const UserProfile = () => {
  const { wishlistItems} = useCart();
  return (
    <div className='flex justify-center items-center gap-5'>
      
      

        <Link href="#">
        
        <Paragraph className='text-black flex justify-center items-center gap-2'> <FaUserCheck size={25} className='text-black'/>
        </Paragraph>
        </Link>

        <Link href="/wishlist">
        
        <Paragraph className='text-balck relative flex justify-center items-center gap-2'> <IoMdHeart size={25}/>
        <Span className="absolute top-[-16px] right-[-10px]">({wishlistItems.length})</Span>
        </Paragraph>
        </Link>

       <AddToCart/>
    </div>
  )
}

export default UserProfile