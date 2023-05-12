import React, { useState } from "react";
import Container from "../../common/components/Container";
import ServicesDetail from "./components/ServicesDetail";
import ServiceType from "../../common/components/ServiceType";
import Overlay from "../../common/components/Overlay";

export default function Services() {
  let arrServices = [
    {
      imgUrl:
        "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-1.png.webp",
      heading: "Customer order",
      description:
        "Flower help you perfectly express how important your significant",
      price: "From $60 - $300",
    },
    {
      imgUrl:
        "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-2.png.webp",
      heading: "Event decoration",
      description:
        "Flower help you perfectly express how important your significant",
      price: "From $100 - $300",
    },
    {
      imgUrl:
        "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-3.png.webp",
      heading: "Green landscape",
      description:
        "Flower help you perfectly express how important your significant",
      price: "From $150 - $300",
    },
  ];
  const [showVideo, setShowVideo] = useState(false);
  const [showSerDetail, setShowSerDetail] = useState(false);
  function hanldeShowVideoModal(e) {
    e.preventDefault();
    setShowVideo(!showVideo);
  }

  function handleShowSerDetail() {
    setShowSerDetail(!showSerDetail);
  }

  return (
    <div className="py-10 lg:py-24 max-w-[1140px] mx-auto">
      <Container>
        <div className="lg:flex">
          {/* Servivce type */}
          <ServiceType
            onShowSerDetail={handleShowSerDetail}
            showSerDetail={showSerDetail}
            arrSer={arrServices}
          />

          {/* Service detail */}
          <ServicesDetail
            onShowVideo={hanldeShowVideoModal}
            arrSer={arrServices}
          />
        </div>
      </Container>

      {/* modal video */}
      {showVideo && (
        <div>
          <Overlay />
          <div className=" z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[900px] h-[500px] p-4 rounded-lg bg-white ">
            <iframe
              className="rounded-md"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0ydkCV7hd1c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <a
              className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/2"
              href=""
            >
              <i
                onClick={hanldeShowVideoModal}
                class="text-xl text-[#f45d96] fa-solid fa-circle-xmark"
              ></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
