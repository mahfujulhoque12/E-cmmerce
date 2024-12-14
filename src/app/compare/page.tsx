import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper';
import Section from '@/components/layout/Section';
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb';
import Compare from '@/components/molecules/compare/Compare';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Section className="py-5 md:py-10 pb-24 md:pb-0">
      <MaxWidthWrapper>
        <Breadcumb />
        {/* Add Suspense here */}
        <Suspense fallback={<div>Loading compare data...</div>}>
          <Compare />
        </Suspense>
      </MaxWidthWrapper>
    </Section>
  );
};

export default page;
