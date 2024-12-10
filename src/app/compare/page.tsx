import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import Compare from '@/components/molecules/compare/Compare'
import React from 'react'

const page = () => {
  return (
    <Section className="py-5 md:py-10">
        <MaxWidthWrapper>
            <Breadcumb/>
            <Compare/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default page