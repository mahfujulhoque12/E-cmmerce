"use client";
import { useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Paragraph from "@/components/atoms/Paragraph";
import React, { useState } from "react";

interface CategoryFilterProps {
  onFilterChange: (selectedCategories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onFilterChange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Initialize from URL query parameter on load
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategories([category]);
      onFilterChange([category]);
    }
  }, []); // Run only once on component mount

  const handleCheckboxChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);

    // Update the URL query parameters dynamically
    const query = updatedCategories.length
      ? `?category=${updatedCategories.join(",")}`
      : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <div className="shadow-md border rounded-md p-4 relative mt-5">
      <Paragraph className="text-sm lg:text-lg font-semibold">Category</Paragraph>
      <p className="bg-gray-200 left-0 w-full h-[2px] mt-2 absolute"></p>

      <div className="mt-10">
        {[
          { value: "home-furniture", label: "Home Furniture" },
          { value: "kids-furniture", label: "Kids Furniture" },
          { value: "bachelor-furniture", label: "Bachelor Furniture" },
          { value: "office-furniture", label: "Office Furniture" },
          { value: "bed-room-furniture", label: "Bed Room Furniture" },
          { value: "leather-furniture", label: "Leather Furniture" },
          { value: "wood-furniture", label: "Wood Furniture" },
          { value: "glass-furniture", label: "glass Furniture" },



        ].map((category) => (
          <div key={category.value} className="flex items-center gap-5 mt-3">
            <Input
              type="checkbox"
              name="category"
              value={category.value}
              className="bg-none border-none shadow-none w-5 h-5"
              onChange={() => handleCheckboxChange(category.value)}
              checked={selectedCategories.includes(category.value)}
            />
            <Label htmlFor="" className="text-sm lg:text-base font-medium">
              {category.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
