import React from "react";
import ProductItem from "./ProductItem";

export default function ProductListing() {
  return (
    <div className="w-full px-[15px] md:px-0 mx-auto">
      <div className="flex flex-wrap mx-[18px]">
        {product.map((productItem, index) => (
          <ProductItem key={index} productItem={productItem} index={index} />
        ))}
      </div>
    </div>
  );
}