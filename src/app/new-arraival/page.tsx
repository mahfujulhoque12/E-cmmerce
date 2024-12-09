'use client';
import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import NewArraivalProduct from '@/components/molecules/new-arriaval/NewArraivalProduct'
import React, { Suspense } from 'react'

const NewArraival = () => {
  return (
    <Section className='py-5 md:py-10'>
        <Suspense fallback={<div>Loading...</div>}>
        <MaxWidthWrapper>
            <Breadcumb/>
        <Heading className='text-start'>New Arraival</Heading>
        <Paragraph className='text-start text-sm lg:text-base mt-1'>Check & Get Your Desired Product!</Paragraph>
        <NewArraivalProduct/>
        </MaxWidthWrapper>
        </Suspense>
    </Section>
  )
}

export default NewArraival