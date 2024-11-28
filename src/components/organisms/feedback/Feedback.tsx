import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import FeedbackCus from '@/components/molecules/feedback/FeedbackCus'
import React from 'react'

const Feedback = () => {
  return (
    <Section className='py-5 md:py-10'>
    <MaxWidthWrapper>

        <div>
            <FeedbackCus/>
        </div>
    </MaxWidthWrapper>
    </Section>
  )
}

export default Feedback