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
              <div className="mb-10 relative">
                <div className="w-full">
                  <p className="font-[Quicksand] uppercase text-[#f45d96] text-[13px] font-bold ">
                    Succulent
                  </p>
                  <h3 className="font-['Libre_Baskerville']mb-2.5 text-[30px] font-normal">
                    Fly me to the moon
                  </h3>
                  <ul className="flex w-full ">
                    <li className="inline-block mr-[35px] after:content-['|'] after:text-[#aeaeae] after:absolute after:right-2/3 after:-translate-x-[55px]">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li className="inline-block mr-[35px] after:content-['|'] after:text-[#aeaeae] after:absolute after:right-1/2 after:-translate-x-[30px]">
                      03 reviews
                    </li>
                    <li> write a review</li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 font-[Quicksand] text-[#f45d96] font-bold text-[30px]">
                  <p>$ 34.00</p>
                </div>
              </div>

              <ul>
                <li>Categories:Succulent</li>
                <li>Poduct code: PM 101</li>
                <li>Reward points: 30</li>
                <li>Availability:In Stock</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Related product */}
      <div></div>
    </div>
  );
}
