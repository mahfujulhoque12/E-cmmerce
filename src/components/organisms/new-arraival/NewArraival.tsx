import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import NewArraivalProduct from '@/components/molecules/new-arriaval/NewArraivalProduct'
import React from 'react'

const NewArraival = () => {
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>
        <Heading className='text-center'>New Arraival</Heading>
        <Paragraph className='text-center text-sm lg:text-base mt-1'>Check & Get Your Desired Product!</Paragraph>
        <NewArraivalProduct/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default NewArraival