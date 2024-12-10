import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import Account from '@/components/organisms/account/Account'
import React from 'react'

const page = () => {
  return (
    <Section>
        <MaxWidthWrapper>
        <Breadcumb/>
        <Account/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default page