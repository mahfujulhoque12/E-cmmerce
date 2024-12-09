'use client';
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import Wishlist from '@/components/organisms/wishlist/Wishlist'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Section className='py-5 md:py-10 pb-24 md:pb-0'>
      <Suspense fallback={<div>Loading...</div>}>
       <MaxWidthWrapper>
        <Breadcumb/>
        <Wishlist/>
        </MaxWidthWrapper> 
        </Suspense>
    </Section>
    
  )
}

export default page