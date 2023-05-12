import React from "react";
import SendButton from "../../common/components/SendButton";

export default function Quote() {
  return (
    <div className="w-full bg-[#f7f5fa] p-[50px] font-[Quicksand]">
      {/* Heading */}
      <h4 className="font-['Libre_Baskerville'] text-h4 text-[#111111] font-normal mb-6 text-center uppercase">
        Get A Qoute
      </h4>

      {/* Input box */}
      <form className="md:flex md:flex-wrap" action="">
        <div className=" md:pr-2 md:basis-1/2  ">
          <input
            className="w-full h-[46px] font-base text-[#888888] border-solid border-[1px] border-[#e1e1e1] pl-5 md:w-full mb-7 "
            type="text"
            placeholder="Name"
          />
        </div>
        <div className=" md:pr-2 md:basis-1/2">
          <input
            className="w-full h-[46px] font-base text-[#888888] border-solid border-[1px] border-[#e1e1e1] pl-5 md:w-full mb-7 "
            type="text"
            placeholder="Phone"
          />
        </div>

        <div className="md:pr-2 md:basis-1/2">
          <input
            className="w-full h-[46px]  font-base text-[#888888] border-solid border-[1px] border-[#e1e1e1] pl-5 md:w-full mb-7 "
            type="text"
            placeholder="Email"
          />
        </div>

        <div className=" md:pr-2 md:basis-1/2">
          <select
            className="w-full h-[46px]  font-base text-[#888888] border-solid border-[1px] border-[#e1e1e1] pl-5 md:w-full mb-7 pr-[30px] cursor-pointer "
            id=""
          >
            <option value="Type">Type service</option>

            <option value="Custom order">Custom order</option>
            <option value="Event decoration">Event decoration</option>
            <option value="Green landscape">Green landscape</option>
          </select>
        </div>

        <div className="w-full md:pr-2 ">
          <input
            className="w-full h-[100px] font-base text-[#888888] border-solid border-[1px] border-[#e1e1e1] pl-5 mb-6"
            type="text"
            placeholder="Message"
          />
        </div>
      </form>

      {/* Button */}
      <SendButton />
    </div>
  );
}
