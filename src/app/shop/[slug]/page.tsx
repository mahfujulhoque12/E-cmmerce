import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import ShopDetails from '@/components/organisms/shopDetails/ShopDetails'

import React, { use } from 'react'

type PropsType = {
    params:Promise<{
        slug:string
    }>
}

const Page:React.FC<PropsType> = ({params}) => {
    const {slug}=use(params)
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>
        <Breadcumb/>
        <ShopDetails slug={slug}/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default Page