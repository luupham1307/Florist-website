import React from "react";
import ContainerFuild from "./ContainerFuild";

export default function Slice({ pageHeader, pageName }) {
  return (
    <div>
      <ContainerFuild>
        <div className="relative">
          {/* Background img */}
          <img
            className="object-cover object-[center_top] w-full h-[200px]"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/slice3.webp"
            alt="Slide"
          />

          {/* Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center w-full px-[15px] py-[60px]">
            <h2 className="font-[Libre Baskerville] text-[50px] font-normal leading-5 text-[#111111] mb-5 w-full ">
              {pageHeader}
            </h2>
            <div className="font-[Quicksand] uppercase  font-base w-full">
              <a
                href="#"
                className="text-[#f45d96] mr-7 after:content-['|'] after:text-[#aeaeae] after:absolute after:right-1/2 after:-translate-x-[100%]"
              >
                Home
              </a>
              <a href="" className="">
                {pageName}
              </a>
            </div>
          </div>
        </div>
      </ContainerFuild>
    </div>
  );
}
