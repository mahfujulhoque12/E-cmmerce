import ContainerBox from '@/components/layout/ContainerBox'
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Account from '@/components/molecules/top-header/Account'
import Logo from '@/components/molecules/top-header/Logo'
import SearchBox from '@/components/molecules/top-header/SearchBox'
import React from 'react'

const TopHeader = () => {
  return (
    <Section className='bg-black p-0 hidden xl:block'>
        <MaxWidthWrapper>
            <ContainerBox className='md:p-2 lg:p-2 xl:p-2 '>

        <div className='flex justify-between gap-6 text-white items-center'>
            <div>
                <Logo/>
            </div>
            <div className='w-[80%]'> 
                <SearchBox/>
            </div>
            <div>
                <Account/>
            </div>

        </div>
            </ContainerBox>
        </MaxWidthWrapper>
    </Section>
  )
}

export default TopHeader