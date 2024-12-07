import Paragraph from '@/components/atoms/Paragraph'
import Link from 'next/link'
import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import AddToCart from '../top-header/AddToCart';


const UserProfile = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
      
      

        <Link href="#">
        
        <Paragraph className='text-black flex justify-center items-center gap-2'> <FaUserCheck size={25} className='text-black'/>
        </Paragraph>
        </Link>

       <AddToCart/>
    </div>
  )
}

export default UserProfile