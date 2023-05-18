import React from "react";
import Slice from "../../common/components/Slice";
import CartDetails from "./CartDetails";
import Checkout from "./Checkout";
import ShopDetail from "./ShopDetail";
import BlogDetail from "./BlogDetail";

export default function PagesNav() {
  return (
    <React.Fragment>
      <Slice pageHeader={"Shopping cart"} pageName={"Shopping cart"} />,
      <CartDetails />
      <Checkout />
      <ShopDetail />
      <BlogDetail />
    </React.Fragment>
  );
}
