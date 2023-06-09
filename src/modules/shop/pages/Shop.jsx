import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
import Container from "../../../common/components/Container";
import ProductItem from "../../../common/components/Product/ProductItem";

export default function Shop() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => supabase.from("Product").select(),
    select: (res) => res.data,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="py-24 lg:px-[15px] mx-auto">
      {/* Filter */}
      <Container>
        <div className="absolute right-0 -translate-y-[150%] px-[15px] mx-auto w-[246px] h-[46px] mb-5 font-[Quicksand]">
          <select
            className=" w-full h-full font-base text-[#888888] border-solid border-[1px] border-[#e1e1e1] pl-5 md:w-full mb-7 pr-[30px] cursor-pointer rounded-none "
            id=""
          >
            <option value="Sort">Sort by popularity</option>
            <option value="az">A to Z</option>
            <option value="123">1 to 9</option>
          </select>
        </div>
      </Container>

      {/* Product items */}
      <div className="w-full px-[15px] md:px-0 mx-auto">
        <Container>
          <div className="flex flex-wrap mx-[18px]">
            {product.map((productItem, index) => {
              return <ProductItem key={index} productItem={productItem} />; 
            })}
          </div>
        </Container>
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
