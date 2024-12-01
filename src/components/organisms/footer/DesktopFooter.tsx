import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import GetInTouch from '@/components/molecules/footer/GetInTouch'
import Links from '@/components/molecules/footer/Links'
import Subscribe from '@/components/molecules/footer/Subscribe'
import React from 'react'

const DesktopFooter = () => {
  return (
    <Section className='py-5 md:py-10 hidden md:block bg-black'>

        <MaxWidthWrapper>

        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            <div>
                <GetInTouch/>
            </div>
            <div>
                <Links/>
            </div>
            <div>
                <Subscribe/>
            </div>
        </div>
        </MaxWidthWrapper>
    </Section>
  )
}

export default DesktopFooter