"use client";

import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import CardTitle from "@/components/atoms/CardTitle";
import Span from "@/components/atoms/Span";
import Paragraph from "@/components/atoms/Paragraph";
import { Button } from "@/components/atoms/Button";
import { useCart } from "@/context/CartContext";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import cart from '/public/cart/cart.png';


const AddToCart: React.FC = () => {
  const { cartItems, updateCartItem, removeFromCart, subtotal, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleIncrement = (itemId: number) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    if (item) {
      updateCartItem(itemId, item.quantity + 1);
    }
  };

  const handleDecrement = (itemId: number) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    if (item && item.quantity > 1) {
      updateCartItem(itemId, item.quantity - 1);
    }
  };

  return (
    <div >
      <Button onClick={toggleDrawer} className="relative ">
        <div className="flex items-center gap-2">
          <Span className="hidden md:block text-sm">Cart</Span>
          <FaBasketShopping size={20} className="text-black md:text-white" />
        </div>
        <Paragraph className="absolute top-[-13px] right-[-13px] text-black md:text-white">
          ({cartItems.length})
        </Paragraph>
      </Button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed bg-white top-20 md:top-0 right-0 z-50 h-full  w-full max-w-xl p-6 shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4 ">
          <CardTitle className="text-lg font-semibold text-black">Your Cart</CardTitle>
          <Button onClick={toggleDrawer} className="px-2 py-1 bg-black text-white rounded-md">
            <IoClose />
          </Button>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col z-50  space-y-4 overflow-y-auto max-h-[60vh]">
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
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-2 py-1 rounded-md"
                  >
                   <FaMinus />
                  </Button>
                  <Paragraph className="font-medium">{item.quantity}</Paragraph>
                  <Button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-2 py-1 rounded-md"
                  >
                    <FaPlus />
                  </Button>
                </div>
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
        ) : (
          <div className="text-center py-10">
            <Paragraph className="text-xl font-medium text-gray-600">
                No Product in your cart
            </Paragraph>
            <div className="flex justify-center items-center mt-3">
            <Image src={cart} alt="img" width={350} height={350}/>
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between">
              <Paragraph className="text-gray-600">Subtotal</Paragraph>
              <Paragraph className="font-medium">${subtotal.toFixed(2)}</Paragraph>
            </div>
            <div className="flex justify-between">
              <Paragraph className="text-gray-600">Tax (5%)</Paragraph>
              <Paragraph className="font-medium">${(subtotal * 0.05).toFixed(2)}</Paragraph>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <Paragraph>Total</Paragraph>
              <Paragraph>${total.toFixed(2)}</Paragraph>
            </div>
            <Link
              onClick={toggleDrawer}
              href="/checkout"
              className="block text-center bg-black text-white py-2 mt-4 rounded-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
