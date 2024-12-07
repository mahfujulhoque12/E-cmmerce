"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export  interface CartItem {
  id: number;
  name: string;
  title?:string;
  price: number;
  quantity: number;
  image :string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartItem: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  resetItemFlag:(id:number) => void;
  subtotal: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [resetItemId, setResetItemId] = useState<number | null>(null); 
  const [subtotal, setSubtotal] = useState(0);
  const taxRate = 0.05;

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedItems = JSON.parse(storedCartItems);
      setCartItems(parsedItems);
      updateSubtotal(parsedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateSubtotal(cartItems);
  }, [cartItems]);

  const updateSubtotal = (items: CartItem[]) => {
    const subtotalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubtotal(subtotalAmount);
  };

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity,
        };
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
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


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        resetItemFlag,
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
