import React, { useState } from "react";
import ServiceContent from "./ServiceContent";
import Quote from "./Quote";

export default function ServicesDetail({
  onShowVideo,
  arrSer,
  onShowSerDetail,
  showSerDetail,
  number
}) {
  return (
    <div className="lg:basis-4/6 lg:pl-[60px]">
      <div>
        {/* Service video */}

        <div className="relative" onClick={onShowSerDetail}>
          <img
            className="h-[432px] w-full object-cover object-center "
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
            alt="Service-video"
          />
          <a
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            onClick={onShowVideo}
            href=""
          >
            <i className="text-[80px] text-[#f45d96] rounded-full hover:shadow-[#ECF2E6] hover:shadow-[0px_3px_6px] fa-regular fa-circle-play "></i>
          </a>

          <h2 className="absolute bottom-0 left-0 translate-y-[50%] bg-white text-[50px] font-normal pt-[10px] pr-[25px] mb-[18px] ">
            {arrSer[number].heading}
          </h2>
        </div>

        <p className="font-[Quicksand] text-[#f45d96] font-bold mt-[30px] mb-9 ">
          {arrSer[number].price}
        </p>

        {/* Content */}
        <ServiceContent
          text1={`For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
        growing flowers that can be dried and incorporated into late fall and
        winter floral arrangements has been a game-changer. During her growing
        season, this farmer-florist relies on a vivid palette of annuals,
        perennials and ornamental grasses to supply her studio.`}
          textList1={`Free initial consulting. For retail and office tenants who are
        interested in a weekly delivery program floral design plan.`}
          textList2={`Birthday Blooms. Red White & Bloom will offer a free arrangement to
          each office manager for a commercial account on his or her birthday.`}
          textList3={`Priority delivery program. Red White & Bloom will work with each
          commercial customer to determine a weekly delivery schedule.`}
          textList4={`Referral Program. Red White & Bloom will offer a one-time 25%
          discount to each commercial customer for every additional.`}
          text2={`For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
          growing flowers that can be dried and incorporated into late fall and
          winter floral arrangements has been a game-changer. During her growing
          season, this farmer-florist relies on a vivid palette of annuals,
          perennials and ornamental grasses to supply her studio.`}
        />

        {showSerDetail && (
          <ServiceContent
            text1={`For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
       growing flowers that can be dried and incorporated into late fall and
       winter floral arrangements has been a game-changer. During her growing
       season, this farmer-florist relies on a vivid palette of annuals,
       perennials and ornamental grasses to supply her studio.`}
            textList1={`Free initial consulting. For retail and office tenants who are
       interested in a weekly delivery program floral design plan.`}
            textList2={`Birthday Blooms. Red White & Bloom will offer a free arrangement to
         each office manager for a commercial account on his or her birthday.`}
            textList3={`Priority delivery program. Red White & Bloom will work with each
         commercial customer to determine a weekly delivery schedule.`}
            textList4={`Referral Program. Red White & Bloom will offer a one-time 25%
         discount to each commercial customer for every additional.`}
          />
        )}

        {showSerDetail && (
          <ServiceContent
            text1={`For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
         growing flowers that can be dried and incorporated into late fall and
         winter floral arrangements has been a game-changer. During her growing
         season, this farmer-florist relies on a vivid palette of annuals,
         perennials and ornamental grasses to supply her studio.`}
            textList1={`Free initial consulting. For retail and office tenants who are
         interested in a weekly delivery program floral design plan.`}
            textList2={`Birthday Blooms. Red White & Bloom will offer a free arrangement to
           each office manager for a commercial account on his or her birthday.`}
            text2={`For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
           growing flowers that can be dried and incorporated into late fall and
           winter floral arrangements has been a game-changer. During her growing
           season, this farmer-florist relies on a vivid palette of annuals,
           perennials and ornamental grasses to supply her studio.`}
          />
        )}

        {/* Input box */}
        <Quote />
      </div>
    </div>
  );
}
