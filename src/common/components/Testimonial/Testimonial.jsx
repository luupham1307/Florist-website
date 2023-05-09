import React, { useState } from "react";
import ContainerFuild from "../ContainerFuild";
import Container from "../Container";
import TestimonialItem from "./TestimonialItem";

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

          {/* Testimonail text */}
          <Container>
            <div className="text-center font-[Libre Baskerville]">
              <div className="max-w-[1140px] mx-auto lg:flex lg:justify-center">
                {/* Text-1  */}
                <TestimonialItem
                  review={`“I just wanted to say thank you for making such gorgeous
                    arrangements for our birthday celebration. I couldn’t get
                    over how perfect they were for the party. You did a
                    fantastic job, and I appreciate it very much”`}
                  customerName={"Alejandro Houston"}
                  customerInfo={"Businessman"}
                  display={"block"}
                />

                {/* Text-2 */}
                <TestimonialItem
                  review={`“I just wanted to say thank you for making such gorgeous
                    arrangements for our birthday celebration. I couldn’t get
                    over how perfect they were for the party. You did a
                    fantastic job, and I appreciate it very much”`}
                  customerName={"Alejandro Houston"}
                  customerInfo={"Businessman"}
                  display={"hidden"}
                />

                {/* Text-3 */}
                <TestimonialItem
                  review={`“I just wanted to say thank you for making such gorgeous
                    arrangements for our birthday celebration. I couldn’t get
                    over how perfect they were for the party. You did a
                    fantastic job, and I appreciate it very much”`}
                  customerName={"Alejandro Houston"}
                  display={"hidden"}
                />

                {/* Button */}
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
