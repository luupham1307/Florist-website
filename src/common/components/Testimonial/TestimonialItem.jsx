import React from "react";

export default function TestimonialItem({review, customerName, customerInfo, display}) {
  return (
    <div className={`z-10 ${display} lg:basis-3/5 lg:px-[15px]`}>
      {/* <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" /> */}
      <i className="text-[#f45d96] text-[60px]  fa-solid fa-quote-left"></i>
      <p className="italic font-normal text-xl text-[#444444] mt-10 mb-[30px]">
        {review}
      </p>
      <h4 className=" text-[20px] mb-2 ">{customerName}</h4>
      <span className="block font-[Quicksand] text-[13px] text-[#888888] tracking-[1px] font-medium uppercase ">
        {customerInfo}
      </span>
    </div>
  );
}
