import React from "react";

export default function ProductItem({ imgUrl, id, name, price, note }) {
  return (
    <div className="w-full">
      <div className="relative w-full font-[Quicksand]">
        <img
          className="w-full h-[344px] object-cover object-center "
          src={imgUrl}
          alt={`Item-${id}`}
        />
        <p className="inline-block absolute top-4 left-4 bg-[#111111] text-white text-[13px] font-bold uppercase px-2 py-[2px]">
          {note}
        </p>

        {/* Icon */}
        <ul className="absolute bottom-7 left-0 text-center">
          <li className="inline-block mr-[10px] w-[40px] h-[40px] bg-white text-[18px] leading-10 rounded-full">
            <i class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </li>
          <li className="inline-block mr-[10px]  w-[40px] h-[40px] bg-white text-[18px] leading-10 rounded-full">
            <i class="fa-solid fa-bag-shopping"></i>
          </li>
          <li className="inline-block mr-[10px]  w-[40px] h-[40px] bg-white text-[18px] leading-10 rounded-full">
            <i class="fa-regular fa-heart"></i>
          </li>
        </ul>
      </div>
      <div className="text-center text-[#111111]">
        <h5 className="font-[Libre Baskerville] text-[18px] font-normal pt-6 mb-2 ">
          {name}
        </h5>
        <p className="font-[Quicksand] text-base font-bold ">{price}</p>
        <a
          href=""
          className="font-[Quicksand] text-[14px] text-[#f45d96] font-bold uppercase "
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}
