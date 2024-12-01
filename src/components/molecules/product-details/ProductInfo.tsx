import React from 'react'
import { cardData } from '@/data/featureProduct'
import { FaStar } from 'react-icons/fa'
import DelivaryDetails from './DelivaryDetails'
import Paragraph from '@/components/atoms/Paragraph'
import CardTitle from '@/components/atoms/CardTitle'
import Counter from './Counter'
import Offer from './Offer'
import ServicesFaq from './ServicesFaq'
import CustomerReview from './CustomerReview'
  
  interface ProductInfo {
    slug:string
  }

const ProductInfo:React.FC<ProductInfo> = ({slug}) => {
    const allInfo = cardData.find((card)=>card.slug == slug)
  return (
    <div className="max-h-[470px] overflow-y-scroll scrollbar-hide">
    <div>
        <CardTitle className="lg:text-base font-bold">{allInfo?.brand}</CardTitle>
       <CardTitle className="lg:text-lg font-semibold capitalize">{allInfo?.title}</CardTitle> 
       <Paragraph className="text-sm py-1 font-normal text-gray-500">{allInfo?.des}</Paragraph>

       <div className="flex gap-1 pb-1">
       <FaStar size={20} className="text-yellow-400"/>
       <FaStar size={20} className="text-yellow-400"/>
       <FaStar size={20} className="text-yellow-400"/>
       <FaStar size={20} className="text-yellow-400"/>
       <FaStar size={20} className="text-yellow-400"/>
       </div>
       
       <Paragraph className="text-lg lg:text-xl font-bold py-2">{allInfo?.price}৳</Paragraph>
         
  

{/* Delevery section start */}
    <DelivaryDetails/>
{/* Delevery section end */}

{/* counter and Add to cart start */}
 <Counter/>
{/* counter and Add to cart end */}

{/* offers start */}
    <Offer/>
{/* offers end */}    
  
  {/* services start*/}
   <ServicesFaq/>
  {/* services  end*/}

    {/* customer review */}
    <CustomerReview/>
    {/* customer review */}

  </div>
    
  </div>
  )
}

export default ProductInfo