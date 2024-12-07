import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa'
import { IoMdCloseCircle } from 'react-icons/io'
import Link from 'next/link'
import CardTitle from '@/components/atoms/CardTitle'
import Paragraph from '@/components/atoms/Paragraph'


const DelivaryDetails = () => {
  return (
    <div className="mt-5 flex justify-between  p-3 border rounded-md shadow-sm">
      <div>
      <CardTitle className="text-sm lg:text-sm font-bold bg-gray-100 text-center mb-1">Free While Global Delevery</CardTitle>
      <Paragraph className="text-sm font-semibold ">Get it in 4-5 weeks to <span className="underline text-red-600">13524</span></Paragraph>
      </div>
        
        <Drawer>
      <DrawerTrigger>
      <FaChevronRight />
      </DrawerTrigger>
      <DrawerContent >
        <DrawerHeader>
          <div className="flex justify-between px-5">
          <DrawerTitle>Delivery Details</DrawerTitle>
          <DrawerClose>
          <IoMdCloseCircle size={20} className="text-red-500"/>
          </DrawerClose>
          </div>
          <hr className="mt-1"/>
        </DrawerHeader>

          <div className="p-4">
            <Paragraph className="text-sm font-bold bg-gray-100 mb-1 w-[195px]">Free While Global Delevery</Paragraph>
            <Paragraph className="text-sm font-semibold ">Get it in 4-5 weeks to <span className="underline text-red-600">13524</span></Paragraph>
          </div>

          <div className="p-4">
            <Paragraph className="text-sm lg:text-base	flex items-center gap-2 text-black font-medium"><FaCalendarAlt size={20} />
            Delivery Scheduled After Item Ships</Paragraph>
            <Paragraph className="text-xs mt-1	font-noraml text-gray-600">We’ll contact you to schedule a convenient delivery date once your item reaches your local area</Paragraph>
            <hr className="mt-4"/> 
          </div>

          <div className="p-4">
            <CardTitle className="text-lg md:text-xl lg:text-2xl font-semibold ">Available Delivery Method(s)</CardTitle>
            <Paragraph className="text-base	 text-black font-medium mt-5">
            FREE White Glove Delivery</Paragraph>
            <Paragraph className=" mt-1	font-noraml text-gray-600">We’ll carry your items to any room inside your home, unpack and set them up, and remove all packaging.</Paragraph>
            <hr className="mt-4"/> 
          </div>
                
          <div className="p-4">
            <CardTitle className="text-lg md:text-xl lg:text-2xl font-semibold ">Shipping Policy</CardTitle>
            <Paragraph className="text-sm	 font-medium mt-1 text-gray-500">
            Your order means a lot to us. That  &apos; s why we offer fast, safe and reliable delivery options for every item.</Paragraph>

            <Link href="#" className="underline text-red-600 mt-2">Shipping Policy</Link>
          
          </div>
      
      </DrawerContent>
        </Drawer>
    </div>
  )
}

export default DelivaryDetails