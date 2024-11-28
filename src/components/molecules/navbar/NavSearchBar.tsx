import { Input } from '@/components/atoms/Input'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper';
import React from 'react'
import { FaSearch } from "react-icons/fa";

const NavSearchBar = () => {
  return (
    <MaxWidthWrapper>
<div className='bg-white mt-2 rounded-md border xl:hidden flex gap-3 items-center justify-center shadow-sm px-4 py-2 w-full'>
      <Input className='bg-white text-black border-none
      focus-visible:ring-0
      shadow-none
       '
       placeholder='Search Products'
       />
      <FaSearch className='text-black'/>

    </div>
    </MaxWidthWrapper>
  )
}

export default NavSearchBar