import React from "react";
import Navbar from "./common/layout/Navbar";
import Benefits from "./modules/home/pages/Benefits";
import Footer from "./common/layout/Footer/Footer";
import Instagram from "./common/layout/Instagram";
// import Posts from "./modules/home/pages/Posts";
export default function App() {
  return (
    <React.Fragment>

      <Navbar />
      <Benefits />

      {/* <Posts/> */}
      <Instagram />
      <Footer />
    </React.Fragment>
  );
}
