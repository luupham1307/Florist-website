import React, { useState } from "react";


 
export default function InstagramItem({imgUrl, index}) {
  const [openText, setOpenText] = useState(false);
  function handleShowInsta() {
    setOpenText(!openText);
  }
  return (
    <div className="relative h-[372px] ">
      <img
        className=" h-full object-cover bg-top "
        key={index}
        src={imgUrl}
        alt={`instagram-${index}`}
        onMouseOver={handleShowInsta}
        onMouseLeave={handleShowInsta}
      />
      {openText && (
        <div className="absolute top-1/2 -translate-y-1/2 w-full py-5 lg:px-[30px] lg:py-4 bg-[#ffffff] text-center">
          <i className="text-[#f45d96] text-[30px] fa-brands fa-instagram"></i>
          <h6>
            Follow us
            <a href="" className="underline">
              @florist
            </a>
          </h6>
        </div>
      )}
    </div>
  );
}
