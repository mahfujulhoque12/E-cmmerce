'use client';
import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import BestSallerProduct from '@/components/molecules/best-saller/BestSallerProduct'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Section className='py-5 md:py-10'>
        <Suspense fallback={<div>Loading...</div>}>
        <MaxWidthWrapper>
         <Breadcumb/>
        <Heading className='text-start'>Best Selling</Heading>
        <Paragraph className='text-start text-sm lg:text-base mt-1 capitalize'>Check Our best selling Product!</Paragraph>
      

        <BestSallerProduct/>
    
        </MaxWidthWrapper>
        </Suspense>
    </Section>
  )
}

export default page