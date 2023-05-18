import React from "react";

import MyTeam from "./pages/MyTeam";
import About from "../../common/components/About";
import Slice from "../../common/components/Slice";
import Testimonial from "../../common/components/Testimonial/Testimonial";
import Out_Services from "./pages/Services";

export default function AboutNav() {
  return (
    <React.Fragment>
      <Slice pageHeader={"About Us"} pageName={"About"} />
      <About />
      <Out_Services />
      <Testimonial />
      <MyTeam />
    </React.Fragment>
  );
}
