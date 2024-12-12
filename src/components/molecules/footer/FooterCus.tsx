import Paragraph from "@/components/atoms/Paragraph";
import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import AddToCart from "../top-header/AddToCart";


const FooterCus:React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white h-24 px-4 drop-shadow-sm ">
    <div className="flex flex-col justify-center items-center">
      <Link href="">
        <IoMdMenu size={20} />
      </Link>
      <Paragraph className="text-sm font-semibold text-black">Category</Paragraph>
    </div>
    <div className="flex flex-col justify-center items-center">
      <Link href="">
        <FaMessage size={20} />
      </Link>
      <Paragraph className="text-sm font-semibold text-black">Message</Paragraph>
    </div>
  
    <div className="flex flex-col -mt-8 justify-center items-center bg-black text-white p-5 rounded-full w-20 h-20">
      <Link href="/" className="flex flex-col justify-center items-center">
        <IoMdHome size={25} />
        <Paragraph className="text-sm font-semibold text-white">Home</Paragraph>
      </Link>
    </div>
  
    <div className="flex flex-col justify-center items-center">
      <AddToCart />
      <Paragraph className="text-sm font-semibold text-black mt-[-8px]">Cart</Paragraph>
    </div>
  
    <div className="flex flex-col justify-center items-center">
      <Link href="" className="flex flex-col justify-center items-center">
        <FaUserAlt size={20} />
        <Paragraph className="text-sm font-semibold text-black">Login</Paragraph>
      </Link>
    </div>
  </div>
  
  );
};

export default FooterCus;
