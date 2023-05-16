import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import supabase from "../../../config/supabase";

export default function ProductDetail() {
  const { productId } = useParams();

  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () =>
      supabase.from("product").select().eq("id", productId).single(),
    select: (res) => res.data,
  });

  if (isLoading) return <div>Loading...</div>;

  console.log(product);
  return (
    <div>
      <div className="lg:flex pb-[60px] border-solid border-b-[1px] border-[#e1e1e1]">
        {/* image */}
        <div className="flex lg:basis-1/2 w-full h-full ">
          <div className="w-full h-full md:h-[720px]  mr-5 mb-10 basis-4/5">
            <img
              className="w-full h-full object-cover"
              src={product.thumbnail}
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col basis-1/5 w-full h-[70%]">
            <img
              className="w-full basis-1/6 mb-5 object-cover"
              src={product.image1}
              alt="image"
            />
            <img
              className="w-full basis-1/6 mb-5 object-cover"
              src={product.image2}
              alt="image"
            />
            <img
              className="w-full basis-1/6 mb-5 object-cover"
              src={product.image3}
              alt="image"
            />
            <img
              className="w-full basis-1/6 mb-5 object-cover"
              src={product.image4}
              alt="image"
            />
            {/* <img
                className="w-full basis-1/6 mb-5 object-cover"
                src={product.image5}
                alt=""
              />
              <img
                className="w-full basis-1/6 mb-5 object-cover"
                src={product.image6}
                alt=""
              /> */}
          </div>
        </div>

        {/* Text */}
        <div className="lg:pl-[30px] xl:pl-12 lg:basis-1/2">
          {/* Name & Price */}
          <div className="mb-10 relative  text-[#111111]">
            <div className="w-full">
              <p className="font-[Quicksand] uppercase text-[#f45d96] text-[13px] font-bold tracking-[2px] mb-3">
                {product.category}
              </p>
              <h3 className="font-['Libre_Baskerville'] mb-2.5 text-[30px] leading-5 font-normal">
                {product.name}
              </h3>
              <ul className="flex w-full font-[Quicksand]">
                <li className="inline-block mr-[35px] after:content-['|'] after:text-[#aeaeae] after:absolute after:right-2/3 after:-translate-x-[75px]">
                  <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                  <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                  <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                  <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                  <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                </li>
                <li className="inline-block  mr-[35px] after:content-['|'] after:text-[#aeaeae] after:absolute after:right-1/2 after:-translate-x-[50px]">
                  03 reviews
                </li>
                <li> write a review</li>
              </ul>
            </div>
            <div className="absolute top-0 right-0  font-[Quicksand] text-[#f45d96] font-bold text-[30px]">
              <p>$ {product.price}</p>
            </div>
            <ul className="font-[Quicksand] text-[#111111] pt-7">
              <li>
                <span className="text-[#888888]">Categories:</span>
                {product.category}
              </li>
              <li>
                <span className="text-[#888888]">Poduct code: </span>
                {product.productcode}
              </li>
              <li>
                <span className="text-[#888888]">Reward points:</span>
                {product.rewardpoints}
              </li>
              <li>
                <span className="text-[#888888]">Availability:</span> In Stock
              </li>
            </ul>
          </div>

          {/* Count & button */}
          <div className="flex border-solid border-y-[1px] border-[#e1e1e1] py-12 mb-10">
            {/* Count */}
            <div className="flex items-center w-[170px] h-12 px-6 mb-5 mr-5 border-solid border-[1px] border-[#e1e1e1] rounded-full font-[Quicksand]">
              <div className="text-[#e1e1e1] cursor-pointer">
                <i className="fa-solid fa-minus"></i>
              </div>
              <div className="p-1 w-full">
                <input
                  className="w-full text-center text-[20px] font-bold "
                  type="text"
                  value="1"
                />
              </div>
              <div className="text-[#e1e1e1] cursor-pointer">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>

            {/* Add cart button */}
            <button className="group relative w-fit h-12 mb-5 mr-4 pb-3 pt-3.5 pr-7 pl-[50px] border-solid border-[1px] border-[#e1e1e1] rounded-full bg-black font-[Quicksand] text-white text-base font-bold uppercase">
              <div className="group-active:translate-x-[140px] group-active:bg-[#888888]  inline-block absolute left-0 -translate-y-[30%] -translate-x-[18%] transition-all  w-[48px] h-[48px] pt-1 bg-[#f45d96] text-xl text-center leading-10 rounded-full">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              add to cart
            </button>

            {/* Like button */}
            <div className="inline-block transition-all w-[48px] h-[48px] pt-1.5 bg-[#e1e1e1] text-xl text-center leading-10 rounded-full cursor-pointer active:bg-[#f45d96] active:text-white">
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>

          {/* Description & review & Ship*/}
          <div>
            <div className="flex flex-wrap mb-[30px] font-['Libre_Baskerville'] text-[#888888] text-[20px]">
              <a href="" className="pr-4">
                Description
              </a>
              <span>/</span>
              <a href="" className="px-4">
                Shipping & Return
              </a>
              <span>/</span>
              <a href="" className="pr-4">
                Reviews (03)
              </a>
            </div>
            <div className="font-[Quicksand] text-[#111111]">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
