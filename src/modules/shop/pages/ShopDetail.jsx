import React from "react";
import Container from "../../../common/components/Container";

export default function ShopDetail() {
  return (
    <div>
      {/* Product Detail */}
      <div className="py-5">
        <Container>
          <div className="lg:flex ">
            {/* image */}
            <div className="flex lg:basis-1/2 w-full h-full ">
              <div className="w-full h-full md:h-[720px]  mr-5 mb-10 basis-4/5">
                <img
                  className="w-full h-full object-cover"
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-18.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col basis-1/5 w-full h-[70%]">
                <img
                  className="w-full basis-1/6 mb-5 object-cover"
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
                  alt=""
                />
                <img
                  className="w-full basis-1/6 mb-5 object-cover"
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
                  alt=""
                />
                <img
                  className="w-full basis-1/6 mb-5 object-cover"
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
                  alt=""
                />
                <img
                  className="w-full basis-1/6 mb-5 object-cover"
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
                  alt=""
                />
                <img
                  className="w-full basis-1/6 mb-5 object-cover"
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
                  alt=""
                />
                <img
                  className="w-full basis-1/6 mb-5 object-cover"
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-16.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-[30px] lg:basis-1/2">
              {/* Name & Price */}
              <div className="mb-10 relative  text-[#111111]">
                <div className="w-full">
                  <p className="font-[Quicksand] uppercase text-[#f45d96] text-[13px] font-bold tracking-[2px] mb-3">
                    Succulent
                  </p>
                  <h3 className="font-['Libre_Baskerville'] mb-2.5 text-[30px] leading-5 font-normal">
                    Fly me to the moon
                  </h3>
                  <ul className="flex w-full font-[Quicksand]">
                    <li className="inline-block mr-[35px] after:content-['|'] after:text-[#aeaeae] after:absolute after:right-2/3 after:-translate-x-[75px]">
                      <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                      <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                      <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                      <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                      <i className="text-yellow-500 text-[13px] fa-regular fa-star"></i>
                    </li>
                    <li className="inline-block  mr-[35px] after:content-['|'] after:text-[#aeaeae] after:absolute after:right-1/2 after:-translate-x-[50px]">
                      03 reviews
                    </li>
                    <li> write a review</li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 font-[Quicksand] text-[#f45d96] font-bold text-[30px]">
                  <p>$ 34.00</p>
                </div>
              </div>

              <ul className="font-[Quicksand]">
                <li>
                  <span className="text-[#888888]">Categories:</span> Succulent
                </li>
                <li>
                  <span className="text-[#888888]">Poduct code: </span> PM 101
                </li>
                <li>
                  <span className="text-[#888888]">Reward points:</span> 30
                </li>
                <li>
                  <span className="text-[#888888]">Availability:</span> In Stock
                </li>
              </ul>

              <div className="flex border-solid border-y-[1px] border-[#e1e1e1] py-12 mb-10">
                <div className="flex items-center w-[170px] h-12 px-6 mb-5 mr-5 border-solid border-[1px] border-[#e1e1e1] rounded-full">
                  <div className="">
                    <i class="fa-solid fa-minus"></i>
                  </div>
                  <div className="p-1 w-full">
                    <input
                      className="w-full text-center"
                      type="text"
                      value="1"
                    />
                  </div>
                  <div className="">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
                <button className="relative w-fit h-12 mb-5 mr-4 pb-3 pt-3.5 pr-7 pl-[50px] border-solid border-[1px] border-[#e1e1e1] rounded-full bg-black font-[Quicksand] text-white text-base font-bold uppercase">
                  <div className="inline-block absolute left-0 -translate-y-[30%] -translate-x-[22%] transition-all  w-[50px] h-[50px] bg-[#f45d96] text-xl text-center leading-10 rounded-full">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  add to cart
                </button>

                <div className="inline-block transition-all w-[50px] h-[50px] bg-[#e1e1e1] text-xl text-center leading-10 rounded-full">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Related product */}
      <div></div>
    </div>
  );
}
