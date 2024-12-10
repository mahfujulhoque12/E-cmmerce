"use client";

import React from "react";
import { FaTrash, FaCartPlus } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";

const WishlistCom: React.FC = () => {
  const { wishlistItems, cartItems, addToCart, removeFromWishlist } = useCart();

  return (
    <div className="wishlist-container p-4 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is empty. Start adding your favorite items!
        </p>
      ) : (
        <div className="space-y-6">
          {wishlistItems.map((item) => {
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            );

            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
              >
                {/* Product Image */}
                <div className="w-full md:w-1/3 h-40 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 p-4 text-center md:text-left">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-md md:text-lg font-medium text-gray-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex md:flex-col gap-2 p-4 justify-center md:justify-start">
                  <Button
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                    disabled={isInCart}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${
                      isInCart
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    <FaCartPlus />
                    {isInCart ? "In Cart" : "Add to Cart"}
                  </Button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WishlistCom;
