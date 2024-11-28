import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import FooterCus from '@/components/molecules/footer/FooterCus'
import React from 'react'

const Footer = () => {
  return (
    <Section className='fixed bottom-0   w-full md:hidden'>
      <MaxWidthWrapper>
        <FooterCus/>
      </MaxWidthWrapper>
    </Section>
  )
}

export default Footer