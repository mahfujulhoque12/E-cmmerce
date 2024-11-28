import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import CardOne from '@/components/molecules/hero/CardOne'
import SecCard from '@/components/molecules/hero/SecCard'
import Slider from '@/components/molecules/hero/Slider'
import React from 'react'

const Hero = () => {
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>

        <div className="flex flex-wrap gap-4">
        <div className=" basis-[100%] md:basis-[62%]">
            <Slider/>
        </div>
        <div className=" basis-[100%] md:basis-[33%]">
            <div className='flex flex-col gap-3'>
                <div className='w-full'>
                    <CardOne/>
                </div>
                <div className='w-full'>
                    <SecCard/>
                </div>

            </div>
        </div>
        </div>

        </MaxWidthWrapper>
    </Section>
  )
}

export default Hero