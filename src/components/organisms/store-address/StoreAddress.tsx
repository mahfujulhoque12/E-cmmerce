import ContainerBox from '@/components/layout/ContainerBox'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import StoreLeft from '@/components/molecules/store-address/StoreLeft'
import StoreRight from '@/components/molecules/store-address/StoreRight'
import React from 'react'

const StoreAddress = () => {
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>
            <ContainerBox className='bg-gradient-to-r  from-[#10B3E4] to-[#193499] rounded-md'>

        <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>
            <div>
                <StoreLeft/>
            </div>
            <div className='flex justify-end'>
                <StoreRight/>
            </div>
        </div>
            </ContainerBox>
        </MaxWidthWrapper>
    </Section>
  )
}

export default StoreAddress