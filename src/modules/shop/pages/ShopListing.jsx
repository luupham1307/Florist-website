import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ProductItem from "../../../common/components/ProductItem";
import supabase from "../../../config/supabase";
import Container from "../../../common/components/Container";

export default function ShopListing() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => supabase.from("Product").select(),
    select: (res) => res.data,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className=" py-24 lg:px-[15px] ">
      {/* Filter */}
      <div>
        <div></div>
      
        
       
      </div>
      {/* Product items */}
      <div className="w-full px-[15px] md:px-0 mx-auto">
        <div className="flex flex-wrap mx-[18px]">
          {product.map((productItem, index) => (
            <ProductItem key={index} productItem={productItem} index={index} />
          ))}
        </div>
      </div>

      {/* Button view all */}
      <div className="text-center">
        <a
          href=""
          className="inline-block font-[Quicksand] text-sm text-[#111111] font-bold tracking-[2px] uppercase pb-[2px] mb-[2px] border-solid border-b-[2px] border-[#111111]"
        >
          Load more products
        </a>
      </div>
    </div>
  );
}
