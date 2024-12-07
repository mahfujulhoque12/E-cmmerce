import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper';
import Section from '@/components/layout/Section';
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb';
import BestSellingDetails from '@/components/organisms/best-selling-details/BestSellingDetails';
import React,{use} from 'react'
type PropsType = {
    params:Promise<{
        slug:string;
    }>
}
const Page:React.FC<PropsType> = ({params}) =>{
    const {slug}=use(params)
    return (
        <Section>
            <MaxWidthWrapper>
            <Breadcumb></Breadcumb>
            <BestSellingDetails slug={slug}/>
            </MaxWidthWrapper>
        </Section>
       
    )
}

export default Page;

