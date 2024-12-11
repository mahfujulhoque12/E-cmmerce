import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import Account from '@/components/organisms/account/Account'
import React from 'react'

const page = () => {
  return (
    <Section className="py-5 md:py-10 pb-24 md:pb-10">
        <MaxWidthWrapper>
        <Breadcumb/>
        <Account/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default page