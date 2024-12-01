import CardTitle from '@/components/atoms/CardTitle'
import Paragraph from '@/components/atoms/Paragraph'
import Link from 'next/link'
import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";



const GetInTouch = () => {
  return (
    <div>
        <CardTitle className='font-semibold text-white'>Get In Touch</CardTitle>
        <p className="bg-gray-200 w-full h-[2px] mt-2 relative">
        <span className="bg-sky-700 w-[30%] h-[2px] absolute top-0 left-0"></span>
        </p>
        <Paragraph className='text-gray-400 mt-5 lg:text-sm'><b>Address:</b> House: Munshi Bari, Beside Nayar Hat High School,Borobari,Lalmonirhat</Paragraph> 

        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm'><b>Phone:</b>01625258400</Paragraph>  

        <Paragraph className='text-gray-400 mt-1.5 lg:text-sm'><b>Email:</b> Support@gmail.com</Paragraph>    

        <Paragraph className='text-gray-400 mt-4 lg:text-xs'><b>Monday-Friday</b> 9.30 am - 9.30 pm</Paragraph>  
        
        <div className='flex gap-2 text-gray-200 mt-5 '>
            <Link href="#"><FaSquareFacebook  size={25}  className='transition-all duration-200 hover:text-white'/></Link>
            <Link href="#"><FaSquareInstagram size={25}  className='transition-all duration-200 hover:text-white'/></Link>
            <Link href="#"><FaLinkedin  size={25}  className='transition-all duration-200 hover:text-white'/></Link>
            <Link href="#"><FaTwitterSquare  size={25}  className='transition-all duration-200 hover:text-white'/></Link>

        </div>
    </div>
  )
}

export default GetInTouch