'use client';

import React, { useEffect, useState } from 'react';
import { useSearch } from '@/context/SearchContext';
import filterData from '@/utils/filterData';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';
import AddWishlist from '@/components/molecules/shop/AddWishlist';
import { cardData as shopData, CardData } from '@/data/shopData';
import { cardData as bestSelling } from '@/data/bestSelling';
import { cardData as newArrival } from '@/data/newArraival';
import { cardData as featureProduct } from '@/data/featureProduct';

import CardTitle from '@/components/atoms/CardTitle';
import Span from '@/components/atoms/Span';
import Paragraph from '@/components/atoms/Paragraph';

const SearchCom = () => {
  const { query } = useSearch();
  const [results, setResults] = useState<CardData[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Combine all datasets
    const allData: CardData[] = [...shopData, ...bestSelling, ...newArrival, ...featureProduct];

    if (!allData || allData.length === 0) {
      console.error('All data is undefined or empty');
      return;
    }

    const filteredResults = filterData(allData, query); // Filter combined data
    setResults(filteredResults);
  }, [query]);

  const handleDetails = (slug: string, source: string) => {
    router.push(`/${source}/${slug}`); // Navigate dynamically based on the source
  };

  return (
    <div>
      <CardTitle className="py-2 text-base font-medium lg:text-lg ">Search Results</CardTitle>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((card) => (
            <div
              key={card.id}
              className="border shadow-md hover:shadow-lg rounded-md relative  group flex flex-col h-full"
            >
              <div className="px-4 flex justify-center items-center overflow-hidden">
                <Image
                  src={card.image}
                  width={300}
                  height={250}
                  alt={card.title}
                  className="h-[200px] object-cover mt-5 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <p className="w-full h-[2px] bg-gray-200"></p>

              <div className="p-4 flex flex-col flex-grow justify-start">
                <Span className="text-xs text-gray-500 font-semibold uppercase">{card.category}</Span>
                <CardTitle className="font-normal text-sm lg:text-base group-hover:font-semibold group-hover:text-sky-700 transition-all duration-200 mt-2">
                  {card.title}
                </CardTitle>

                <div className="mt-3 flex items-center justify-start gap-3">
                  <Paragraph className="text-base lg:text-lg font-semibold text-sky-700 mt-auto">{card.price}৳</Paragraph>
                  <Span className="text-xs text-gray-500">
                    <del>{card.oldPrice}৳</del>
                  </Span>
                </div>
                <Span className="absolute top-2 left-0 bg-purple-500 px-3 py-1 rounded-r-full text-sm font-medium text-white">
                  save: {card.discount}৳
                </Span>
                <div>
                  <AddWishlist
                    item={{
                      id: card.id,
                      name: card.title,
                      price: card.price,
                      image: card.image
                    }}
                  />
                  <Button
                    onClick={() => handleDetails(card.slug, card.source)}
                    variant="mediumRoundedBtn"
                    className="bg-white text-sky-700 hover:text-sky-800 hover:bg-white"
                  >
                    See Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for &quot;{query}&quot;</p>
      )}
    </div>
  );
};

export default SearchCom;
