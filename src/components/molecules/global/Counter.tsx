"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import { CartItem } from "@/context/CartContext";

interface CounterProps {
  onAddToCart: (quantity: number) => void;
  cartItems: CartItem[]; // Pass the current cart items as a prop
  itemId: number; // The ID of the item being handled
  itemPrice: number; // The price of the item
  updateCartItem: (id: number, quantity: number) => void; // Function to update the cart
}

const Counter: React.FC<CounterProps> = ({
  onAddToCart,
  cartItems,
  itemId,
  itemPrice,
  updateCartItem,
}) => {
  const [counter, setCounter] = useState(1);
  const [msg, setMsg] = useState("");

  // Check if the item is in the cart
  const isInCart = cartItems.some((item) => item.id === itemId);

  useEffect(() => {
    // If the item is in the cart, sync the counter with its quantity
    if (isInCart) {
      const cartItem = cartItems.find((item) => item.id === itemId);
      if (cartItem) {
        setCounter(cartItem.quantity);
      }
    } else {
      // Reset counter if the item is no longer in the cart
      setCounter(1);
    }
  }, [cartItems, itemId, isInCart]);

  const handleDec = () => {
    if (!isInCart) {
      setMsg("Add to cart first to change quantity");
      setTimeout(() => setMsg(""), 3000);
      return;
    }

    if (counter > 1) {
      const newQuantity = counter - 1;
      setCounter(newQuantity);
      updateCartItem(itemId, newQuantity); // Update the cart item quantity
    } else {
      setMsg("Minimum requirement is 1");
      setTimeout(() => setMsg(""), 3000);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(counter);
  };

  const handleIncrement = () => {
    if (!isInCart) {
      setMsg("Add to cart first to change quantity");
      setTimeout(() => setMsg(""), 3000);
      return;
    }

    const newQuantity = counter + 1;
    setCounter(newQuantity);
    updateCartItem(itemId, newQuantity); // Update the cart item quantity
  };

  return (
    <div>
      {msg && <Paragraph className="text-red-500 mt-3">{msg}</Paragraph>}
      <div className="flex justify-between mt-5">
        <div className="flex items-center border rounded-full shadow-md overflow-hidden">
          <Button type="button" variant="counterBtn" onClick={handleDec}>
            -
          </Button>
          <Paragraph className="lg:text-xl px-6 py-1 border-x bg-white">{counter}</Paragraph>
          <Button type="button" variant="counterBtn" onClick={handleIncrement}>
            +
          </Button>
        </div>
        <div>
          <Button
            className={`${
              isInCart ? "bg-red-500 text-white" : "bg-black text-white"
            } w-full px-6 shadow-md py-2 rounded-full text-base font-semibold hover:bg-[#232323]`}
            type="button"
            variant="addToCartBtn"
            onClick={handleAddToCart}
            disabled={isInCart} // Disable button if item is in cart
          >
            {isInCart ? "Already in Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
      {/* Show total price only if the item is in the cart */}
      <Paragraph className="mt-3 text-lg font-semibold text-black">
        Total: {isInCart ? `${(counter * itemPrice).toFixed(2)}৳` : `0.00৳`}
      </Paragraph>
    </div>
  );
};

export default Counter;
