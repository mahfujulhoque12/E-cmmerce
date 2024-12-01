import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import BestSallerProduct from '@/components/molecules/best-saller/BestSallerProduct'
import React from 'react'

const BestSaller = () => {
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>
        <Heading className='text-center'>Best Selling</Heading>
        <Paragraph className='text-center text-sm lg:text-base mt-1 capitalize'>Check Our best selling Product!</Paragraph>
        <BestSallerProduct/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default BestSaller