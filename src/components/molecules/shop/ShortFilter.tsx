"use client"
import React from 'react';

interface ShortFilterProps {
  onSortChange: (sortOption: string) => void;
}

const ShortFilter: React.FC<ShortFilterProps> = ({ onSortChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    onSortChange(selectedValue);
  };

  return (
    <div className="flex justify-end py-3 ">
      <select
        onChange={handleChange}
        className="px-3 py-2 border bg-white shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-pink-800"
      >
        <option value="default">Default</option>
        <option value="low-to-high">Low Price to High Price</option>
        <option value="high-to-low">High Price to Low Price</option>
      </select>
    </div>
  );
};

export default ShortFilter;
