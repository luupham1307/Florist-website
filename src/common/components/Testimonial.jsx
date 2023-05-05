import React from "react";
import ContainerFuild from "./ContainerFuild";

export default function Testimonial() {
  return (
    <div>
      <ContainerFuild>
        <div className="relative bg-[#f7f5fa] pt-[100px] pb-[75px] overflow-hidden">
          {/* Flower left top */}
          <img
            className="absolute top-0 left-0 translate-x-[-55%]"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Testimonial/left-bg.png.webp"
            alt=""
          />

          {/* Flower right bottom */}
          <img
            className="absolute bottom-0 right-0 translate-x-[210px] translate-y-[48px]"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Testimonial/right-bg.png"
            alt=""
          />

          {/* Testimonail content */}
          <div className="text-center font-[Libre Baskerville]">
            <div className="flex  justify-center ">
              <div className="basis-3/6 px-[15px] relative">
                {/* <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" /> */}
                <i className="text-[#f45d96] text-[60px]  fa-solid fa-quote-left"></i>
                <p className="italic font-normal text-xl text-[#444444] mt-10 mb-[30px]">
                  “I just wanted to say thank you for making such gorgeous
                  arrangements for our birthday celebration. I couldn’t get over
                  how perfect they were for the party. You did a fantastic job,
                  and I appreciate it very much”
                </p>
                <h4 className=" text-[20px] mb-2 ">Alejandro Houston</h4>
                <span className="font-[Quicksand] text-[13px] text-[#888888] tracking-[1px] font-medium uppercase ">
                  Businessman
                </span>
                {/* Button */}
                <button className=" absolute top-1/2 left-0 -translate-x-[50%] -translate-y-[50%] bg-white rounded-full w-12 h-12">
                  <i className=" text-[28px] text-[#888888] fa fa-angle-left"></i>
                </button>
                <button className=" absolute top-1/2 right-0 translate-x-[50%] -translate-y-[50%] bg-white rounded-full w-12 h-12 ">
                  <i className="text-[28px] text-[#888888] fa fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerFuild>
    </div>
  );
}
