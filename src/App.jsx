import React from "react";
import Navbar from "./common/layout/Navbar";
import Benefits from "./modules/home/pages/Benefits";
import Footer from "./common/layout/Footer/Footer";
import Instagram from "./common/layout/Instagram";
import Posts from "./modules/home/pages/Posts";
import CallToAction from "./modules/home/pages/CallToAction";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Benefits />
      <CallToAction />
      <Posts/>
      <Instagram />
      <Footer />
    </React.Fragment>
  );
}
