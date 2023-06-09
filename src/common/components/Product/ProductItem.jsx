import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ productItem }) {
  return (
    <div className="group w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5  md:px-[15px]">
      <div className="relative w-full font-[Quicksand] text-center">
        <img
          className="w-full h-[344px] object-cover object-center "
          src={productItem.thumbnail}
          alt={`Item-${productItem.id}`}
        />
        <div>
          {productItem.note ? (
            <p className="inline-block absolute top-4 left-4 bg-[#111111] text-white text-[13px] font-bold uppercase px-2 py-[2px]">
              {productItem.note}
            </p>
          ) : null}
        </div>

        {/* Icon */}
        <ul className="hidden absolute group-hover:flex  bottom-7 left-1/2 translate-x-[-50%] text-center">
          <li className="hover:rotate-[360deg] shadow-[#ECF2E6] shadow-[0px_3px_6px] hover:text-white hover:bg-[#f45d96] transition-all mr-[10px] w-[40px] h-[40px] bg-white text-lg leading-10 rounded-full">
            <Link to="/shopdetail">
              <i className=" fa-solid fa-magnifying-glass fa-rotate-90"></i>
            </Link>
          </li>
          <li className="hover:rotate-[360deg] shadow-[#ECF2E6] shadow-[0px_3px_6px] hover:text-white hover:bg-[#f45d96] transition-all mr-[10px]  w-[40px] h-[40px] bg-white text-lg leading-10 rounded-full">
            <Link to="/cartDetails">
              <i className=" fa-solid fa-bag-shopping"></i>
            </Link>
          </li>
          <li className="hover:rotate-[360deg] shadow-[#ECF2E6] shadow-[0px_3px_6px] hover:text-white hover:bg-[#f45d96] transition-all mr-[10px]  w-[40px] h-[40px] bg-white text-lg leading-10 rounded-full">
            <Link>
              <i className=" fa-regular fa-heart"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center text-[#111111] mb-10  md:mb-[50px]">
        <Link to="/shopdetail">
          <h5 className="font-['Libre_Baskerville'] text-lg font-normal capitalize pt-6 mb-2 cursor-pointer">
            {productItem.name}
          </h5>
        </Link>


        <p className="group-hover:hidden font-[Quicksand] text-base font-bold ">
          $ {productItem.price}
        </p>

        <Link
          to="/cartdetails"
          className="hidden group-hover:block font-[Quicksand] text-[14px] text-[#f45d96] font-bold uppercase "
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
}
