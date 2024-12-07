import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import React from 'react'
import Checkout from '@/components/organisms/checkout/Checkout'

const page = () => {
  return (
    <Section className="py-5 md:py-10">
        <MaxWidthWrapper>
        <Breadcumb/>
        <Checkout/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default page