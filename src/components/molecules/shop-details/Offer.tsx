import CardTitle from '@/components/atoms/CardTitle'
import Paragraph from '@/components/atoms/Paragraph'
import React from 'react'
import { GiCutDiamond } from 'react-icons/gi'

const Offer = () => {
  return (
    <div className="mt-4">
      <CardTitle  className="text-lg font-semibold">More Offers and Savings</CardTitle>
      <button type="button">
        <div className="flex gap-5 mt-3 ">
            <div>
            <GiCutDiamond size={50} className="text-yellow-400"/>
            </div>
          <div>
          <Paragraph className="text-sm md:text-base lg:text-base	 font-medium mt-1 text-gray-500 text-start"> Earn <span className="font-bold text-black">$21.50</span> in rewards with 5% back, plus members-only sales and more when you join Wayfair RewardsEarn $21.50 in rewards with 5% back¹, plus members-only sales and more when you join Wayfair Rewards</Paragraph>
          <Paragraph className="md:text-base lg:text-base underline text-red-600 text-start">Join now for $29/year</Paragraph>
          </div>
        </div>
      </button>
    </div>   
  )
}

export default Offer