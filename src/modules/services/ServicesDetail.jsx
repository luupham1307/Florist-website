import React from "react";
import ServiceContent from "./ServiceContent";
import Quote from "./Quote";

export default function ServicesDetail() {
  return (
    <div className="lg:basis-4/6 lg:pl-[60px]">
      <div>
        {/* Service video */}
        <a className="relative" href="  ">
          <div className="relative">
            <img
              className="h-[432px] w-full object-cover object-center "
              src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
              alt="Service-video"
            />

            <i className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[80px] text-[#f45d96] rounded-full hover:shadow-[#ECF2E6] hover:shadow-[0px_3px_6px] fa-regular fa-circle-play "></i>
            <h2 className="absolute bottom-0 left-0 translate-y-[50%] bg-white text-[50px] font-normal pt-[10px] pr-[25px] mb-[18px] ">
              Custom order
            </h2>
          </div>
        </a>
        <p className="font-[Quicksand] text-[#f45d96] font-bold mt-[30px] mb-9 ">
          From $60 - $300
        </p>

        {/* Content */}
        <ServiceContent />

        {/* Input box */}
        <Quote/>
      </div>
    </div>
  );
}
