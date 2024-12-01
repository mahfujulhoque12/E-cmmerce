import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import Section from '@/components/layout/Section'
import Interested from '@/components/molecules/product-details/Interested';
import ProductImg from '@/components/molecules/product-details/ProductImg'
import ProductInfo from '@/components/molecules/product-details/ProductInfo';
import RecentView from '@/components/molecules/product-details/RecentView';
import SimilarProduct from '@/components/molecules/product-details/SimilarProduct';
import React from 'react'

interface ProductDetailsProps {
    slug: string;
  }
const ProductDetails:React.FC<ProductDetailsProps> = ({slug}) => {
  return (
    <Section className='py-5 md:py-10'>
        <MaxWidthWrapper>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div>
                <ProductImg slug={slug}/>
            </div>
            <div>
            <ProductInfo slug={slug}/>
            </div>
        </div>

        <div className='mt-7'>
            <Interested/>
        </div>

        <div className='mt-7'>
            <SimilarProduct/>
        </div>

        <div className='mt-7'>
            <RecentView/>
        </div>
        </MaxWidthWrapper>
    </Section>
  )
}

export default ProductDetails