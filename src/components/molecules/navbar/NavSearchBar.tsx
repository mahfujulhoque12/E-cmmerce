'use client';

import { Input } from '@/components/atoms/Input';
import { useSearch } from '@/context/SearchContext';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState, useEffect,Suspense } from 'react';
import { FaSearch } from "react-icons/fa";
import { cardData as shopData, CardData } from '@/data/shopData';
import { cardData as bestSelling } from '@/data/bestSelling';
import { cardData as newArrival } from '@/data/newArraival';
import { cardData as featureProduct } from '@/data/featureProduct';
import Image from 'next/image';

const SearchBoxContent = () => {
  const { setQuery } = useSearch();
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<CardData[]>([]); // State for suggestions
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!input.trim()) return; // Prevent empty searches
    setQuery(input);
    const params = new URLSearchParams(searchParams.toString());
    params.set('q', input); // Add the query to the URL
    router.push(`/search?${params.toString()}`);
    setSuggestions([]);
    setIsSearching(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const fetchSuggestions = async (query: string) => {
    setIsSearching(true); // User is actively searching
    const allData = [...shopData, ...bestSelling, ...newArrival, ...featureProduct];
    
    // Filter data based on the `title` property
    const filtered = allData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  };

  useEffect(() => {
    if (input.trim()) {
      fetchSuggestions(input); // Fetch suggestions when input changes
    } else {
      setSuggestions([]);
      setIsSearching(false); // Stop searching if input is empty
    }
  }, [input]);

  return (
    <div className="relative block md:hidden">
      <div className="bg-white w-[90%] mx-auto border rounded-md flex gap-3 items-center justify-center shadow-sm px-4 py-2 mt-2">
        <Input
          className="bg-white text-black border-none focus-visible:ring-0 shadow-none"
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
      {isSearching && input.trim() && suggestions.length === 0 ? (
        <div className="absolute top-full left-0 w-full  bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10 text-center p-4">
          <p className="text-gray-500">No data found</p>
        </div>
      ) : suggestions.length > 0 ? (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="px-4 py-2 hover:bg-gray-100 hover:text-black transition-all duration-300 cursor-pointer"
              onClick={() => {
                setInput(suggestion.title); // Set the input to the selected suggestion
                setSuggestions([]); // Clear suggestions
                setIsSearching(false); // Stop searching
                handleSearch(); // Navigate as per the existing logic
              }}
            >
              <div className="flex items-center justify-between">
                <span>{suggestion.title}</span>
                <Image
                  src={suggestion.image}
                  width={60}
                  height={60}
                  alt={suggestion.title}
                  className="h-[60px] w-[60px]"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const SearchBox = () => (
  <Suspense fallback={<div>Loading search...</div>}>
    <SearchBoxContent />
  </Suspense>
);

export default SearchBox;


