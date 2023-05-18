import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogItem({blogItem, index }) {
  return (
    <div key={index} className="group mb-[50px] md:basis-1/2 lg:basis-1/3">
      {/* shadow */}
      <div className="md:mx-[15px] shadow-xl">
        {/* image */}
        <div>
          <img
            className="w-full"
            src={blogItem.thumbnail}
            alt={`blog-img-${index}`}
          />
        </div>

        {/* blog content */}
        <div className="relative h-[300px] px-[35px] pt-[38px] pb-[30px] bg-white text-center">
          <span
            className={`absolute inline-block font-[Quicksand] top-0 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14px] text-white font-bold uppercase bg-black group-hover:bg-[#f45d96] px-3 pt-1 pb-[2px]`}
          >
            {blogItem.type}
          </span>
          <Link to="/cart/blogdetail" className="group-hover:underline">
            <h4 className="font-[Libre Baskerville] text-h4 font-normal mb-3">
              {blogItem.title}
            </h4>
          </Link>

          <p className="font-[Quicksand] text-sm text-[#111111] font-normal mb-[10px]">
            {blogItem.description}
          </p>
          <span className="font-[Quicksand] text-sm font-medium text-[#888888] uppercase ">
            {blogItem.day}
          </span>
        </div>
      </div>
    </div>
  );
}