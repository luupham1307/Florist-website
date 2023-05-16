import React from "react";

export default function Detail() {
  return (
    <div>
      {/* Product Detail */}
      <div className="py-5">
        <Container></Container>
      </div>

      {/* Related product */}
      <div className="pb-[60px]">
        <h2 className="font-['Libre_Baskerville'] text-h2 text-[#111111] font-normal text-center">
          Related product
        </h2>
        <div className="flex flex-wrap"></div>
      </div>
    </div>
  );
}
