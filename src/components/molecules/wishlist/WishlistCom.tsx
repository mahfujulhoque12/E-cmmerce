"use client";
import React from "react";
import { FaTrash, FaCartPlus } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import CardTitle from "@/components/atoms/CardTitle";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";

const WishlistCom: React.FC = () => {
  const { wishlistItems, cartItems, addToCart, removeFromWishlist } = useCart();

  return (
    <div className="wishlist-container p-4 pb-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => {
          const isInCart = cartItems.some((cartItem) => cartItem.id === item.id); // Check if the item is in the cart

          return (
            <div
              key={item.id}
              className="wishlist-item border bg-white shadow-md rounded-md p-4 flex flex-col items-center"
            >
              <div className="flex justify-between w-full mb-4">
                <CardTitle className="text-sm lg:text-lg font-semibold">
                  {item.name}
                </CardTitle>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFromWishlist(item.id)}
                />
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-24 h-24 object-cover rounded-md mb-2"
              />
              <p className="text-gray-700 mb-2">${item.price}</p>
              <Button
                variant="addToCartBtn"
                onClick={() => addToCart({ ...item, quantity: 1 })}
                disabled={isInCart} // Disable button if item is already in the cart
              >
                <FaCartPlus />
                {isInCart ? "Already in Cart" : "Add to Cart"} {/* Show appropriate label */}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishlistCom;
