import React from "react";
import Container from "../../../common/components/Container";

export default function Arrival() {
  return (
    <div>
      <Container>
        {/* Arrival text */}
        <div className="text-center">
          {/* Heading */}
          <div>
            <span className="font-[Quicksand] text-[#f45d96] text-base font-bold uppercase tracking-[4px] mb-2 ">
              Our flower
            </span>
            <h2 className="font-[Libre Baskerville] text-h2 leading-[58px] text-[#111111] font-normal ">
              New arrival
            </h2>
          </div>

          {/* Filter nav */}
          <div className="mb-10 text-center ">
            <ul className="flex flex-wrap font-[Quicksand] text-base text-[#111111] font-normal ">
              <li className="px-[10] py-[2px] mr-[10px] mb-[10px] border-solid border-transparent border-[2px] cursor-pointer ">
                All
              </li>
              <li className="px-[10] py-[2px] mr-[10px] mb-[10px] cursor-pointer ">
                Bouquet
              </li>
              <li className="px-[10] py-[2px] mr-[10px] mb-[10px] cursor-pointer ">
                Flower box
              </li>
              <li className="px-[10] py-[2px] mr-[10px] mb-[10px] cursor-pointer ">
                Flower sheft
              </li>
              <li className="px-[10] py-[2px] mr-[10px] mb-[10px] cursor-pointer ">
                Basket of flower
              </li>
              <li className="px-[10] py-[2px] mr-[10px] mb-[10px] cursor-pointer ">
                Gift combos
              </li>
            </ul>
          </div>
        </div>

        {/* Arrival items */}
        <div>{/*  */}</div>
      </Container>
    </div>
  );
}
