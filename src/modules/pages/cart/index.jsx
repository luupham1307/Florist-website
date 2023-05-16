import React from "react";
import Slice from "../../../common/components/Slice";
import CartDetails from "./pages/CartDetails";
import Checkout from "./pages/Checkout";
import ShopDetail from "../../shop/pages/ShopDetails";

export default function PagesNav() {
  return (
    <React.Fragment>
      <Slice />,
      <CartDetails />
      <Checkout />
      {/* <ShopDetail /> */}
    </React.Fragment>
  );
}
