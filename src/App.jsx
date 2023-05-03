import React from "react";
import Footer from "./common/layout/Footer/Footer";
import Instagram from "./common/layout/Instagram";
import Posts from "./modules/home/pages/Posts";

export default function App() {
  return (
    <React.Fragment>
      {/* <Posts/> */}
      <Instagram />
      <Footer />
    </React.Fragment>
  );
}
