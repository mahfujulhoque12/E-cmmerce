import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import FeatureProductCard from '@/components/molecules/feature-products/FeatureProductCard'
import React from 'react'

const FeatureProducts = () => {
  return (
        <Section className='py-5 md:py-10'>
            <MaxWidthWrapper>

            <Heading className='text-center'>Featured Products</Heading>
            <Paragraph className='text-center text-sm lg:text-base mt-1'>Check & Get Your Desired Product!</Paragraph>
            <FeatureProductCard/>
            </MaxWidthWrapper>
        </Section>
  )
}

export default FeatureProducts