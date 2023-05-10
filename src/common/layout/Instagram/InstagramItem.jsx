import React, { useState } from "react";

export default function InstagramItem({ imgUrl, index }) {
  return (
    <div className="group relative h-[372px] basis-1/5 transition-all ">
      <img
        className="w-full h-full object-cover bg-top "
        key={index}
        src={imgUrl}
        alt={`instagram-${index}`}
      />
      <div className="absolute top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[90%]  py-5 lg:px-[30px] lg:py-4 bg-[#ffffff] text-center hidden group-hover:block">
        <i className="text-[#f45d96] text-[30px] fa-brands fa-instagram"></i>
        <h6>
          Follow us
          <a href="" className="underline">
            @florist
          </a>
        </h6>
      </div>
    </div>
  );
}
