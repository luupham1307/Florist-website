import React from "react";
import ContainerFuild from "../../../common/components/ContainerFuild";

export default function CallToAction() {
  return (
    <div>
      <ContainerFuild>
        <div className="relative">
          {/* Image */}

          <img
            className="w-full h-[502px] object-cover bg-center"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/call-bg.jpg"
            alt=""
          />
          {/* Text */}
          <div className=" h-full px-15px mx-auto ">
            <div className="absolute flex flex-wrap  top-0 py-24  mx-[15px]">
              <div className="px-[15px] lg:basis-1/2">
                <span className="font-[Quicksand] mb-5 text-white text-left text-base font-bold tracking-[4px] uppercase ">
                  Custom Flower
                </span>
                <h2 className="font-['Herr_Von_Muellerhoff'] text-[42px] text-[#ffffff] mb-[42px] ">
                  Let out flowers make your party more perfect
                </h2>
                <button className="font-[Quicksand] bg-[#f45d96] text-[#ffffff] text-[15px] tracking-[2px] font-bold px-[30px] py-[14px] uppercase rounded-full ">
                  Order now
                </button>
                <button className="font-[Quicksand] bg-[#ffffff] text-[#f45d96]  text-[15px] tracking-[2px] font-bold px-[30px] py-[14px] ml-4 uppercase rounded-full ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerFuild>
    </div>
  );
}
