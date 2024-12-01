import React from 'react'
import logo from '/public/logo/web-logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
        <Link href="/">
        <Image src={logo} width={100} height={50} alt='logo' className='h-[70px]'/>
        </Link>
    </div>
  )
}

export default Logo