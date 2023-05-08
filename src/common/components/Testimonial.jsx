import React from "react";
import ContainerFuild from "./ContainerFuild";
import Container from "./Container";

export default function Testimonial() {
  return (
    <div>
      <ContainerFuild>
        <div className="lg:relative bg-[#f7f5fa] pt-[100px] pb-[75px] overflow-hidden">
          {/* Flower left top */}
          <img
            className="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:translate-x-[-55%]"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Testimonial/left-bg.png.webp"
            alt=""
          />

          {/* Flower right bottom */}
          <img
            className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:translate-x-[210px] lg:translate-y-[48px]"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Testimonial/right-bg.png"
            alt=""
          />

          {/* Testimonail content */}
          <Container>
            <div className="text-center font-[Libre Baskerville]">
              <div className="max-w-[1140px] mx-auto lg:flex lg:justify-center">
                <div className="z-10 lg:basis-3/5 lg:px-[15px]">
                  {/* <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" /> */}
                  <i className="text-[#f45d96] text-[60px]  fa-solid fa-quote-left"></i>
                  <p className="italic font-normal text-xl text-[#444444] mt-10 mb-[30px]">
                    “I just wanted to say thank you for making such gorgeous
                    arrangements for our birthday celebration. I couldn’t get
                    over how perfect they were for the party. You did a
                    fantastic job, and I appreciate it very much”
                  </p>
                  <h4 className=" text-[20px] mb-2 ">Alejandro Houston</h4>
                  <span className="block font-[Quicksand] text-[13px] text-[#888888] tracking-[1px] font-medium uppercase ">
                    Businessman
                  </span>
                  {/* Button */}
                </div>
                <button className="lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-[100%] lg:translate-x-[150%] bg-white rounded-full w-12 h-12 mx-[5px] mt-10 ">
                  <i className=" text-[28px] text-[#888888] fa fa-angle-left"></i>
                </button>
                <button className="lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-[100%] lg:-translate-x-[150%] bg-white rounded-full w-12 h-12 mx-[5px] mt-10">
                  <i className="text-[28px] text-[#888888] fa fa-angle-right"></i>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </ContainerFuild>
    </div>
  );
}
