"use client";
import CardTitle from '@/components/atoms/CardTitle';
import Span from '@/components/atoms/Span';
import React from 'react';
import { useCart } from "@/context/CartContext";
import Image from 'next/image';
import Paragraph from '@/components/atoms/Paragraph';
import { Button } from '@/components/atoms/Button';
import { IoTrashOutline } from 'react-icons/io5';

const OrderOverview = () => {
  const { cartItems,  removeFromCart, subtotal } = useCart();

  const deliveryCharge = 60; // Home delivery charge
  const total = subtotal + deliveryCharge;

  return (
    <div className="mt-5 p-4 border rounded-md shadow-sm">
      <CardTitle className="font-medium lg:text-xl flex gap-2 items-center">
        <Span className="bg-red-100 h-8 w-8 rounded-full flex items-center justify-center text-pink-600">4</Span>
        Order Overview
      </CardTitle>
      <hr className="mt-2" />

      {/* Cart Items Section */}
      <div className="flex flex-col space-y-4 overflow-y-auto max-h-[60vh] mt-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="flex-1 px-4">
              <Paragraph className="font-medium text-black">{item.name}</Paragraph>
              <Paragraph className="text-gray-600">
                {item.quantity} x ${item.price.toFixed(2)}
              </Paragraph>
            </div>
            <div className="flex items-center gap-3">
            
              <Button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <IoTrashOutline size={20} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between items-center">
          <Paragraph className="font-medium text-black">Subtotal</Paragraph>
          <Paragraph className="font-medium text-black">${subtotal.toFixed(2)}</Paragraph>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Paragraph className="text-gray-600">Home Delivery</Paragraph>
          <Paragraph className="text-gray-600">${deliveryCharge.toFixed(2)}</Paragraph>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <Paragraph className="font-medium text-lg text-black">Total</Paragraph>
          <Paragraph className="font-medium text-lg text-black">${total.toFixed(2)}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
