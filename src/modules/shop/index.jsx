import React from "react";
import Slice from "../../common/components/Slice";
import Shop from "./pages/Shop";
import ShopDetail from "../cart/ShopDetail";

export default function ShopNav() {
  return (
    <React.Fragment>
      <Slice pageHeader={"Shop"} pageName={"Shop"} />
      <Shop />
    </React.Fragment>
  );
}
