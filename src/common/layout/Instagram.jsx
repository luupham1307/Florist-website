import React from "react";
import Container from "../container/Container";

export default function Instagram() {
  const instagramImagesUrl = [
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-1.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-2.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-2.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-4.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Instagram/insta-5.jpg",
  ];
  return (
    <div>
      <Container>
        <div>
          {instagramImagesUrl.map((imgUrl, index) => {
            return <img src={imgUrl} alt="instagram-${index}" />;
          })}
        </div>
      </Container>
    </div>
  );
}
