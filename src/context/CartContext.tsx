"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  title?: string;
  price: number;
  quantity: number;
  image: string;
}

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CompareItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  compareItems: CompareItem[];
  addToCart: (item: CartItem) => void;
  updateCartItem: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  resetItemFlag: (id: number) => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  addToCompare: (item: CompareItem) => void;
  removeFromCompare: (id: number) => void;
  subtotal: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);
  const [resetItemId, setResetItemId] = useState<number | null>(null);
  const [subtotal, setSubtotal] = useState(0);
  const taxRate = 0.05;

  // Load from localStorage on initial render
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedWishlistItems = localStorage.getItem("wishlistItems");
    const storedCompareItems = localStorage.getItem("compareItems");

    if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
    if (storedWishlistItems) setWishlistItems(JSON.parse(storedWishlistItems));
    if (storedCompareItems) setCompareItems(JSON.parse(storedCompareItems));
  }, []);

  // Sync cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateSubtotal(cartItems);
  }, [cartItems]);

  // Sync wishlistItems to localStorage
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Sync compareItems to localStorage
  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(compareItems));
  }, [compareItems]);

  const updateSubtotal = (items: CartItem[]) => {
    const subtotalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubtotal(subtotalAmount);
  };

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevItems, item];
    });
  };

  const updateCartItem = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    resetItemFlag(id); // Trigger reset flag for the item that was removed
  };

  const resetItemFlag = (id: number) => {
    if (resetItemId === id) setResetItemId(null); // Clear reset flag after reset is handled
  };

  const addToWishlist = (item: WishlistItem) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.some((wishlistItem) => wishlistItem.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCompare = (item: CompareItem) => {
    setCompareItems((prevItems) => {
      if (!prevItems.some((compareItem) => compareItem.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromCompare = (id: number) => {
    setCompareItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        compareItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        resetItemFlag,
        addToWishlist,
        removeFromWishlist,
        addToCompare,
        removeFromCompare,
        subtotal,
        total: subtotal + subtotal * taxRate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
