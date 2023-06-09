import React from "react";
import Slice from "../../common/components/Slice";
import Contact from "./pages/Contact";

export default function ContactNav() {
  return (
    <React.Fragment>
      <Slice pageHeader={"Contact us"} pageName={"contact"} />
      <Contact />
    </React.Fragment>
  );
}
