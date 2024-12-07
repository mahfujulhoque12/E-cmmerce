
import React from 'react'
import { cardData } from '@/data/featureProduct'

import { FaStar } from "react-icons/fa";
import DelivaryDetails from "./DelivaryDetails";
import Paragraph from "@/components/atoms/Paragraph";
import CardTitle from "@/components/atoms/CardTitle";
import Counter from "@/components/molecules/global/Counter";
import Offer from "./Offer";
import ServicesFaq from "./ServicesFaq";
import CustomerReview from "./CustomerReview";
import { useCart } from "@/context/CartContext";

interface ProductInfoProps {
  slug: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ slug }) => {
  const { addToCart, cartItems, updateCartItem } = useCart();

  const allInfo = cardData.find((card) => card.slug === slug);

  const handleAddToCart = (quantity: number) => {
    if (allInfo) {
      addToCart({
        id: allInfo.id,
        name: allInfo.title,
        price: allInfo.price,
        quantity,
        image: allInfo.image || "",
      });
    }
  };

  return (
    <div className="max-h-[470px] overflow-y-scroll scrollbar-hide">
      <div>
        <CardTitle className="lg:text-base font-bold">{allInfo?.brand}</CardTitle>
        <CardTitle className="lg:text-lg font-semibold capitalize">{allInfo?.title}</CardTitle>
        <Paragraph className="text-sm py-1 font-normal text-gray-500">{allInfo?.des}</Paragraph>

        <div className="flex gap-1 pb-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={20} className="text-yellow-400" />
          ))}
        </div>

        <Paragraph className="text-lg lg:text-xl font-bold py-2"> {(allInfo?.price)}৳</Paragraph>

        {/* Delivery section */}
        <DelivaryDetails />

        {/* Counter and Add to Cart */}
        <Counter
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        itemId={allInfo?.id || 0}
        itemPrice={allInfo?.price || 0}
        updateCartItem={updateCartItem}
      />


        {/* Offers */}
        <Offer />

        {/* Services */}
        <ServicesFaq />

        {/* Customer review */}
        <CustomerReview />
      </div>
    </div>
  );
};

export default ProductInfo;
