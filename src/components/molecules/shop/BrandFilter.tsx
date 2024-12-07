"use client";
import { Input } from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Paragraph from "@/components/atoms/Paragraph";
import React, { useState } from "react";

interface BrandFilterProps {
  onFilterChange: (selectedBrands: string[]) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({ onFilterChange }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCheckboxChange = (brand: string) => {
    let updatedBrands = [...selectedBrands];

    if (updatedBrands.includes(brand)) {
      updatedBrands = updatedBrands.filter((b) => b !== brand); // Remove brand
    } else {
      updatedBrands.push(brand); // Add brand
    }

    setSelectedBrands(updatedBrands);
    onFilterChange(updatedBrands); // Notify parent with updated brands
  };

  return (
    <div className="shadow-md border rounded-md p-4 relative mt-5">
      <Paragraph className="text-sm lg:text-lg font-semibold">Brand</Paragraph>
      <p className="bg-gray-200 left-0 w-full h-[2px] mt-2 absolute"></p>

      <div className="mt-10">
        {["Top Ten", "Top One", "Top Six"].map((brand) => (
          <div key={brand} className="flex items-center gap-5 mt-3">
            <Input
              type="checkbox"
              name="brand"
              value={brand}
              className="bg-none border-none shadow-none w-5 h-5"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckboxChange(brand)}
            />
            <Label htmlFor="" className="text-sm lg:text-base font-medium">
              {brand}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
