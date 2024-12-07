
import React from 'react'
import ProductImg from '@/components/molecules/best-selling-details/ProductImg';
import ProductInfo from '@/components/molecules/best-selling-details/ProductInfo';
import Interested from '@/components/molecules/best-selling-details/Interested';
import SimilarProduct from '@/components/molecules/best-selling-details/SimilarProduct';
import RecentView from '@/components/molecules/best-selling-details/RecentView';




type PropsType = {
  slug:string
}
const BestSellingDetails:React.FC<PropsType> = ({slug}) => {
  return (
    <div>
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
    </div>
  )
}

export default BestSellingDetails