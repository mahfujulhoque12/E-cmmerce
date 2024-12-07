import Interested from '@/components/molecules/shop-details/Interested'
import ProductImg from '@/components/molecules/shop-details/ProductImg'
import ProductInfo from '@/components/molecules/shop-details/ProductInfo'
import RecentView from '@/components/molecules/shop-details/RecentView'
import SimilarProduct from '@/components/molecules/shop-details/SimilarProduct'
import React from 'react'

type PropsType = {
  slug:string
}
const ShopDetails:React.FC<PropsType> = ({slug}) => {
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

export default ShopDetails