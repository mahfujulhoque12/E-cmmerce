"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import CardTitle from "@/components/atoms/CardTitle";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { FaTrash, FaCartPlus } from "react-icons/fa";

const ComparePage = () => {
  const { compareItems, cartItems, addToCart, removeFromCompare } = useCart();

  return (
    <div className="compare-container p-4 pb-10">
      <CardTitle className="text-lg lg:text-3xl font-semibold pb-6">
        Compare Products
      </CardTitle>

      {compareItems.length === 0 ? (
        <p className="text-center text-gray-600">
          No products added for comparison.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {compareItems.map((item) => {
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            );

            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-56 object-contain"
                />

                {/* Product Details */}
                <div className="p-4 flex flex-col gap-3">
                  <CardTitle className="text-sm lg:text-lg font-semibold">
                    {item.name}
                  </CardTitle>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="addToCartBtn"
                      onClick={() => addToCart({ ...item, quantity: 1 })}
                      disabled={isInCart}
                      className="flex-1 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
                    >
                      <FaCartPlus />
                      <span className="ml-2">
                        {isInCart ? "In Cart" : "Add to Cart"}
                      </span>
                    </Button>
                    <button
                      onClick={() => removeFromCompare(item.id)}
                      className="flex-1 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
                    >
                      <FaTrash />
                      <span className="ml-2">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ComparePage;
