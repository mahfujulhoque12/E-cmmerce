"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { Button } from "@/components/atoms/Button";
import { useCart } from "@/context/CartContext";

const AddWishlist: React.FC<{
  item: { id: number; name: string; price: number; image: string };
}> = ({ item }) => {
  const { wishlistItems, compareItems, addToWishlist, addToCompare } = useCart();

  const [msg, setMsg] = useState<string | null>(null);

  const isAlreadyInWishlist = wishlistItems.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

  const isAlreadyInCompare = compareItems.some(
    (compareItem) => compareItem.id === item.id
  );

  const handleWishlistAdded = () => {
    if (isAlreadyInWishlist) {
      setMsg("Item already in wishlist!");
    } else {
      addToWishlist(item);
      setMsg("Item added to wishlist!");
    }

    setTimeout(() => setMsg(null), 2000);
  };

  const handleCompareAdded = () => {
    if (isAlreadyInCompare) {
      setMsg("Item already in compare list!");
    } else {
      addToCompare(item);
      setMsg("Item added to compare!");
    }

    setTimeout(() => setMsg(null), 2000);
  };

  return (
    <div>
      {msg && (
        <span className="text-sm text-green-600 mt-2 transition-opacity duration-300">
          {msg}
        </span>
      )}
      <div className="flex gap-4 items-center py-1">
        <Button onClick={handleWishlistAdded}>
          <FaHeart size={25} className="text-sky-700" />
        </Button>
        <Button onClick={handleCompareAdded}>
          <FaCodeCompare size={25} className="text-sky-700" />
        </Button>
      </div>
    </div>
  );
};

export default AddWishlist;
