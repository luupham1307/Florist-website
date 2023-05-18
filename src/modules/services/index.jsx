import React from "react";
import Slice from "../../common/components/Slice";
import Services from "./pages/Services";

export default function ServicesNav() {
  return (
    <React.Fragment>
      <Slice pageHeader={"Our Service"} pageName={"Service"} />
      <Services />
    </React.Fragment>
  );
}
