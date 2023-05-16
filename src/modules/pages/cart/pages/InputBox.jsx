import React from "react";

export default function InputBox({ label, placeholder, children }) {
  return (
    <div className="mb-6 font-[Quicksand] text-[#444444]">
      <label htmlFor="" className="mb-2.5 ">
        {label}
      </label>
      <input
       
        className="w-full h-[46px] pl-5 mb-[15px] p-[2px] border-solid border-[1px] border-[#e1e1e1]"
        type="text"
        placeholder={placeholder}
      />
      {children}
    </div>
  );
}
