import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";


const StoreRight = () => {
  return (
    <div className="group bg-[#EF9919] px-6 py-3 rounded-full relative overflow-hidden transition-all duration-500">
    {/* Link Content */}
    <Link
        href="#"
        className="flex gap-3 items-center text-lg md:text-xl font-semibold text-white relative z-10"
    >
        Find Our Store <FaSearch />
    </Link>
    {/* Shadow Effect */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 group-hover:animate-flow-down transition-all duration-500 rounded-full"></div>
    </div>
  )
}

export default StoreRight