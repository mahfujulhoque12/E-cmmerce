import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import BrandCart from '@/components/molecules/brand/BrandCart'
import React from 'react'

const Brand = () => {
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>
        <BrandCart/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default Brand