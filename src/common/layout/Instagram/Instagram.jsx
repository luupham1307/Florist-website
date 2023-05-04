import React from "react";
import ContainerFuild from "../../components/ContainerFuild";
import InstagramItem from "./InstagramItem";

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
        <div className="grid grid-cols-1 gap-2 px-[15px] py-[10px] sm:grid-cols-2 lg:flex">
          {instagramImagesUrl.map((imgUrl, index) => {
            return <InstagramItem imgUrl={imgUrl} index={index} />;
          })}
        </div>
      </ContainerFuild>
    </div>
  );
}
