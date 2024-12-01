"use client"
import ProductDetails from '@/components/organisms/product-details/ProductDetails';
import { FC, use } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Page Component
const Page:FC<PageProps> =  ({ params }) => {
  const { slug } = use(params);


  return (
    <div>
      <ProductDetails slug={slug} />
    </div>
  );
};

export default Page;
