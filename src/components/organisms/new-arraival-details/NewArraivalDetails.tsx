
import React from 'react'
import ProductImg from '@/components/molecules/new-arraival-details/ProductImg';
import ProductInfo from '@/components/molecules/new-arraival-details/ProductInfo';
import Interested from '@/components/molecules/new-arraival-details/Interested';
import SimilarProduct from '@/components/molecules/new-arraival-details/SimilarProduct';
import RecentView from '@/components/molecules/new-arraival-details/RecentView';




type PropsType = {
  slug:string
}
const NewArraivalDetails:React.FC<PropsType> = ({slug}) => {
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

export default NewArraivalDetails