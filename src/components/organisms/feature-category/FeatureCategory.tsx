import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import FeatureCard from '@/components/molecules/feature-category/FeatureCard'
import React from 'react'

const FeatureCategory = () => {
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>

        <div>
            <Heading className='text-center'>Featured Category</Heading>
            <Paragraph className='text-center text-sm lg:text-base mt-1'>Get Your Desired Product from Featured Category!</Paragraph>
            <FeatureCard/>
        </div>
        </MaxWidthWrapper>
    </Section>
  )
}

export default FeatureCategory