import React from "react";
import Slice from "../../common/components/Slice";
import Shop from "./pages/Shop";
  
export default function ShopNav() {
  return (
    <React.Fragment>
      <Slice pageHeader={"Shop"} pageName={"Shop"} />
      <Shop />
    </React.Fragment>
  );
}
