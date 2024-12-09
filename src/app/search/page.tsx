'use client';
import React,{ Suspense } from 'react';
import Section from '@/components/layout/Section';
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper';
import Breadcumb from '@/components/molecules/breadcumb/Breadcumb';
import SearchCom from '@/components/molecules/serach/SearchCom';

const SearchPage: React.FC = () => {
  return (
    <Section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <Breadcumb/>
        <Suspense fallback={<div>Loading...</div>}>
        <SearchCom/>
        </Suspense>
      

      </MaxWidthWrapper>
    </Section>
  );
};

export default SearchPage;
