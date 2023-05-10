import React from "react";

export default function ServiceType() {
  let arrServices = [
    {
      imgUrl:
        "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-1.png.webp",
      heading: "Customer order",
      description:
        "Flower help you perfectly express how important your significant",
      price: "From $60 - $3000",
    },
    {
      imgUrl:
        "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-2.png.webp",
      heading: "Event decoration",
      description:
        "Flower help you perfectly express how important your significant",
      price: "From $60 - $3000",
    },
    {
      imgUrl:
        "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-3.png.webp",
      heading: "Green landscape",
      description:
        "Flower help you perfectly express how important your significant",
      price: "From $60 - $3000",
    },
  ];
  return (
    <div className="lg:basis-2/6 lg:pt-[35px] lg:pr-[15px] ">
      {arrServices.map((item) => {
        return (
          <a href="">
            <div className="relative mb-[75px] px-2.5 lg:px-10 xl:px-[75px] pb-[30px] xl:pb-[35px] pt-[60px] text-center border-solid border-[0.5px] border-[#f45d96] border-opacity-20 ">
              <div className="absolute top-0 left-1/2 -translate-y-[50%] -translate-x-[50%] max-w-[100px] h-[70px] z-1 bg-white px-5 mx-auto">
                <img className="w-full h-full " src={item.imgUrl} alt="" />
              </div>

              <h4 className="font-[Libre Baskerville] text-h4 text-[#111111] font-normal mb-[15px]">
                {item.heading}
              </h4>
              <p className="font-[Quicksand] text-base text-[#444444] font-normal mx-3">
                {item.description}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
