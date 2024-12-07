import Section from '@/components/layout/Section'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'

import React,{use} from 'react'
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb'
import NewArraivalDetails from '@/components/organisms/new-arraival-details/NewArraivalDetails';

type PropsType = {
    params : Promise<{
        slug:string;
    }>
}
const Page:React.FC<PropsType> = ({params}) => {
    const {slug}=use(params)
  return (
    <Section className="py-5 md:py-10">
        <MaxWidthWrapper>
        <Breadcumb/>
        <NewArraivalDetails slug={slug}/>
        </MaxWidthWrapper>
    </Section>
  )
}

export default Page