'use client';
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import Shop from '@/components/organisms/shop/Shop'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Section className='py-5 md:py-10 pb-24 md:pb-10'>
      <MaxWidthWrapper>
        <Breadcumb />
        {/* Wrap Shop in Suspense */}
        <Suspense fallback={<div>Loading shop...</div>}>
          <Shop />
        </Suspense>
      </MaxWidthWrapper>
    </Section>
  )
}

export default page
