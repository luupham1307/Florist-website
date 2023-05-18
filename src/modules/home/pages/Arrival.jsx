import React, { useState } from "react";
import Container from "../../../common/components/Container";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
import ProductListing from "../../../common/components/Product/ProductListing";

export default function Arrival() {
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
    <div className="pb-[100px]">
      {/* Arrival Heading & Filter */}
      <Container>
        <div className="text-center ">
          {/* Heading */}
          <div>
            <span className="font-[Quicksand] text-[#f45d96] text-base font-bold uppercase tracking-[4px] mb-2 ">
              Our flower
            </span>
            <h2 className="font-[Libre Baskerville] text-h2 leading-[58px] text-[#111111] font-normal ">
              New arrival
            </h2>
          </div>

          {/* Filter nav */}
          <div className="mb-10 text-center ">
            <ul className="flex justify-center flex-wrap font-[Quicksand] text-base text-[#111111] font-normal text-center">
              <li className="w-fit items-center inline-block px-[10px] py-[2px] mr-[10px] mb-[10px] md:mb-0 border-solid border-transparent border-[2px] cursor-pointer">
                All
              </li>
              <li className="w-fit items-center inline-block px-[10px] py-[2px] mr-[10px] mb-[10px] md:mb-0 border-solid border-transparent border-[2px]  cursor-pointer">
                Bouquet
              </li>
              <li className="w-fit items-center inline-block px-[10px] py-[2px] mr-[10px] mb-[10px] md:mb-0 border-solid border-transparent border-[2px]  cursor-pointer">
                Flower box
              </li>
              <li className="w-fit items-center inline-block px-[10px] py-[2px] mr-[10px] mb-[10px] md:mb-0 border-solid border-transparent border-[2px]  cursor-pointer">
                Flower sheft
              </li>
              <li className="w-fit items-center inline-block px-[10px] py-[2px] mr-[10px] mb-[10px] md:mb-0 border-solid border-transparent border-[2px]  cursor-pointer">
                Basket of flower
              </li>
              <li className="w-fit items-center inline-block px-[10px] py-[2px] mr-[10px] mb-[10px] md:mb-0 border-solid border-transparent border-[2px]  cursor-pointer">
                Gift combos
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Arrival items */}

      <ProductListing products={product} />

      {/* Button view all */}
      <div className="text-center">
        <a
          href=""
          className="inline-block font-[Quicksand] text-sm text-[#111111] font-bold tracking-[2px] uppercase pb-[2px] mb-[2px] border-solid border-b-[2px] border-[#111111]"
        >
          View all products
        </a>
      </div>
    </div>
  );
}
