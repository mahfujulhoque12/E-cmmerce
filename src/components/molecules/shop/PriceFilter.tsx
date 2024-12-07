import React, { useState } from "react";
import Paragraph from "@/components/atoms/Paragraph";
import { cardData } from "@/data/shopData";
import { DualRangeSlider } from "@/components/atoms/DualRangeSlider";

interface PriceFilterProps {
  onFilterChange: (filteredProducts: typeof cardData) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
  // Calculate min and max prices from static cardData
  const prices = cardData.map((product) => product.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  // Initialize state directly with min and max values
  const [priceRangeValues, setPriceRangeValues] = useState<[number, number]>([
    min, max,
  ]);

  // Filter products whenever the price range changes
  const handlePriceChange = (range: [number, number]) => {
    setPriceRangeValues(range);
    const filtered = cardData.filter(
      (product) => product.price >= range[0] && product.price <= range[1]
    );
    onFilterChange(filtered);
  };

  return (
    <div className="shadow-md border rounded-md p-4 relative">
      <Paragraph className="text-sm lg:text-lg font-semibold">
        Price Range
      </Paragraph>
      <p className="bg-gray-200 left-0 w-full h-[2px] mt-2 absolute"></p>

      <div className="mt-10">
      <Paragraph className="text-sm lg:text-base font-medium">
          <b>Price:</b> ${priceRangeValues[0]} - ${priceRangeValues[1]}
      </Paragraph>
      </div>
      <div className="mt-16">
      
        <DualRangeSlider
          label={(value) => (
            <span className="relative px-2 py-1 rounded-md bg-white shadow-md inline-block after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-[6px] after:border-t-white after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent">
              {value}$
            </span>
          )}
          value={priceRangeValues}
          onValueChange={handlePriceChange}
          min={min} // Static min derived from cardData
          max={max} // Static max derived from cardData
          step={1}
        />
      </div>

      <div className="flex justify-between mt-3">
        <Paragraph className="text-xs lg:text-sm font-medium">
          Min - ${priceRangeValues[0]}
        </Paragraph>
        <Paragraph className="text-xs lg:text-sm font-medium">
          Max - ${priceRangeValues[1]}
        </Paragraph>
      </div>
    </div>
  );
};

export default PriceFilter;
