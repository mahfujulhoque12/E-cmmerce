import CardTitle from '@/components/atoms/CardTitle'
import Paragraph from '@/components/atoms/Paragraph'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


const Links = () => {
  return (
    <div>
           <CardTitle className='font-semibold text-white'>Usefull Links</CardTitle>
        <p className="bg-gray-200 w-full h-[2px] mt-2 relative">
        <span className="bg-sky-700 w-[30%] h-[2px] absolute top-0 left-0"></span>
        </p>
        
        <Link href="#">
        <Paragraph className='text-gray-400 mt-5 lg:text-sm flex gap-1 items-center font-bold hover:text-white transition-colors duration-200'><FaAngleRight /> Faq</Paragraph> 
        </Link>
           
        <Link href="#">
        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm flex gap-1 items-center font-bold hover:text-white transition-colors duration-200'><FaAngleRight /> About us</Paragraph> 
        </Link>
        <Link href="#">
        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm flex gap-1 items-center font-bold hover:text-white transition-colors duration-200'><FaAngleRight /> How We Works</Paragraph> 
        </Link>  <Link href="#">
        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm flex gap-1 items-center font-bold hover:text-white transition-colors duration-200'><FaAngleRight /> Terms and Condition</Paragraph> 
        </Link> 
         <Link href="#">
        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm flex gap-1 items-center font-bold hover:text-white transition-colors duration-200'><FaAngleRight /> Return Policy</Paragraph> 
        </Link> 

         <Link href="#">
        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm flex gap-1 items-center font-bold hover:text-white transition-colors duration-200'><FaAngleRight /> Shipping Policy</Paragraph> 
        </Link>
        
        
        <Link href="#">
        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm flex gap-1 items-center font-bold hover:text-white transition-colors duration-200'><FaAngleRight /> Refund Policy</Paragraph> 
        </Link>
        
    </div>
  )
}

export default Links