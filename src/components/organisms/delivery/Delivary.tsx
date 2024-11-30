import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import DelivaryCard from '@/components/molecules/delivary/DelivaryCard'
import React from 'react'

const Delivary = () => {
  return (
    <Section className="py-5 md:py-10">
        <MaxWidthWrapper>

       <DelivaryCard/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default Delivary