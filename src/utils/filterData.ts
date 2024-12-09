import { CardData  } from '@/data/shopData';

const filterData = (data: CardData [] = [], query: string): CardData[] => {
  if (!query) return [];
  return data.filter((item) => {
    const titleMatch = item.title?.toLowerCase().includes(query.toLowerCase());
    const descriptionMatch = item.des?.toLowerCase().includes(query.toLowerCase());
    return titleMatch || descriptionMatch;
  });
};

export default filterData;
