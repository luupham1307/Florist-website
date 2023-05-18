import React from "react";
import Slice from "../../common/components/Slice";
import CartDetails from "./CartDetails";
import Checkout from "./Checkout";
import ProductDetail from "../../common/components/Product/ProductDetail";

export default function PagesNav() {
  return (
    <React.Fragment>
      <Slice />,
      <CartDetails />
      <Checkout />
      {/* <ProductDetail /> */}
    </React.Fragment>
  );
}