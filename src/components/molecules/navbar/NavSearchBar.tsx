'use client';

import { Input } from '@/components/atoms/Input';
import { useSearch } from '@/context/SearchContext';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState, Suspense } from 'react';
import { FaSearch } from "react-icons/fa";

const NavSearchBar = () => {
  const { setQuery } = useSearch();
  const [input, setInput] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    if (!input.trim()) return; // Prevent empty searches
    setQuery(input);
    const params = new URLSearchParams(searchParams.toString());
    params.set('q', input); // Add the query to the URL
    router.push(`/search?${params.toString()}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white w-[90%] mx-auto rounded-md flex gap-3 items-center justify-center shadow-sm px-4 py-2 border mt-2">
      <Input
        className="bg-white  text-black border-none focus-visible:ring-0 shadow-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} 
        placeholder="Search Products"
      />
      <button onClick={handleSearch} className="search-button text-black">
        <FaSearch className="text-black" />
      </button>
    </div>
  );
};

const SearchBox = () => {
  return (
    <Suspense fallback={<div>Loading search box...</div>}>
      <NavSearchBar />
    </Suspense>
  );
};

export default SearchBox;
