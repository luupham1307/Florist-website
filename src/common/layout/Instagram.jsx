import { Fragment } from "react";
import ContainerFuild from "../components/ContainerFuild";

export default function Instagram() {
  const instagramImagesUrl = [
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-1.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-2.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-3.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-4.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-5.jpg",
  ];


  return (
    <div>
      <ContainerFuild>
        <div className="grid grid-cols-1 gap-2 px-[15px] sm:grid-cols-2 lg:flex">
          {instagramImagesUrl.map((imgUrl, index) => {
            return (
              <div className="relative h-[372px]" key={index}>
                <img
                  className=" h-full object-cover bg-top"

                  src={imgUrl}
                  alt={`instagram-${index}`}
                // onmouseover={handleShowInsta}
                />
                <div className="absolute top-1/2 -translate-y-1/2 w-full py-5 lg:px-[30px] lg:py-4 bg-[#ffffff] text-center transition ">
                  <i className="text-[#f45d96] text-[30px] fa-brands fa-instagram"></i>
                  <h6>
                    Follow us
                    <a href="" className="underline">
                      @florist
                    </a>
                  </h6>
                </div>
              </div>

            );
          })}
        </div>
      </ContainerFuild>
    </div>
  );
}
